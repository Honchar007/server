import fp from 'fastify-plugin'
import jwt, { FastifyJWTOptions } from '@fastify/jwt'

export default fp<FastifyJWTOptions>(async (fastify) => {
  fastify.register(jwt, {
    secret: 'mysecret',
  })
})
