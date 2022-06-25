import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "~/components/header";
import { EthersAppContext } from "eth-hooks/context";
import { DappContext } from "./contexts/dapp-context";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New ScaffodlEth<>Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <Header />

        <EthersAppContext>
          <DappContext.Provider value={{}}>
            <Outlet />
          </DappContext.Provider>
        </EthersAppContext>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
