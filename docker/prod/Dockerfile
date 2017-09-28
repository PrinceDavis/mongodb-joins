FROM node:8.5.0
MAINTAINER Ossaija Thankgod<codebugsolved@gmail.com>
RUN useradd --user-group --create-home --shell /bin/false app && \
  npm install nodemon --global \
  apt-get update
  
ENV HOME=/home/app

COPY ./  $HOME/web/

RUN chown -R app:app $HOME/*
USER app
WORKDIR $HOME/web
RUN npm install --production
ENTRYPOINT ["npm", "start"]