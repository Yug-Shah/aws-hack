import React from 'react'

import { Helmet } from 'react-helmet'

import './group2.css'

const Group2 = (props) => {
  return (
    <div className="group2-container">
      <Helmet>
        <title>Robarts Library Heat Map</title>
      </Helmet>
      <div className="group2-group2">
        <div className="group2-group1">
          <div className="group2-cta-section">
            <div className="group2-type-lock-up">
              <div className="group2-frame436">
                <span className="group2-text24">
                  <span>Start your journey to Dean's List</span>
                </span>
                <span className="group2-text26">
                  <span>Never Miss a Study Spot</span>
                </span>
                <span className="group2-text28">
                  <span>
                    Fill in your email to be notified of free study spots at
                    Robarts!
                  </span>
                </span>
              </div>
              <div className="group2-form">
                <div className="group2-text-field1">
                  <div className="group2-input-group2">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="group2-input2"
                    />
                  </div>
                </div>
                <div className="group2-text-field1">
                  <div className="group2-input-group2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="group2-input2"
                    />
                  </div>
                </div>
              </div>
              <div>
                  <input className="group2-text62 componentsbuttondefault" type="button" value="Sign me up!"/> 
              </div>

              
            </div>
          </div>
        </div>
        <div className="group2-login-page1">
          <div className="group2-frame31">
            <span className="group2-text30">
              <span>Robarts Library Heat Map</span>
            </span>
            <div className="row">
              <div className="column">
                <img alt="image24051" src="/external/image24051-7on-300w.png" className="group2-image2"/>
              </div>
              <div className="column">
                <img alt="image14051" src="/external/image14051-2nai-300h.png" className="group2-image1"/>
              </div>
              <div className="column">
                <img alt="image34051" src="/external/image34051-brnq-300w.png" className="group2-image3"/>
              </div>
            </div>

            <div className="group2-text34">
              <div>1st Floor</div>
              <br></br>
              <div>2nd Floor</div>
              <br></br>
              <div>3rd Floor</div>
              <br></br>
              <div>4th Floor</div>
              <br></br>
              <div>5th Floor</div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Group2
