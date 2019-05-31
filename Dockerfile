FROM node:8

# set working directory
WORKDIR /app

COPY . .


RUN npm install --prefix /var/task
RUN npm -g install serve
Run npm rebuild node-sass --force
RUN npm run build 

# start app
CMD ["serve", "-p", "3000", "-s" , "build"]
