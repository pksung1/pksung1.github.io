import { unified } from 'unified';
import remarkParse from 'remark-parse';
import ObsidianRemarkPlugin from './plugin';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
import remarkStringify from 'remark-stringify';

describe('remarkObsidianWikilink', () => {
  it('should convert image wikilinks', async () => {
    const processor = unified()
      .use(ObsidianRemarkPlugin)
      .use(remarkParse)
      .use(remarkStringify)
      // .use(remarkRehype)
      // .use(rehypeSanitize)
      // .use(rehypeStringify);

    const result = await processor.process('# Hello World\n![[image.png]]');
    // const result = await processor.process('# Hello World\n![image.png](image.png)');

    console.log('result', result.value);
    
    expect(result).toBeDefined();
  });
});