// UTILS
const { createAuthUser } = require('./utils/fauna')

// DB
const fauna = require('faunadb')
const { Create, Get, Index, Match, Collection } = fauna.query

const client = new fauna.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

// API
const express = require('express')
const serverless = require('serverless-http')

// SERVER
const app = express()
const router = express.Router()

// ROUTES
router.get('/check', (_, res) => {
  res
    .send({ message: 'Api is up and running' })
    .catch((error) => res.status(503).send(error))
})

router.get('/auth/register', async (req, res) => {
  const user = createAuthUser(req.body)

  const payload = await client
    .query(Create(Collection('users'), user))
    .catch((e) => res.status(404).send(e))

  res.status(201).send(payload)
})

router.get('/auth/login', async (req, res) => {
  const user = new User(req.body)

  const payload = await client
    .Login(Match(Index('users_by_email'), user.email), {
      password: user.password
    })
    .catch((e) => res.status(404).send(e))

  res.status(201).send(payload)
})

router.get('/auth/logout', async (req, res) => {})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
