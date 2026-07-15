# Production publishing backend

The CACBLAZE publishing scheduler must run as an always-on process. Do not deploy it as a
request-scoped serverless function: scheduled jobs would stop when the function exits.

## Render deployment

The repository includes `render.yaml`, which creates:

- an always-on Docker web service for `server/`;
- a persistent managed PostgreSQL database;
- `/health` monitoring;
- automatic deployments from the production branch;
- autonomous article and tip generation.

In Render, create a **Blueprint**, connect `pipsengine/cacblaze`, and select `render.yaml`. Enter
`OPENAI_API_KEY` when prompted. Keep the paid `starter` web-service plan: free services sleep and
cannot guarantee the scheduler.

After the service is healthy:

1. Add `api.cacblaze.com` as its custom domain.
2. Replace the existing `api.cacblaze.com` DNS records with the exact record Render displays.
3. Set the Vercel production variable `SERVER_API_URL` to `https://api.cacblaze.com/api`.
4. Redeploy the Vercel client.
5. Verify `https://api.cacblaze.com/health` and the authenticated publishing dashboard.

The scheduler is fail-open with respect to the website: a generation failure is logged and retried
without taking the public site offline or disabling future publishing runs.
