import { serve } from "bun";
import frontend from "./frontend/public/index.html";
import expressServer from "./backend/src/app.ts";

const server = serve({
    routes: {
        "/": frontend,
    },
  development: true,
});

expressServer.listen(54321);

console.log(`Listening on ${server.url}`);