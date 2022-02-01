import {program} from 'commander'
import {getFileInfos, getFileName} from './utils';
import {createBucket, generateUploadImageFilter, uploadFile} from './aws'

const DEV = true

type Options = {
  dir: string,
  outDir: string,
  googleKey: string,
}

let options: Options = {
  dir: '../content',
  outDir: './output',
  googleKey: 'KEYYY'
}

program
  .option('-d, --dir <string>', '검색할 폴더입니다. md 파일과 이미지파일을 읽어들입니다.')
  .option('-o, --outDir <string>', '결과를 보여줄 폴더입니다.')
  .option('-g, --googleKey <string>', '업로드를 위해 구글 키가 필요합니다.');

const programOptions = DEV ? options : program.opts<Options>()

if (!programOptions.googleKey) {
  console.log('Google key가 없습니다.')
  process.exit();
} else {
  const options = programOptions;
  console.log(options.dir, options.outDir, options.googleKey)  
}

async function start () {
  // S3 bucket 생성하기
  console.time('S3 bucket 생성하기')
  await createBucket();
  console.timeEnd('S3 bucket 생성하기')

  console.time('md, 이미지 파일 분리하기')
  const findFiles = await getFileInfos(options.dir)
  console.timeEnd('md, 이미지 파일 분리하기')

  console.time('Upload 이미지 필터 생성')
  const uploadImageFilter = await generateUploadImageFilter();
  console.timeEnd('Upload 이미지 필터 생성')

  console.time('올릴 이미지 파일 이름정하기')
  const uploadFiles = findFiles.img
    .map(filepath => ({filepath, s3Name: getFileName(options.dir, filepath)}))
    .filter(uploadImageFilter)
  console.timeEnd('올릴 이미지 파일 이름정하기')
  
  console.log(uploadFiles)
  uploadFiles.forEach(async ({filepath, s3Name}) => {
    console.time(`${s3Name} 업로드`)
    await uploadFile(filepath, s3Name)
    console.timeEnd(`${s3Name} 업로드`)
  })
}

start();
