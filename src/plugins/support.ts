import fp from 'fastify-plugin'

export default fp<any>(async (fastify, opts) => {
  fastify.decorate('authenticate', async function (req, reply) {
    try {
      await req.jwtVerify();
    } catch (error) {
      reply.send(error);
    }
  });
})
