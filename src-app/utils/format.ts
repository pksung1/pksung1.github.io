
export const filename = (filePath: string) => {
  const parts = filePath.split('/');

  // 마크다운추가
  return parts[parts.length - 1];
}

export const getTitle = (filePath: string) => {
  const name = filename(filePath);
  return name.split('.').slice(0, -1).join('.');
}