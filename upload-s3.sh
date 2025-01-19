#!/bin/bash

npm run build

aws s3 rm s3://docs.statemesh.net --recursive
aws s3 cp build/ s3://docs.statemesh.net --recursive
aws cloudfront create-invalidation --distribution-id E20AKDRD0MU3GU --paths "/*"
exit
