FROM nginx:alpine
COPY web/dist/web /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf