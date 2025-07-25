FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY storybook-static/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

 