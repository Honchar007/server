import fp from 'fastify-plugin'
import { FastifyRequest, FastifyReply } from 'fastify';

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<any>(async (fastify, opts) => {
  fastify.decorate('authenticate', async function (req: FastifyRequest, reply: FastifyReply) {
    try {
      await req.jwtVerify();
    } catch (error) {
      reply.send(error);
    }
  });
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    authenticate(req: FastifyRequest, reply: FastifyReply): Promise<void>;
  }
}
