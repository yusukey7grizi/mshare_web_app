FROM node:16.13.0

WORKDIR /usr/src/app

COPY ./package.json package-lock.json ./
COPY ./tsconfig.json ./
COPY ./next.config.js ./
COPY ./next-env.d.ts ./
COPY ./src ./
COPY ./public ./
RUN npm install

CMD npm run build && npm start
