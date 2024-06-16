import PropTypes from 'prop-types';
import './Home.css';

const FigmaDesign1png = ({ className = '', onStartJourney }) => {
  return (
    <div className={`figma-design-1png ${className}`}>
      <section className="root">
        <img className="image-icon" alt="" src="/img5@2x.png" />
        <div className="content">
          <img
            className="image-icon1"
            loading="lazy"
            alt=""
            src="/img2@2x.png"
          />
          <div className="buildform-wrapper">
            <a className="buildform">Buildform</a>
          </div>
        </div>
        <div className="benefits-wrapper">
          <div className="benefits">
            <div className="benefit-list-parent">
              <div className="benefit-list">
                <div className="benefit-item">
                  <h2 className="launch-your-data-container">
                    <p className="launch-your-data">
                      Launch your Data Career in
                    </p>
                    <p className="weeks-not-years"> Weeks, not Years</p>
                  </h2>
                  <div className="expect">
                    <p className="what-to-expect-container">
                      <span className="what-to-expect">What to expect:</span>
                      <span className="short-answer-questions">{` - Short-answer questions & No cover letter`}</span>
                      <span className="takes-4-mins">
                        {" "}
                        - Takes 4 mins on average
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="report">
                <img className="image-icon2" alt="" src="/img5@2x.png" />
                <div className="rated">
                  <h1 className="rated-on">Rated on</h1>
                </div>
                <h1 className="course-report">Course Report</h1>
              </div>
            </div>
            <div className="testimonial">
              <div className="student-quote">
                <div className="quote-content">
                  <div className="quote-wrapper">
                    <div className="journey-parent">
                      <div className="journey">
                        <div className="background-parent">
                          <div className="background" />
                          <button className="start-your-journ" onClick={onStartJourney}>
                            Start Your Journey
                          </button>
                        </div>
                        <div className="button">
                          <div className="background1" />
                        </div>
                        <div className="input">
                          <div className="press-enter-parent">
                            <div className="press-enter">press Enter</div>
                            <div className="input-icon">
                              <img
                                className="image-icon3"
                                loading="lazy"
                                alt=""
                                src="/img1@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="people-have">
                        101 people have filled this out
                      </div>
                    </div>
                    <div className="companies">
                      <div className="our-students-use">
                        Our students usedto work at
                      </div>
                    </div>
                  </div>
                </div>
                <div className="company-names">
                  <div className="google">Google</div>
                  <h3 className="tbm">TBM</h3>
                  <div className="company-logo">
                    <img
                      className="image-icon4"
                      loading="lazy"
                      alt=""
                      src="/img5@2x.png"
                    />
                  </div>
                  <h3 className="ebay">ebay</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

FigmaDesign1png.propTypes = {
  className: PropTypes.string,
  onStartJourney: PropTypes.func.isRequired,
};

export default FigmaDesign1png;
