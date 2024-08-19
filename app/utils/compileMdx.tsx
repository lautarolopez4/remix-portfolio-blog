import { bundleMDX } from 'mdx-bundler'
import rehypePrettyCode from 'rehype-pretty-code';

export async function compileMdx<T>(
  slug: string,
  files: { content: string; path: string }[],
): Promise<{ code: string; frontmatter: T } | null> {
  try {
    const result = await bundleMDX({
      source: files[0].content,
      mdxOptions(options, frontmatter) {
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          [
            rehypePrettyCode,
            {
              theme: 'tokyo-night',
              keepBackground: true,
            },
          ],
        ];
        return options;
      },
    });

    return {
      code: result.code,
      frontmatter: result.frontmatter as T,
    };
  } catch (error) {
    console.error(`Error compiling MDX for slug ${slug}`);
    return null;
  }
}
