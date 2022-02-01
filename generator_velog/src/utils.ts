import path from 'path'
import fs from 'fs/promises'



/**
 * @param dir 검색할 폴더 위치
 */
async function getFiles (dir: string) {
  const targetDir = path.join(process.cwd(), dir)
  const result = await _recursiveFindFiles(targetDir)
  return result;
}

const filenameRegex = new RegExp(/[.png|.md]$/)

/**
 * 
 * @param dir 폴더위치
 * @returns 폴더 위치에서부터 내부 depth로 들어가 찾은 모든 파일들을 filenameRegex 필터링한값
 */
async function _recursiveFindFiles(dir: string): Promise<string[]> {
  // 폴더의 파일목록을 불러옴
  const files = await fs.readdir(dir, {})
  let result: string[] = []
  
  // 불러온 파일들 순회
  for (let file of files) {
    const filePath = path.join(dir, file)

    // 파일의 정보를 가져온다.
    const stat = await fs.stat(filePath)

    // 파일이 폴더라면 내부 순회를 시작한다.
    if (stat.isDirectory()) {
      const childResult = await _recursiveFindFiles(filePath)
      // childResult와 result를 병합한다.
      result = [...result, ...childResult]

      // 파일이름에 .png, .md가 들어가있다면 결과에 경로를 추가한다.
    } else if (filenameRegex.test(file)) {
      result.push(filePath)
    }
  }
  return result;
}

export {
  getFiles
}