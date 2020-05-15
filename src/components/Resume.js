import React from 'react'
import { Document,Page } from 'react-pdf/dist/entry.webpack'

const Resume = () => {
    return <div id="resumePDF">
        <Document file="../../public/assets/CarmenWen_Resume_(Official).pdf">
            <Page pageNumber={1}/>
        </Document>
    </div>
}

export default Resume;