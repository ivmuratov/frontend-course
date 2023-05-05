cd ~/frontend-course
npm run build:prod

rm -rf ~/../var/www/frontend-course/html
mv ~/frontend-course/build ~/../var/www/frontend-course/html