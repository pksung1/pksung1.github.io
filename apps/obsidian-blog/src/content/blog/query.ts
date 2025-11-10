import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

// 공통 정렬 함수: published_date 기준 내림차순 정렬
const sortByPublishedDate = (a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>): number => {
  const dateA = a.data.published_date?.valueOf() ?? 0;
  const dateB = b.data.published_date?.valueOf() ?? 0;
  return dateB - dateA;
};

// 필터 옵션 인터페이스
export interface BlogPostFilterOptions {
  /** 하나 이상의 태그를 포함하는 포스트 필터링 (OR 조건) */
  tags?: string[];
  /** 모든 태그를 포함하는 포스트 필터링 (AND 조건) */
  tagsAll?: string[];
  /** 발행 여부로 필터링 */
  isPublished?: boolean;
  /** 발행일 시작 범위 */
  publishedDateFrom?: Date;
  /** 발행일 종료 범위 */
  publishedDateTo?: Date;
  /** 제목 검색 (부분 일치) */
  titleSearch?: string;
}

export const getBlogPosts = async (): Promise<CollectionEntry<'blog'>[]> => {
  const blogPosts = await getCollection('blog');
  return blogPosts.sort(sortByPublishedDate);
};

export const getBlogPostBySlug = async (slug: string): Promise<CollectionEntry<'blog'> | undefined> => {
  return getEntry('blog', slug);
};

export const getBlogPostsByTag = async (tag: string): Promise<CollectionEntry<'blog'>[]> => {
  // getCollection의 필터만 사용 (중복 filter 제거)
  const blogPosts = await getCollection('blog', (post) => post.data.tags?.includes(tag));
  return blogPosts.sort(sortByPublishedDate);
};

/**
 * 여러 조건으로 블로그 포스트를 필터링하는 함수
 * @param options 필터 옵션
 * @returns 필터링된 블로그 포스트 배열
 */
export const getBlogPostsWithFilter = async (
  options: BlogPostFilterOptions = {}
): Promise<CollectionEntry<'blog'>[]> => {
  const {
    tags,
    tagsAll,
    isPublished,
    publishedDateFrom,
    publishedDateTo,
    titleSearch,
  } = options;

  const blogPosts = await getCollection('blog', (post) => {
    // is_published 필터
    if (isPublished !== undefined && post.data.is_published !== isPublished) {
      return false;
    }

    // tags 필터 (OR 조건: 하나라도 포함하면 됨)
    if (tags && tags.length > 0) {
      const hasAnyTag = tags.some(tag => post.data.tags?.includes(tag));
      if (!hasAnyTag) return false;
    }

    // tagsAll 필터 (AND 조건: 모두 포함해야 함)
    if (tagsAll && tagsAll.length > 0) {
      const hasAllTags = tagsAll.every(tag => post.data.tags?.includes(tag));
      if (!hasAllTags) return false;
    }

    // published_date 범위 필터
    if (publishedDateFrom || publishedDateTo) {
      const postDate = post.data.published_date;
      if (!postDate) return false;

      const postDateValue = postDate.valueOf();
      if (publishedDateFrom && postDateValue < publishedDateFrom.valueOf()) {
        return false;
      }
      if (publishedDateTo && postDateValue > publishedDateTo.valueOf()) {
        return false;
      }
    }

    // 제목 검색 필터
    if (titleSearch) {
      const searchLower = titleSearch.toLowerCase();
      const titleLower = post.data.title.toLowerCase();
      if (!titleLower.includes(searchLower)) {
        return false;
      }
    }

    return true;
  });

  return blogPosts.sort(sortByPublishedDate);
};

export const getBlogPostsAllTags = async (): Promise<string[]> => {
  const blogPosts = await getCollection('blog');
  // Set을 사용하여 중복 제거 및 정렬
  const tags = new Set<string>();
  for (const post of blogPosts) {
    post.data.tags?.forEach(tag => tags.add(tag));
  }
  return Array.from(tags).sort();
};