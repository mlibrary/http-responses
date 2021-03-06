import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from '@emotion/styled'
import GithubSlugger from 'github-slugger'
import {
  Heading,
  Text,
  COLORS,
  SPACING,
  List,
  Link,
  LINK_STYLES
} from '@umich-lib/core'

/*
  Attempted to use MDX Component Autolink Header,
  but it threw and error and wasn't sure how to
  make it work with @umich-lib/core Heading.

  So, for now, just adding the slug with github-slugger.

  This can be problematic if a page shares the same
  heading as this creates a new slugger each time
  a slug is created.

  Also, this lacks the hover on a heading and click
  for a link feature.
*/
function slug(item) {
  let slugger = new GithubSlugger()
  return slugger.slug(item)
}

const Heading2 = ({ children, ...other }) => (
  <Heading
    level={2}
    size="XL"
    id={slug(children)}
    style={{ marginTop: SPACING['2XL'] }}
    {...other}
  >{children}</Heading>
)
const Heading3 = ({ children, ...other }) => (
  <Heading
    level={3}
    size="M"
    id={slug(children)}
    style={{ marginTop: SPACING['XL'] }}
    {...other}
  >{children}</Heading>
)
const Heading4 = ({ children, ...other }) => (
  <Heading level={4} size="S" id={slug(children)} {...other}>{children}</Heading>
)
const Heading5 = ({ children, ...other }) => (
  <Heading level={5} size="XS" id={slug(children)} {...other}>{children}</Heading>
)
const Heading6 = ({ children, ...other }) => (
  <Heading level={6} size="2XS" id={slug(children)} {...other}>{children}</Heading>
)
const P = ({ children, ...other }) => (
  <Text {...other}>{children}</Text>
)

const EM = styled('em')({
  fontStyle: 'italic'
})

const StyledGatsbyLink = styled(GatsbyLink)({
  ...LINK_STYLES['default']
})

const A = ({ children, href, ...other }) => {
  /*
    The check if the href is an internal link.
  */
  if (href.startsWith('/')) {
    return (
      <StyledGatsbyLink
        to={href}
        {...other}
      >{children}</StyledGatsbyLink>
    )
  }

  return (
    <Link href={href} {...other}>{children}</Link>
  )
}

export default {
  wrapper: ({ children }) => (
    <React.Fragment>{children}</React.Fragment>
  ),
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  a: A,
  p: P,
  ul: props => <List type="bulleted" {...props} />,
  ol: props => <List type="numbered" {...props} />,
  em: EM,
  strong: (props) => <strong style={{ fontWeight: '800' }} {...props} />,
  blockquote: (props) => (
    <blockquote style={{
      fontStyle: 'italic',
      borderLeft: `solid 4px ${COLORS.maize[300]}`,
      background: COLORS.maize[100],
      padding: SPACING['L']
    }} {...props} />
  )
}