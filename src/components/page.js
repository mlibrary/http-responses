import React from 'react'
import {
  Heading,
  SPACING,
  COLORS,
  MEDIA_QUERIES
} from '@umich-lib/core'
import styled from '@emotion/styled'

import Layout from './layout'
import SEO from './seo'
import ImageError from './image-error'

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
      <article css={{
        [MEDIA_QUERIES.LARGESCREEN]: {
          display: 'flex',
          alignItems: 'center',
          '> *': {
            '&:nth-child(1)': {
              width: 'calc(100% / 3 * 2)'
            },
            '&:nth-child(2)': {
              width: 'calc(100% / 3 * 1)'
            }
          }
        }
      }}>
        <div>
          <div css={{ maxWidth: '38rem' }}>
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
          </div>
        </div>
        <div css={{
          maxWidth: '26rem',
          padding: SPACING['L'],
          marginTop: SPACING['XL'],
          paddingBottom: '0'
        }}>
          <ImageError />
        </div>
      </article>
    </Layout>
  )
}

export default Page