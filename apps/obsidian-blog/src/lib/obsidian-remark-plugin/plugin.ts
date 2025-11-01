import type { Root } from 'mdast';
import type { VFile } from 'vfile';
import { findAndReplace } from 'mdast-util-find-and-replace';
import { visit } from 'unist-util-visit';

// ![[image.png]] -> ![image.png](image.png)
export default function ObsidianRemarkPlugin() {

  return (tree: Root, file: VFile) => {
    visit(tree, 'image', (node) => {
      console.log(node);
      // node 안에 ![[]] 혹은 [[value]] 형태의 문자열이 있으면 replace 처리 진행
      // 1. ![[]] 형태의 문자열을 찾아서 ![value](value) 형태의 문자열로 변경


      // 2. [[value]] 형태의 문자열은 [value](value) 형태의 문자열로 변경
      
    });
  }
}