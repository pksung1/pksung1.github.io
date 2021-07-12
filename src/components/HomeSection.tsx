
import React from 'react'

interface ISectionTitle {
    title: string
}

const SectionContent:React.FC = ({children}) => (
    <div className="flex flex-col pl-4 pr-4 pt-5 pb-5 sm:pl-10 sm:pr-10">
        {children}
    </div>
)

const SectionTitle:React.FC<ISectionTitle> = ({title}) => (
    <div className="p-4 sm:p-10">
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