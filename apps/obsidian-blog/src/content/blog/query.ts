import { getCollection, getEntry, type CollectionEntry } from 'astro:content';


export const getBlogPosts = async (): Promise<CollectionEntry<'blog'>[]> => {
  const blogPosts = await getCollection('blog');
  return blogPosts.sort((a, b) => b.data.published_date?.valueOf() - a.data.published_date?.valueOf());
};

export const getBlogPostBySlug = async (slug: string): Promise<CollectionEntry<'blog'> | undefined> => {
  return getEntry('blog', slug);
};