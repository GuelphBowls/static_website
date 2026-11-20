// src/root.tsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/index.scss'

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">                                      {/* <html lang="en"> */}
            <head>
                <meta charSet="UTF-8" />                      {/* <meta charset> */}
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>bowling_static</title>
                <Meta />
                <Links />
            </head>
            <body>
                {children}                                    {/* replaces <div id="root"> */}
                <ScrollRestoration />
                <Scripts />                                   {/* replaces <script src="/src/main.tsx"> */}
            </body>
        </html>
    )
}

export default function Root() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}