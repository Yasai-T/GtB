import React from 'react'
import { Canvas } from 'react-three-fiber'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Box from '../components/organisms/box'

const ThreeJs = () => (
  <Layout>
    <SEO title="three js practice" />
    <h1>three js practice</h1>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThreeJs
