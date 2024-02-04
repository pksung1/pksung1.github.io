
export const filename = (filePath: string) => {
  const parts = filePath.split('/');

  // 마크다운추가
  return parts[parts.length - 1].split('.').slice(0, -1).join(' ');
}

export const getTitle = (filePath: string) => {
  const name = filename(filePath);
  return name;
}

export const getPostSlug = (filePath: string) => {

  // /posts/title-is-lowercase-and-dash.md
  const name = filename(filePath);
  return name.split(' ').join('-').toLowerCase();

  // return filename(filePath).split('.').slice(0, -1).join('.');
}