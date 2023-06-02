import fp from 'fastify-plugin'
import fastifystatic, { FastifyStaticOptions } from '@fastify/static'
const path = require('path')

export default fp<FastifyStaticOptions>(async (fastify) => {
  fastify.register(fastifystatic, {
    root: path.join(__dirname, './uploads'),
  })
})
