import { Window } from '~/components/Window';
import { json, LoaderFunctionArgs, redirect } from '@remix-run/node'
import { getMdxPage } from '../utils/mdx.server'
import { useLoaderData } from '@remix-run/react';
import { useMdxComponent } from '~/utils/mdx';

export async function loader({ request, params }: LoaderFunctionArgs) {

  if (typeof params.slug !== 'string' || !params.slug) {
    throw redirect("/404");
  }
  const page = await getMdxPage(params.slug);

  if (page == undefined) {
    throw redirect("/404");
  }

  return json(
    {
      page,
    },
    { status: 200 }
  )
}

export default function MDXScreen() {
  const data = useLoaderData<typeof loader>()
  const Component = useMdxComponent(data.page.code)

  return (
    <main className='block isolate min-w-0 ml-2'>
      <Window title={`${data.page.frontmatter.title}`} content={null}>
        <div className='text-xs p-2'>
          <Component />
        </div>
      </Window >
    </main>)
}
