import type { Loader, LoaderContext } from "astro/loaders";
import { contentLoader } from "./glob";

interface GlobLoaderOptions {
  pattern: string;
}

export const globLoader = ({ pattern }: GlobLoaderOptions): Loader => {
  return {
    name: 'vidi-glob-loader',
    load: async ({ collection, store, parseData, logger, generateDigest, renderMarkdown}: LoaderContext) => {

      store.clear();
      const contents = await contentLoader(pattern);

      for (const content of contents) {
        const id = content.meta.slug;
        const parsedContent = await parseData({
          id,
          data: {
            title: content.title,
            ...content.meta,
          },
          filePath: content.path,
        });

        const digest = generateDigest(parsedContent);

        store.set({
          id,
          data: parsedContent,
          rendered: await renderMarkdown(content.body),
          digest,
        });
      }

      logger.info(`Loaded ${contents.length} contents for collection ${collection}`);
    }
  }
}