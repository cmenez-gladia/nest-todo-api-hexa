FROM node:18

EXPOSE 80

WORKDIR /app

CMD ["tail", "-f", "/dev/null"]
