FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY . /var/www
WORKDIR /var/www

RUN apk add --update nodejs npm yarn
RUN npm i -g pm2
RUN yarn
RUN yarn build

EXPOSE 80

ENTRYPOINT ["sh", "start.sh"]
