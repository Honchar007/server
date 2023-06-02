import fp from 'fastify-plugin'

export default fp<any>(async (fastify) => {
  fastify.register(require('@fastify/swagger-ui'), {});
})
