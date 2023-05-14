cd /var/www && pm2 start pnpm --name "nextjs" --interpreter sh -- start & nginx -g 'daemon off;'
