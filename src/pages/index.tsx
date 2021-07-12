import * as React from "react"

import '@assets/styles/global.scss'
import MenuWrapper from "../containers/MenuWrapper"
import { SectionContent, SectionTitle, SectionWrapper } from "../components/HomeSection"
import Card from "../components/Card"

const IndexPage:React.FC = () => {
  return (
    <MenuWrapper>
      <div className="flex flex-col flex-1 items-center justify-center h-screen main-bg">
        <div className="w-2/3">
          <h3 className="text-2xl">Hello. I Am</h3>
          <h1 className="text-4xl">FRONTEND DEVELOPER</h1>
        </div>
      </div>
      <SectionWrapper>
        <SectionTitle title="ABOUT ME"/>
        <SectionContent>
          <div className="flex-col md:flex-row flex">
            <div className="md:w-1/3 h-60 sm:h-96 border-violet-600 border-2 rounded-md shadow-sm">
              ImageCard
            </div>
            <div className="md:w-2/3 border-violet-400 border-2 ml-0 md:ml-10 mt-5 md:mt-0">
              로렘이프섬 내용 뭐쓰징
            </div>
          </div>
        </SectionContent>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle title="BLOG"/>
        <SectionContent>
          <div className="flex justify-between">
            <h3 className="text-lg mb-4">Recently Post</h3>
            <div>더보기 &gt;&gt;</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
          </div>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle title="CONTACT"/>
        <SectionContent>
          <div className="flex-row">
            <div className=""></div>
          </div>
          <div>
            <p>아 여기 어캐하지..?</p>
          </div>
        </SectionContent>
      </SectionWrapper>
    </MenuWrapper>
  )
}

export default IndexPage
