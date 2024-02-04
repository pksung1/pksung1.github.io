import React from 'react'
import { Highlight, themes } from "prism-react-renderer"

export default (props: any) => {
    const className = props.children.props.className || ''
    const matches = className.match(/language-(?<lang>.*)/)

  return (
    <Highlight code={props.children.props.children} language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
      theme={themes.github}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}