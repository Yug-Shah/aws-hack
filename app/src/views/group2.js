import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './group2.css';

const Group2 = (props) => {
  // Creating a ref for each canvas
  const canvasRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  // States for floor numbers
  const [floorNumbers, setFloorNumbers] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const dataSets = [
      [65, 59, 80, 81, 56, 55, 40],
      [75, 88, 76, 44, 60, 58, 63],
      [25, 48, 90, 66, 85, 70, 90],
      [85, 75, 60, 44, 56, 55, 88],
      [45, 54, 65, 85, 76, 65, 55],
    ];

    canvasRefs.current.forEach((ref, index) => {
      if (ref.current) {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const data = dataSets[index];
        const maxData = Math.max(...data);
        const scaledData = data.map(d => (d / maxData) * height * 0.8);

        ctx.clearRect(0, 0, width, height); // Clear previous drawing
        ctx.beginPath();
        ctx.moveTo(0, height - scaledData[0]);
        scaledData.forEach((d, idx) => {
          ctx.lineTo((width / (scaledData.length - 1)) * idx, height - d);
        });
        ctx.strokeStyle = 'green'; // Change line color to green
        ctx.lineWidth = 4; // Increase line thickness
        ctx.stroke();
      }
    });

    // Update floor numbers every 2 seconds
    const interval = setInterval(() => {
        setFloorNumbers(floorNumbers => floorNumbers.map(number => {
          // Decide randomly whether to add or subtract 1
          let change = Math.random() > 0.5 ? 1 : -1;
          // Calculate new number with change
          let newNumber = number + change;
          // Ensure new number stays within 50-200 range
          if (newNumber < 50) return 50;
          if (newNumber > 200) return 200;
          return newNumber;
        }));
      }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group2-container">
      <Helmet>
        <title>Robarts Commons Library Heat Map</title>
      </Helmet>
      <div className="group2-frame31">
        <div className="group2-text30">Robarts Commons Library</div>
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
                  <span>Fill in your email to be notified of free study spots at Robarts!</span>
                </span>
              </div>
              <div className="group2-form">
                <div className="group2-text-field1">
                  <div className="group2-input-group2">
                    <input type="text" placeholder="Email address" className="group2-input2"/>
                  </div>
                </div>
                <div className="group2-text-field1">
                  <div className="group2-input-group2">
                    <input type="text" placeholder="Full Name" className="group2-input2"/>
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
            {floorNumbers.map((number, i) => (
              <div className='row' key={i}>
                <div className='column left'>{`${i+1}${getOrdinal(i+1)} Floor (${number})`}</div>
                <div className='column right'>
                  <canvas ref={canvasRefs.current[i]} width="792" height="200"></canvas>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get ordinal numbers (1st, 2nd, 3rd, etc.)
function getOrdinal(n) {
  const s=["th","st","nd","rd"],
        v=n%100;
  return s[(v-20)%10]||s[v]||s[0];
}

export default Group2;

