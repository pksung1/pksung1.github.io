
interface Post {
  title: string;
  frontmatter: {
    publishAt?: Date;
  }
  body: string;
  internal: {
    contentFilePath: string;
  }
}