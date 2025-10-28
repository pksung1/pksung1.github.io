import type { Loader, LoaderContext } from "astro/loaders";
import { contentLoader } from "./glob";

interface GlobLoaderOptions {
  pattern: string;
}

export const globLoader = ({ pattern }: GlobLoaderOptions): Loader => {
  return {
    name: 'vidi-glob-loader',
    load: async ({ collection, store, parseData, logger }: LoaderContext) => {

      store.clear();
      const contents = await contentLoader(pattern);

      for (const content of contents) {
        const id = `${collection}/${content.meta.slug}`;
        const parsedContent = await parseData({
          id,
          data: {
            title: content.title,
            ...content.meta,
          },
          filePath: content.path,
        });

        store.set({
          id,
          data: parsedContent,
        });
      }

      logger.info(`Loaded ${contents.length} contents for collection ${collection}`);
    }
  }
}