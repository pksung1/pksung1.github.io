import AWS from 'aws-sdk';

const credentials = new AWS.SharedIniFileCredentials({profile: 'velog-uploader'});
AWS.config.credentials = credentials;
// 서울 설정
AWS.config.update({region: 'ap-northeast-2'})


const s3 = new AWS.S3({apiVersion: '2022-02-01'});

s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});

export {s3}
