import React from 'react';
import PropTypes from 'prop-types';
import './Pages.css';


const NewPage = ({ onNext, onPrevious, pageContent }) => {
  return (
    <div className="new-page">
      <img className="image-icon" alt="" src="/image@2x.png" /> {/* Add the logo */}
      <div className="form">
        {pageContent}
      </div>
      <div className="navigation">
        <button className="arrow" onClick={onPrevious}>&uarr;</button>
        <button className="arrow" onClick={onNext}>&darr;</button>
      </div>
    </div>
  );
};

NewPage.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  pageContent: PropTypes.node.isRequired,
};

export default NewPage;
