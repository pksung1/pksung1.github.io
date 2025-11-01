import { glob } from 'glob';
import { open, readFile } from 'fs/promises';
import fm from 'front-matter'
import path from 'path';

interface Meta {
  is_published: boolean;
  slug: string;
  [key: string]: any;
}

interface Content {
  path: string;
  title: string;
  meta: Meta;
  body: string;
}

/**
 * 블로그 컨텐츠를 로드합니다. is_published가 true인 것만 로드합니다
 * @param path 
 */
export const contentLoader = async (pattern: string): Promise<Content[]> => {

  const contentPaths = await glob(pattern);

  const contents = await Promise.all(contentPaths.map(async (contentPath) => {
    const meta = await getFrontMatter(contentPath);
    const title = path.basename(contentPath);
    return {
      path: contentPath,
      title: title,
      meta: meta?.attributes as Partial<Meta>,
    };
  }))

  return await Promise.all(contents.filter((content) => content.meta?.is_published).map(async (content: Content) => {
    
    return {
      ...content,
      body: await getContent(content.path),
    }
  }));
}

const getContent = async (path: string) => {
  return fm(await readFile(path, 'utf-8')).body;
}

const getFrontMatter = async (path: string) => {
  const fileHandler = await open(path, 'r');
  const buffer = Buffer.alloc(4096);
  

  let position = 0;
  let value = ''
  while (true) {
    const result = await fileHandler.read(buffer, 0, 4096, position)

    if (result.bytesRead === 0) break;

    value += buffer.toString('utf-8', 0, result.bytesRead);
    position += result.bytesRead;

    if (isFrontMatter(value)) {
      fileHandler.close();
      return fm(value);
    }
  }
  fileHandler.close();
  return null;
}

const isFrontMatter = (content: string) => {
  const regex = /^---[\s\S]*?^---/m;
  const match = content.match(regex);
  if (!match) return false;

  return true;
}
