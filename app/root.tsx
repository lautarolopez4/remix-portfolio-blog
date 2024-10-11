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
              <div className="p-2 relative">
                <a href="https://www.youtube.com/watch?v=elVF7oG0pQs">
                  <img className="border border-black" src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/00/68/13/006813b3-9ca1-2e6f-98df-4ef78cd6cb49/06UMGIM20452.rgb.jpg/600x600bf-60.jpg" alt="Image"/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-2.5 right-2.5 bg-zinc-600/50 bg-clip-border rounded p-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
              </div>
            </Window>
            <Window title="links" content={null} >
              <ul className="p-2 text-xs">
                <li>github.com/<a href="https://github.com/lautarolopez4" target="_blank" className="hover:text-green-400 break-all">lautarolopez4</a></li>
                <li><a href="mailto:lautarolopm@protonmail.com" target="_blank" className="hover:text-green-400">e-mail me</a></li>
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
