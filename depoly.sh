

dist="./dist/*"
product="/usr/share/nginx/html"
url="root@8.219.51.41"

#清空发布目录的文件
ssh -t ${url} "rm -rf ${product}/defipay-payment.js"

复制编译好的文件到发布目录
# echo "----------starting depolying...---t--------"
scp -r dist/*  ${url}:${product}
# echo "----------depolying success----------"