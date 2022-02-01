import AWS, { S3 } from 'aws-sdk';
import { ObjectList } from 'aws-sdk/clients/s3';
import { S3Customizations } from 'aws-sdk/lib/services/s3';
import fs from 'fs'

const credentials = new AWS.SharedIniFileCredentials({profile: 'velog-uploader'});
AWS.config.credentials = credentials;
// 서울 설정
AWS.config.update({region: 'ap-northeast-2'})

// API 버전 설정
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const BUCKET_NAME = 'velog-upload-bucket'

console.log('READY S3')

async function createBucket () {
  try {
    await s3.createBucket({Bucket: BUCKET_NAME}).promise()
  } catch (e) {
    console.log('이미 존재합니다!')
  }
  console.log(await s3.getBucketLocation({Bucket: BUCKET_NAME}).promise())
}

async function getListObjects () {
  return await s3.listObjects({Bucket: BUCKET_NAME}).promise();
}

async function uploadFile (filePath: string, s3Name: string) {

  console.log(`Try upload : ${filePath}, name is ${s3Name}`)
  const uploadParams: S3.Types.PutObjectRequest = {Bucket: BUCKET_NAME, Key: '', Body: ''}
  const fileStream = fs.createReadStream(filePath)

  uploadParams.Body = fileStream;
  uploadParams.Key = s3Name;

  s3.upload(uploadParams, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  })
  
}

type UploadImageFilterType = {
  filepath: string;
  s3Name: string;
}

async function generateUploadImageFilter () {
  
  const images = await getListObjects();
  const searchMap = images.Contents.reduce<{[key: string]: boolean}>((resultImage, currentImage) => {
    return {...resultImage, [currentImage.Key]: false}
  }, {})

  // searchMap[s3Name] 이 null이라면 true 리턴
  return ({s3Name}: UploadImageFilterType) => searchMap[s3Name] ?? true
}

export {createBucket, uploadFile, getListObjects, generateUploadImageFilter}
