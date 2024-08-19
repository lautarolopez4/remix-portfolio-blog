import { compileMdx } from './compileMdx'
import fs from 'fs/promises'
import path from 'path'
import { type MdxPage } from './types'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function getMdxPage(slug: string): Promise<MdxPage | undefined> {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = await fs.readFile(filePath, 'utf-8')

    const compiledPage = await compileMdx<MdxPage['frontmatter']>(slug, [{ content: fileContents, path: filePath }])
    return compiledPage ? { ...compiledPage, slug } : undefined
  } catch (error) {
    console.error(`Error loading MDX file for slug: ${slug}`, error)
    return undefined
  }
}

export async function getMdxListItems(): Promise<Array<{ slug: string; frontmatter: MdxPage['frontmatter'] }>> {
  const fileNames = await fs.readdir(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = await fs.readFile(fullPath, 'utf-8')

      const compiledPage = await compileMdx<MdxPage['frontmatter']>(slug, [{ content: fileContents, path: fullPath }])

      // Si compiledPage es null, retornamos null; de lo contrario, retornamos el resultado con un frontmatter vacío si es necesario
      return compiledPage
        ? { ...compiledPage, slug }
        : { code: '', frontmatter: {} as MdxPage['frontmatter'], slug }
    })
  )
  return allPostsData.filter(Boolean)
}

