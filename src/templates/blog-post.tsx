import { Page } from "gatsby-node"
import React from "react"
import Text from "@components/Text"
import { MDXProvider } from "@mdx-js/react";
import { Props as MDXComponents } from "@mdx-js//react/lib";
import CodeBlock from "@components/CodeBlock";
import PageLayout from "src/layouts/PageLayout";
import { postCreateDate } from "src/utils/date";

const components: MDXComponents['components'] = {
  h1: (props: any) => <Text as="h2" className="text-2xl mt-6 mb-4 font-semibold" {...props} />,
  h2: (props: any) => <Text as="h2" className="text-xl mt-2 mb-3 font-bold" {...props} />,
  h3: (props: any) => <Text as="h3" className="text-lg mb-3" {...props} />,
  h4: (props: any) => <Text as="h4" className="text-md mb-3" {...props} />,
  h5: (props: any) => <Text as="h5" className="text-md mb-3" {...props} />,
  h6: (props: any) => <Text as="h6" className="mb-3" {...props} />,
  p: (props: any) => <Text as="p" className="mb-1" {...props} />,
  a: (props: any) => <Text as="a" className="mb-1" {...props} />,
  pre: (props: any) => <CodeBlock as="pre" className="" {...props} />,
}

export const Head = ({ pageContext }: { pageContext: { page: Page } }) => {
  return (
    <>
      <title>{pageContext.page.frontmatter.title} | vidilog</title>
    </>
  )

}

const BlogPost = ({ pageContext, children }: { pageContext: { page: Page }, children: any }) => {
  return (
    <PageLayout>
      <div className="pt-4 px-2 max-w-screen-laptop">
        <div className="p-4 outline outline-white rounded-lg box-border">
          <div className="border-b-2 dark:border-white pb-2 mb-6 flex flex-col gap-2">
            <Text as="h1" className="text-2xl font-bold">{pageContext.page.frontmatter.title}</Text>
            <Text as="p" className="border-b-2dark:border-white border-l-4 border-white rounded-sm pl-1.5 ml-1 font-medium">
              {postCreateDate(pageContext.page.frontmatter.date)}
            </Text>
          </div>
          <MDXProvider components={components}>{children}</MDXProvider>
        </div>
      </div>
    </PageLayout>
  )
}

export default BlogPost