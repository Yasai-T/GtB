import React, { useState } from 'react'
import Layout from '../components/layout'
import { PDFViewer } from '@react-pdf/renderer'
import { MyDocument } from '../components/docoment'

const PdfPage = () => {
  const [val, setVal] = useState('')
  return (
    <Layout>
      <input type="text" value={val} onChange={e => setVal(e.target.value)} />
      <PDFViewer width="100%" height="900">
        <MyDocument text={val} />
      </PDFViewer>
    </Layout>
  )
}

export default PdfPage
