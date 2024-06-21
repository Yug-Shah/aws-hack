import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './group2.css';

const Group2 = (props) => {
  const canvasRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  const [floorNumbers, setFloorNumbers] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const dataSets = [
      [20, 38, 57, 18, 22, 10, 10],
      [30, 35, 45, 50, 55, 60, 50],
      [23, 52, 35, 39, 23, 21, 2],
      [38, 51, 28, 14, 42, 27, 35],
      [59, 20, 32, 11, 57, 21, 60],
    ];

    const padding = 30;

    canvasRefs.current.forEach((ref, index) => {
      if (ref.current) {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const data = dataSets[index];
        const maxData = 60;
        const scaledData = data.map(d => (d / maxData) * height * 0.8);

        ctx.clearRect(0, 0, width, height); 
        
        ctx.beginPath();
        ctx.moveTo(padding, 0);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width, height - padding);
        ctx.strokeStyle = 'white'; 
        ctx.lineWidth = 2; 
        ctx.stroke();

        ctx.fillStyle = 'white';
        ctx.font = '15px Arial';

        const yTicks = 6;
        for (let i = 0; i <= yTicks; i++) {
          const y = (height - padding) - (i * (height - padding) / yTicks);
          ctx.moveTo(padding - 5, y);
          ctx.lineTo(padding + 5, y);
          ctx.stroke();
          ctx.fillText((maxData / yTicks * i).toFixed(0), padding - 18, y + 3);
        }
        const xLabels = ['6am', '9am', '12pm', '3pm', '6pm', '9pm', '12am'];
        const xTicks = xLabels.length - 1;
        for (let i = 0; i <= xTicks; i++) {
          const x = padding + (i * (width - padding) / xTicks);
          ctx.moveTo(x, height - padding + 5);
          ctx.lineTo(x, height - padding - 5);
          ctx.stroke();
          ctx.fillText(xLabels[i], x, height - padding + 20);
        }

        ctx.beginPath();
        ctx.moveTo(padding, height - padding - scaledData[0]);
        scaledData.forEach((d, idx) => {
          ctx.lineTo(padding + (width - padding) / (scaledData.length - 1) * idx, height - padding - d);
        });
        ctx.strokeStyle = 'green'; 
        ctx.lineWidth = 4; 
        ctx.stroke();

        ctx.save();
        // ctx.translate(padding/5, height / 2);
        // ctx.rotate(-Math.PI / 2);
        // ctx.textAlign = 'center';
        // ctx.fillText('No. of Students', 0, 0);
        // ctx.restore();

        // ctx.textAlign = 'center';
        // ctx.fillText('Time', width / 2, height);
      }
    });

    const interval = setInterval(() => {
      setFloorNumbers(floorNumbers => floorNumbers.map(number => {
        let change = Math.random() > 0.5 ? 1 : -1;
        let newNumber = number + change;
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
            <div className='group2-ad'>
              <span>More UofT Libraries coming soon!</span>
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

function getOrdinal(n) {
  const s=["th","st","nd","rd"],
        v=n%100;
  return s[(v-20)%10]||s[v]||s[0];
}

export default Group2;
