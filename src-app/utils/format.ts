export const filename = (path: string) => {
  const parts = path.split('/');

  // 마크다운추가
  return parts[parts.length - 1];
}