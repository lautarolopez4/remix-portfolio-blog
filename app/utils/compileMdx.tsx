import { bundleMDX } from 'mdx-bundler';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkRewrite from 'rehype-rewrite';
import { Element } from 'hast';

export async function compileMdx<T>(
  slug: string,
  files: { content: string; path: string }[],
): Promise<{ code: string; frontmatter: T } | null> {
  try {
    const result = await bundleMDX({
      source: files[0].content,
      mdxOptions(options) {
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          [
            rehypePrettyCode,
            {
              theme: 'tokyo-night',
              keepBackground: true,
            },
          ],
          [
            remarkRewrite,
            {
              rewrite: (node: Element, index: number, parent: Element) => {

                if (node.type === 'element' && node.tagName === 'p') {
                  const prevIndex = index ? index - 2 : -1;
                  const prevNode = parent?.children[prevIndex] as Element;

                  if (prevNode && prevNode.tagName === 'p') {
                    parent.children.splice(index, 0, { type: 'element', tagName: 'br', properties: {}, children: [] });
                  }
                }
              }
            }
          ]
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
