FROM node:8.5.0
MAINTAINER Ossaija Thankgod<codebugsolved@gmail.com>
RUN useradd --user-group --create-home --shell /bin/false app && \
  npm install nodemon --global \
  apt-get update
  
ENV HOME=/home/app
ENV NODE_ENV=development
ENV PROCESS_TYPE=web
ENV PORT=3000

COPY ./  $HOME/code/

RUN chown -R app:app $HOME/*
USER app
WORKDIR $HOME/code

RUN npm install dotenv joi koa koa-bodyparser koa-request-validation \ 
  koa-router koa2-cors semver winston mongoose --save
Run npm install standard --save-dev

ENTRYPOINT ["npm", "run", "dev"]