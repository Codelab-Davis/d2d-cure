// PUT ACCESS KEYS IN ENV! 

import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-2', 
  accessKeyId: 'AKIAWWE2IXR2NTIXBBZ3',
  secretAccessKey: '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'
});

const s3 = new AWS.S3();
export default s3;