# Issue Explorer (Server)
Server for GitHub Issue Explorer App

## Endpoints
### Issues
- GET /issues/:user/:repo
- GET /issues/:user/:repo/count
- GET /issues/:user/:repo/:number

### Logs
- GET /logs

## Stack
- TypeScript
- NodeJS
- Express
- Mongoose
- MongoDB

## How to run
- Clone this repository
- Run `docker-compose up`
- Create a `.env` file and fill it according to `.env.example`
- Run `npm install`
- Run `npm start`