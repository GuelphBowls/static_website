// react-router.config.ts
import type { Config } from '@react-router/dev/config'

export default {
    appDirectory: 'src',
    ssr: false,
    prerender: true,
} satisfies Config


// appDirectory: 'src': the framework looks for root.tsx and routes.ts in app/ 
// by default. This points it at your existing src/ instead.
// ssr: false: no runtime server. Everything happens at build time, which matches 
// GitHub Pages.
// prerender: true: generate an HTML file for every route that has no dynamic 
// segments (/, /weekly, /groupEvents). These come from routes.ts, so there’s no 
// separate list to maintain.