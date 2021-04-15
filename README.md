# seed

Seed is a serverless API built with Netlify CI/CD as POC.

## Stack

- [node](https://nodejs.org/en/about/)
- [expressJS](https://expressjs.com/fr/)
- [faunaDB](https://fauna.com/)
- [netlify](https://www.netlify.com/)

## ENV

To be able to run the DB locally you will need the env file with secrets.

- Netlify: [account](https://app.netlify.com/teams/fuentesloic)
- Github: [account](https://github.com/fuentesloic/seed)

## CLI

### NPM

- Install dependencies: `npm install`
- Build the api with db: `npm run build`
- serve the server with api: `npm run serve`
- Start DB interface: `netlify addons:auth fauna`

### Netlify

- Install: `npm install netlify-cli -g`
- Start: `netlify dev`
