<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
<hr/>


# ECHO Backend - NestJS 🎙️

ECHO is a **NestJS**-powered backend for a real-time discussion platform, allowing users to share thoughts, post comments, and interact seamlessly.

## 🚀 Features
- 🛠 **Modular architecture** - Organized and scalable
- 🔐 **JWT Authentication** - Secure login and session handling
- 💾 **MongoDB with Mongoose** - Flexible NoSQL database
- 📡 **WebSockets** - Real-time messaging
- 🌍 **CORS Enabled** - Secure cross-origin communication
- 📜 **Swagger API Documentation** - Easily test and explore endpoints

## 🏗️ Installation

### Prerequisites
- **Node.js** (>= 18.x)
- **MongoDB Atlas** (or local MongoDB instance)
- **NestJS CLI** (`npm i -g @nestjs/cli`)

### Clone Repository
```sh
git clone https://github.com/Talha-Tahir2001/echo-backend.git
cd echo-backend
```

### Install Dependencies
```sh
npm install
```

### Configure Environment Variables
Create a `.env` file in the root directory:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```
## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 🔥 API Endpoints

### 🛠 Authentication
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/users` | Register a new user |
| `GET` | `/users` | Get a user|

### 💬 Comments
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/comments` | Fetch all comments |
| `POST` | `/comments` | Create a new comment |
| `GET` | `/comments/:id` | Get a comment by ID|

📖 Full API documentation available at `/api/docs` (Swagger UI).

## 🛠️ Deployment
ECHO can be deployed to **Render, Railway, Vercel (API mode), or Fly.io**.

```sh
# Example: Deploying on Railway
railway init
railway up
```

## 📜 License
This project is [MIT Licensed](https://github.com/Talha-Tahir2001/echo-backend/tree/main?tab=MIT-1-ov-file). Feel free to use and modify! ❤️

---
💡 **Contributions & Suggestions Welcome!** PRs are encouraged to improve the project. 🚀

##  📑Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).
