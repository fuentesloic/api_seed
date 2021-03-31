// DB
const fauna = require('faunadb')
const { Create, Get, Index, Match, Collection } = fauna.query

const client = new fauna.Client({
  secret: 'fnAEFpDBLpACAH8jW_6oeelnm2t37sYHkH6r0W0R'
})

// API
const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()

// POC: GET user from db
router.get('/get/user/:name', async (req, res) => {
  const doc = await client
    .query(
      Get(
        Match(
          Index('users_by_name'),
          req.params.name
        )
      )
    ).catch((e) => res.send(e))

  res.send(doc)
})

// POC: POST user to db
router.get('/post/user/:name', async (req, res) => {
  const { name } = req.params
  const email = `${name}@seed.ca`

  const data = { email, name }

  const doc = await client
    .query(
      Create(
        Collection('users'),
        { data }
      )
    ).catch((e) => res.send(e))

  res.send(doc)
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
