// Vercel Node.js Function entry point — reuses the already-built SSR handler
// from `bun run build` (dist/server/server.js) unmodified.
//
// That handler is written for Cloudflare Workers (`fetch(request, env, ctx)`),
// but its shape is a strict superset of Vercel's Node.js "Web Standard fetch
// export" function format (`fetch(request: Request)`): env/ctx are simply
// unused here since app.manifest.json has no D1/R2/KV bindings.
//
// `runtime` is pinned to "nodejs" explicitly (rather than relying on it being
// the default) because the bundled server imports node:async_hooks and
// node:stream — APIs the Edge runtime does not support.
export const config = { runtime: "nodejs" };

export { default } from "../dist/server/server.js";
