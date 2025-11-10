'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';

interface BlogPostCardProps {
  /** 포스트 ID */
  id: string;
  /** 포스트 제목 */
  title: string;
  /** 포스트 설명 */
  description?: string;
  /** 발행일 (ISO 문자열) */
  publishedDate?: string | null;
  /** 태그 목록 */
  tags?: string[];
}

export function BlogPostCard({
  id,
  title,
  description,
  publishedDate,
  tags,
}: BlogPostCardProps) {
  // 날짜 포맷팅
  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formattedDate = formatDate(publishedDate);
  const hasMetadata = formattedDate || (tags && tags.length > 0);

  return (
    <a
      href={`/blog/${id}`}
      className="block cursor-pointer hover:opacity-90 transition-opacity"
    >
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        {hasMetadata && (
          <CardFooter className="flex items-center gap-2 text-sm text-muted-foreground">
            {formattedDate && <span>{formattedDate}</span>}
            {tags && tags.length > 0 && (
              <div className="flex gap-1 flex-wrap">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 text-xs bg-secondary rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardFooter>
        )}
      </Card>
    </a>
  );
}

