import React from 'react';
import './partnership.css';

function FirstPart() {
  return (
    <div className="firstpart-partnership">
      <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64f1ae65d0246590df6efe00_plg_hero_mobile.webp" className="partnership-image1" alt="image1" />
      <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64f5ccb07591e40f7e165482_PARTNERSHIP%20LED%20GROWTH.svg"className="partnership-img2" alt="image2" />
     <div className="firstpart-Partnership-text">
     <p>BUILT ON THE DAVID VS GOLIATH MYTH</p>
      <button>Watch Trailer</button>
     </div>
    </div>
  );
}

function SecondPart() {
  return (
    <div className="secondpart">
          <h1>Framework to build partnerships as a revenue growth channel</h1>
     <div className="secondpart-boxes">
     <div className="secondpart1">
        <h3>Product Integrations</h3>
        <p>Join together with a bigger business to increase income and product acceptance.</p>
      </div>
      <div className="secondpart1">
        <h3>Channel partnerships</h3>
        <p>To break into a new market and promote the growth of new users, collaborate with affiliates and agencies.</p>
      </div>
     </div>
    </div>
  );
}

function ThirdPart() {
  return (
    <div className="thirdpart-section">
         <div className="thirdpart">
      <div className="thirdpart1-partnership">
        <h2>Ashutosh Cheulkar</h2>
        <h3>PROGRAM DIRECTOR AT GROWTHX</h3>
        <p>formed alliances with major tech companies including Typeform, Slack, and Notion. With more than 100 channel and more than 50 tech relationships over the course of seven years, he has established himself as a revenue-led growth guru.</p>
      </div>
      <div className="thirdpart2">
        <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64f1c892c3cb6448c843903b_ashutosh-p-500.png" width="250px" height="250px" className='thirdpart-img' alt="image3" />
      </div>
    </div>
    </div>
  );
}

function FourthPart() {
  return (
    <div className="fourthpart">
      <div className="fourthpart1">
        <i className="fa-solid fa-handshake"></i>
        <h3>Partner with tech goliaths</h3>
        <p>Partner selection, cold outreach, first call, building trust, aligning stakeholders, GTM, driving adoption, and scaling revenue are all steps in the process. Prepare for unforeseen events like a partner POC quitting in the middle of the project, missing health indicators, or GTMs not arriving as planned to ensure the success of your collaboration.</p>
      </div>
      <div className="fourthpart1">
        <i className="fa-sharp fa-solid fa-bolt"></i>
        <h3>Onboard & activate channel partners</h3>
        <p>Select between Affiliates & Agencies → Determine rewards → Inform & Encourage → Make a Directory of Partners → Monitor the success indicators. Assure partner participation and reawaken dormant partners to make the collaboration a success.</p>
      </div>
      <div className="fourthpart1">
        <i className="fa-solid fa-signal"></i>
        <h3>Scale your partnership program</h3>
        <p>Create a playbook for channel relationships and B2B product integrations. Run it through several times to create a partner program that is impenetrable. Tailor the approach to various issues, such as entering a new market or co-building for product improvements.</p>
      </div>
    </div>
  );
}

function FifthPart() {
  return (
    <div className="thirdpart-section">
        <div className="thirdpart">
      <div className="thirdpart1-partnership">
        <h2>Yoheswaran Gnanavel</h2>
        <h3>“The David & Goliath analogy hits the spot”</h3>
        <p>Having led relationships at Canva, I thought I understood everything.  I was wrong; there is a methodical approach to each aspect of using partnerships as a channel with the CRAFT. It covers subtleties that are difficult to overlook. Very thoughtful, detailed, and practical for the following Monday morning. Almost any issue you are or will encounter can be resolved if you are forming partnerships.</p>
      </div>
      <div className="thirdpart1-partnership">
        <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64f1d43d08eeba2f7dfc477b_yoeshwaran-p-500.png" width="250px" height="250px" alt="image4" className='thirdpart-img'/>
      </div>
    </div>
    </div>
  );
}

function Partnership() {
  return (
    <>
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <FifthPart />
    </>
  );
}

export default Partnership;
