import React from 'react'
import {
  Heading,
  SPACING,
  COLORS
} from '@umich-lib/core'
import styled from '@emotion/styled'

import Layout from './layout'
import SEO from './seo'

const Prose = styled('div')({
  'div > *:not(:last-child)': {
    marginBottom: SPACING['M']
  }
})

const Page = (props) => {
  const {
    title,
    code
  } = props.pageContext.frontmatter

  return (
    <Layout>
      <SEO title={code + ': ' + title} />
      <article css={{ maxWidth: '38rem' }}>
        <Heading
          level={1}
          size="3XL"
          css={{
            paddingBottom: SPACING['M'],
            marginTop: SPACING['2XL']
          }}
        >
          {code && (<span css={{
            fontSize: '66%',
            display: 'block',
            color: COLORS.neutral['300']
          }}>{code}</span>)}
          {title}
        </Heading>
        <Prose>
          {props.children}
        </Prose>
      </article>
    </Layout>
  )
}

export default Page