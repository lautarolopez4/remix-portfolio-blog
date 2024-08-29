import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { Header } from "./components/Header";
import { Window } from "./components/Window";

export function Layout({ children }: { children: React.ReactNode }) {
  const background = "https://i.pinimg.com/736x/fe/f7/5a/fef75a097b1de810d380344ac67f8cdf.jpg"

  return (
    <html lang="es" style={{ background: `url(${background})` }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="select-none h-full bg-black text-white p-4 divide-y divide-white">
        <Header />
        <div className="bg-black grid grid-cols-[5fr_13fr] pt-2">
          <aside className="block isolate min-w-0">
            <Window title="current status" content="evolving" />
            <Window title="recently played" content={null}>
              <div className="p-2">
                <img className="border border-black" src={'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/ASAP_Rocky_Testing.jpg/220px-ASAP_Rocky_Testing.jpg'} />
              </div>
            </Window>
            <Window title="links" content={null} >
              <ul className="p-2 text-xs">
                <li>github.com/<a href="https://github.com/lautarolopez4" target="_blank" className="hover:text-green-400">lautarolopez4</a></li>
                <li><a href="mailto:lautarolopez4@protonmail.com" target="_blank" className="hover:text-green-400">e-mail me</a></li>
              </ul>
            </Window>
          </aside>
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
