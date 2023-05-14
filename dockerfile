FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY . /var/www
WORKDIR /var/www

RUN apk add --update nodejs npm pnpm
RUN npm i -g pm2
RUN pnpm install
RUN pnpm build

EXPOSE 80

ENTRYPOINT ["sh", "start.sh"]
