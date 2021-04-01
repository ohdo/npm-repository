yarn
# 更新版本号
for dir in repository/*
do
  cd $dir
  pwd
  npm version minor
  cd ../../
done

npm run build
for dir in dist/repository/*
do
  cd $dir
  pwd
  npm publish
  cd ../../../
done