import React from 'react'

import { Helmet } from 'react-helmet'

import './group2.css'

const Group2 = (props) => {
  return (
    <div className="group2-container">
      <Helmet>
        <title>Robarts Library Heat Map</title>
      </Helmet>
      <div className="group2-frame31">
        <div className="group2-text30">Robarts Library Heat Map</div>
        <div className="images-row">
          <img alt="image14051" src="/external/image14051-2nai-300h.png" className="group2-image1"/>
          <img alt="image24051" src="/external/image24051-7on-300w.png" className="group2-image2"/>
          <img alt="image34051" src="/external/image34051-brnq-300w.png" className="group2-image3"/>
        </div>
      </div>
      <div className="group2-group2">
        <div className="subscribe-box">
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
        <div className='group2-frame32'>
          <div className="group2-text34">
            <div className='row'>
              <div class='column left'>1st Floor</div><div id="floor1" class='column middle'></div><div class='column right'></div>
            </div>
            <div className='row'>
              <div class='column left'>2nd Floor</div><div id="floor2" class='column middle'></div><div class='column right'></div>
            </div>
            <div className='row'>
              <div class='column left'>3rd Floor</div><div id="floor3" class='column middle'></div><div class='column right'></div>
            </div>
            <div className='row'>
              <div class='column left'>4th Floor</div><div id="floor4" class='column middle'></div><div class='column right'></div>
            </div>
            <div className='row'>
              <div class='column left'>5th Floor</div><div id="floor5" class='column middle'></div><div class='column right'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Group2
