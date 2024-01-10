FROM node:20-alpine
WORKDIR /work
RUN mkdir team-c
COPY ./team-c/ /work/team-c
RUN  cd team-c && npm install
