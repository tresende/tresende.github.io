cd /var/www && pm2 start yarn --name "nextjs" --interpreter sh -- start & nginx -g 'daemon off;'
