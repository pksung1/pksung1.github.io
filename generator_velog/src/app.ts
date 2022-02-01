import {program} from 'commander'
import {getFiles} from './utils';


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

getFiles(options.dir)