
import React from 'react'

interface ISectionTitle {
    title: string
}

const SectionContent:React.FC = ({children}) => (
    <div className="flex flex-col pl-10 pr-10 pt-5 pb-5 ">
        {children}
    </div>
)

const SectionTitle:React.FC<ISectionTitle> = ({title}) => (
    <div className="p-10">
        <h1 className="text-3xl">{title}</h1>
        <div className="bg-violet-300 w-16 h-1 mt-1" />
    </div>
)

const SectionWrapper: React.FC = ({children}) => (
    <section className="flex flex-col pt-20 pb-20">
        {children}
    </section>
)

export {
    SectionWrapper,
    SectionContent,
    SectionTitle
}