import { Page } from "gatsby-node"
import React from "react"
import Text from "@components/Text"
import CodeBlock from "@components/CodeBlock";
import PageLayout from "@app/layouts/PageLayout";
import { postCreateDate } from "@app/utils/date";
import Markdown, { Options } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Options['components'] = {
  h1: (props: any) => <Text as="h2" className="text-2xl mt-6 mb-4 font-semibold" {...props} />,
  h2: (props: any) => <Text as="h2" className="text-xl mt-2 mb-3 font-bold" {...props} />,
  h3: (props: any) => <Text as="h3" className="text-lg mb-3" {...props} />,
  h4: (props: any) => <Text as="h4" className="text-md mb-3" {...props} />,
  h5: (props: any) => <Text as="h5" className="text-md mb-3" {...props} />,
  h6: (props: any) => <Text as="h6" className="mb-3" {...props} />,
  p: (props: any) => <Text as="p" className="mb-1" {...props} />,
  a: (props: any) => <Text as="a" className="mb-1" {...props} />,
  pre: (props: any) => <CodeBlock as="pre" className="" {...props} />,
  table: (props: any) => <table className="table-auto dark:text-white dark:border-white" {...props} />,
}

export const Head = ({ pageContext }: { pageContext: { page: Page } }) => {
  return (
    <>
      <title>{pageContext.page.title} | vidilog</title>
    </>
  )

}

const BlogPost = ({ pageContext }: { pageContext: { page: Page } }) => {
  return (
    <PageLayout>
      <div className="p-4 outline outline-white rounded-lg box-border">
        <div className="border-b-2 dark:border-white pb-2 mb-6 flex flex-col gap-2">
          <Text as="h1" className="text-2xl font-bold">{pageContext.page.title}</Text>
          <Text as="p" className="border-b-2dark:border-white border-l-4 border-white rounded-sm pl-1.5 ml-1 font-medium">
            {/* {postCreateDate(pageContext.page.frontmatter.date)} */}2024-03-01
          </Text>
        </div>
        <Markdown remarkPlugins={[remarkGfm]} components={components}>{pageContext.page.body}</Markdown>
      </div>
    </PageLayout>
  )
}

export default BlogPost