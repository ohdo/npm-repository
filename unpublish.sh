# 更新版本号
for dir in repository/*
do
  cd $dir
  pwd
  npm unpublish --force
  cd ../../
done