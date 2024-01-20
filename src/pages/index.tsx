import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../layouts/Navbar"
import Text from "@/components/Text"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <section className="max-w-screen-desktop bg-slate-900">
        <div>
          <Text></Text>
        </div>
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
