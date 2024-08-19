import { LoaderFunction, redirect } from "@remix-run/node";
import { Window } from "~/components/Window";

export default function CatchAllRoute() {
  return (

    <main className="block h-full isolate min-w-0 ml-2 ">
      <Window title="404 not found" content={null} classname="h-full">
        <div className="p-2 text-xs">
          <p>follow the white rabbit</p>
        </div>
      </Window>
    </main>
  )
}
