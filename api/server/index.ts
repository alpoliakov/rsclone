import './env';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';

import nextApp from "@stream-app/app";
import createSchema from '../schema';
import createSession from '../session';
import { IncomingMessage, ServerResponse } from 'http';

const port = process.env.PORT || 8000;
const handle = nextApp.getRequestHandler();

// @ts-ignore
async function createServer() {
  try {
    await createSession();
    const app = express();

    const corsOptions = {
      credentials: true,
    };
    app.use(cors(corsOptions));

    app.use(express.json());

    const schema = await createSchema();

    const apolloServer = new ApolloServer({
      schema,
      context: ({req, res}) => ({req, res}),
      introspection: true,
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
    });

    apolloServer.applyMiddleware({app, cors: corsOptions});

    await nextApp.prepare();
    app.get('*', (req: IncomingMessage, res: ServerResponse) => handle(req, res));

    app.listen({ port }, () => {
      console.log(
        `🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
      );
    });
  } catch (err) {
    console.log(err);
  }
}

createServer();
