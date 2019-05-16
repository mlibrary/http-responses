import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/tag'
import {
  GlobalStyleSheet,
  UniversalHeader,
} from '@umich-lib/core'
import components from './mdx-components'

const Layout = (props) => (
  <MDXProvider components={components}>
    <GlobalStyleSheet />
    <UniversalHeader />
    {props.children}
  </MDXProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
