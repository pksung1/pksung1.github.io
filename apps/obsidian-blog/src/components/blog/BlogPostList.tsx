'use client';

import { useEffect, useState } from 'react';
import { BlogPostCard } from './BlogPostCard';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  publishedDate: string | null;
  tags: string[];
  slug: string;
}

interface BlogPostListProps {
  /** 초기 포스트 데이터 */
  initialPosts: BlogPost[];
  /** 초기 선택된 태그 */
  initialSelectedTags?: string[];
  /** 페이지당 포스트 수 */
  postsPerPage?: number;
}

export function BlogPostList({
  initialPosts,
  initialSelectedTags = [],
  postsPerPage = 6,
}: BlogPostListProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedTags, setSelectedTags] = useState<string[]>(initialSelectedTags);
  const [currentPage, setCurrentPage] = useState(1);

  // 태그 변경 이벤트 리스너
  useEffect(() => {
    const handleTagsChanged = (event: CustomEvent<{ tags: string[] }>) => {
      const tags = event.detail.tags || [];
      setSelectedTags(tags);
      setCurrentPage(1); // 태그 변경 시 첫 페이지로 리셋
    };

    window.addEventListener('tagsChanged', handleTagsChanged as EventListener);
    return () => {
      window.removeEventListener('tagsChanged', handleTagsChanged as EventListener);
    };
  }, []);

  // 필터링 및 정렬
  useEffect(() => {
    let filtered = initialPosts;

    // 태그 필터링
    if (selectedTags.length > 0) {
      filtered = initialPosts.filter((post) =>
        selectedTags.some((tag) => post.tags?.includes(tag))
      );
    }

    // 날짜 기준 정렬 (최신순)
    filtered.sort((a, b) => {
      const dateA = a.publishedDate ? new Date(a.publishedDate).getTime() : 0;
      const dateB = b.publishedDate ? new Date(b.publishedDate).getTime() : 0;
      return dateB - dateA;
    });

    setPosts(filtered);
  }, [selectedTags, initialPosts]);

  // 페이지네이션
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  if (paginatedPosts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>선택한 태그에 해당하는 포스트가 없습니다.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mb-12">
        {paginatedPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            publishedDate={post.publishedDate}
            tags={post.tags}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Pagination" className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              이전
            </button>
            <span className="px-4 py-2 text-sm text-gray-700">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              다음
            </button>
          </div>
        </nav>
      )}
    </>
  );
}

