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

interface IFileFindResult {
  md: string[]
  img: string[]
}

/**
 * 
 * @param dir 폴더위치
 * @returns 폴더 위치에서부터 내부 depth로 들어가 찾은 모든 파일들을 filenameRegex 필터링한값
 */
async function _recursiveFindFiles(dir: string): Promise<IFileFindResult> {
  // 폴더의 파일목록을 불러옴
  const files = await fs.readdir(dir, {})
  let result: IFileFindResult = {
    md: [],
    img: [],
  }
  
  // 불러온 파일들 순회
  for (let file of files) {
    const filePath = path.join(dir, file)

    // 파일의 정보를 가져온다.
    const stat = await fs.stat(filePath)

    // 파일이 폴더라면 내부 순회를 시작한다.
    if (stat.isDirectory()) {
      const childResult = await _recursiveFindFiles(filePath)
      // childResult와 result를 병합한다.
      result = {
        md: [...result.md, ...childResult.md],
        img: [...result.img, ...childResult.img]
      }

      // 파일이름에 .png, .md가 들어가있다면 결과에 경로를 추가한다.
    } else if (path.extname(filePath) === '.md') {
      result.md.push(filePath)
    } else if (path.extname(filePath) === '.png') {
      result.img.push(filePath)
    }
  }
  return result;
}

function getFileName(dir: string, filename: string) {
  return filename.slice(filename.indexOf(path.basename(dir)), filename.length)
}

async function getFileInfos(dir: string) {
  
  const findFiles = await getFiles(dir)

  return findFiles;
}

export {
  getFiles,
  getFileName,
  getFileInfos,
}