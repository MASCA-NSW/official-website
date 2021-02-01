import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// data
import starterkit from '../data/MASCAStarterKit.pdf';

// stylesheets
import './StarterKit.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function StarterKit() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
    textLayers.forEach(layer => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div>
      <Navbar parentClassName="starter-kit-header" />
      <div className="starter-kit-body">
        <h1>New to NSW Student Guide</h1>
        <p>First time settling-in in New South Wales and not sure where to begin? Upon arrival we recommend registering at your university to obtain a Student ID, followed by setting up a bank account at a branch close to the university, then get yourself a mobile phone plan and start inspecting for houses and filling in rental application form.</p>
        {/* <p>Click down below to download the pdf version with clickable links!</p> */}
        {/* <button>Download PDF</button> */}
        <div className="pdf-viewer-container">
          <Document
            file={starterkit}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={pageNumber}
              width={window.innerWidth/2}
            />
          </Document>
          <div>
            <p>
              Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </p>
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}