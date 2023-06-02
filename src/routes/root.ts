import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/asd', async function (request, reply) {
    return { root: "hello my friend" }
  })
}

export default root;
