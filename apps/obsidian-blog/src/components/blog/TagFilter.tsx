'use client';

import { useOptimistic, useState } from 'react';
import {
  Tags,
  TagsContent,
  TagsEmpty,
  TagsGroup,
  TagsInput,
  TagsItem,
  TagsList,
  TagsTrigger,
  TagsValue,
} from '@/components/ui/shadcn-io/tags';
import { CheckIcon } from 'lucide-react';

interface TagFilterProps {
  /** 사용 가능한 모든 태그 목록 */
  availableTags: string[];
  /** 현재 선택된 태그들 */
  selectedTags: string[];
  /** 태그 선택 변경 시 호출되는 콜백 (optional) */
  onTagsChange?: (tags: string[]) => void;
  /** 컴포넌트 클래스명 */
  className?: string;
}

export function TagFilter({
  availableTags,
  selectedTags: initialSelectedTags,
  onTagsChange,
  className,
}: TagFilterProps) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  // useOptimistic을 사용한 낙관적 업데이트
  const [optimisticTags, addOptimisticTags] = useOptimistic(
    initialSelectedTags,
    (currentTags, newTags: string[]) => {
      // 낙관적 업데이트: 즉시 새로운 태그로 업데이트
      return newTags;
    }
  );

  // 검색어로 필터링된 태그 목록
  const filteredTags = availableTags.filter((tag) =>
    tag.toLowerCase().includes(searchValue.toLowerCase())
  );

  // URL 업데이트 함수 (페이지 리로드 없이)
  const updateUrl = async (tags: string[]) => {
    // 비동기 작업 시뮬레이션 (실제로는 즉시 완료되지만 useOptimistic 패턴 유지)
    return new Promise<void>((resolve) => {
      const url = new URL(window.location.href);
      if (tags.length > 0) {
        url.searchParams.set('tags', tags.join(','));
      } else {
        url.searchParams.delete('tags');
      }
      // 페이지 리로드 없이 URL만 업데이트
      window.history.pushState({}, '', url.toString());
      
      // 필터링 이벤트 발생
      window.dispatchEvent(new CustomEvent('tagsChanged', { 
        detail: { tags } 
      }));
      
      resolve();
    });
  };

  // 태그 선택/해제 핸들러 (낙관적 업데이트)
  const handleTagToggle = async (tag: string) => {
    const newTags = optimisticTags.includes(tag)
      ? optimisticTags.filter((t) => t !== tag)
      : [...optimisticTags, tag];
    
    // 낙관적 업데이트: 즉시 UI 업데이트
    addOptimisticTags(newTags);
    
    try {
      if (onTagsChange) {
        onTagsChange(newTags);
      } else {
        await updateUrl(newTags);
      }
    } catch (error) {
      // 에러 발생 시 원래 상태로 롤백 (필요한 경우)
      console.error('태그 업데이트 실패:', error);
    }
  };

  // 태그 제거 핸들러 (낙관적 업데이트)
  const handleTagRemove = async (tag: string) => {
    const newTags = optimisticTags.filter((t) => t !== tag);
    
    // 낙관적 업데이트: 즉시 UI 업데이트
    addOptimisticTags(newTags);
    
    try {
      if (onTagsChange) {
        onTagsChange(newTags);
      } else {
        await updateUrl(newTags);
      }
    } catch (error) {
      // 에러 발생 시 원래 상태로 롤백 (필요한 경우)
      console.error('태그 제거 실패:', error);
    }
  };

  return (
    <Tags
      value={optimisticTags.join(',')}
      open={open}
      onOpenChange={setOpen}
      className={className}
    >
      <TagsTrigger>
        {optimisticTags.length > 0 ? (
          optimisticTags.map((tag) => (
            <TagsValue key={tag} onRemove={() => handleTagRemove(tag)}>
              {tag}
            </TagsValue>
          ))
        ) : (
          <span className="px-2 py-px text-muted-foreground">태그 선택...</span>
        )}
      </TagsTrigger>
      <TagsContent>
        <TagsInput
          placeholder="태그 검색..."
          value={searchValue}
          onValueChange={setSearchValue}
        />
        <TagsList>
          <TagsEmpty>태그를 찾을 수 없습니다.</TagsEmpty>
          <TagsGroup>
            {filteredTags.map((tag) => {
              const isSelected = optimisticTags.includes(tag);
              return (
                <TagsItem
                  key={tag}
                  value={tag}
                  onSelect={() => handleTagToggle(tag)}
                >
                  <span>{tag}</span>
                  {isSelected && <CheckIcon className="ml-auto size-4" />}
                </TagsItem>
              );
            })}
          </TagsGroup>
        </TagsList>
      </TagsContent>
    </Tags>
  );
}

