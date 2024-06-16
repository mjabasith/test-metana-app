import React, { useState } from 'react';
import Home from './Home';
import Pages from './Pages';
import './Home.css';
import './global.css';
import './Pages.css';

const App = () => {
  const [page, setPage] = useState(0);

  const handleStartJourney = () => {
    setPage(1);
  };

  const handleNext = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevious = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const renderPageContent = (page) => {
    switch (page) {
      case 1:
        return (
          <>
            <h2>What is your name?</h2>
            <label htmlFor="field1">First Name</label>
            <input type="text" id="field1" />
            <label htmlFor="field2">Last Name</label>
            <input type="text" id="field2" />
            <button className="ok-button" onClick={handleNext}>OK</button>
          </>
        );
      case 2:
        return <div>Content for Page 2</div>;
      case 3:
        return <div>Content for Page 3</div>;
      // Add more cases for additional pages as needed
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {page === 0 ? (
        <Home onStartJourney={handleStartJourney} />
      ) : (
        <Pages
          onNext={handleNext}
          onPrevious={handlePrevious}
          pageContent={renderPageContent(page)}
        />
      )}
    </div>
  );
};

export default App;
