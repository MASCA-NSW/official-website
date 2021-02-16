import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faAngleLeft,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import {
  faEye,
  faEyeSlash
} from '@fortawesome/free-regular-svg-icons'

// data
import { jalanjalanslides } from '../data/JalanJalanSlides';

// stylesheets
import './JalanJalan.css';
import { Link } from 'react-router-dom';

function JalanJalanSlide({ id, title, description, moreDescription, learnMore, photoCredit, photographer, source, poiHeaderRef, showOrHide, incrementSlideIndex, hideGuide }) {
  return (
    <div className="poi" id={id}>
      <div className="poi-header" ref={poiHeaderRef}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{moreDescription}</p>
        <a href={learnMore} className="learn-more-links">Learn more</a>
        <p className="photo-credits">Photo by <a href={photoCredit}>{photographer}</a> @ <a href={source}>here</a></p>
      </div>
      <div className="poi-actions">
        <button id="prev" onClick={() => incrementSlideIndex(0)}><FontAwesomeIcon icon={faAngleLeft} /></button>
        <button><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></button>
        <button onClick={() => hideGuide()}><FontAwesomeIcon icon={showOrHide} /></button>
        <button id="next" onClick={() => incrementSlideIndex(1)}><FontAwesomeIcon icon={faAngleRight} /></button>
      </div>
    </div>
  )
}

export default function JalanJalan() {
  const [slideIndex, setSlideIndex] = useState(0);
  const currentSlide = jalanjalanslides.filter(slide => slide.key == slideIndex);
  const poiHeaderRef = useRef();
  const [showOrHide, setShowOrHide] = useState(faEyeSlash);

  function incrementSlideIndex(indicator) {
    if (indicator === 0) {
      if (slideIndex - 1 < 0) {
        setSlideIndex(9);
      } else {
        setSlideIndex(slideIndex - 1);
      }
    } else if (indicator === 1) {
      if (slideIndex + 1 > 9) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }
  }

  function hideGuide() {
    if (!poiHeaderRef.current.hidden) {
      poiHeaderRef.current.hidden = true;
      setShowOrHide(faEye)
    } else {
      poiHeaderRef.current.hidden = false;
      setShowOrHide(faEyeSlash)
    }
  }

  return (
    <div id="jalan-jalan-container">
      {
        currentSlide.map(cs => {
          return (
            <JalanJalanSlide
              id={cs.id}
              title={cs.title}
              description={cs.description}
              moreDescription={cs.moreDescription}
              learnMore={cs.learnMore}
              photoCredit={cs.photoCredit}
              photographer={cs.photographer}
              source={cs.source}
              poiHeaderRef={poiHeaderRef}
              showOrHide={showOrHide}
              incrementSlideIndex={incrementSlideIndex}
              hideGuide={hideGuide}
            />
          )
        })
      }
    </div>
  )
}