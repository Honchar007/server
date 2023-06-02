import fp from 'fastify-plugin'

export default fp<any>(async (fastify) => {
  fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    exposeHeadRoute: false,
    swagger: {
      securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
    },
  })
})
