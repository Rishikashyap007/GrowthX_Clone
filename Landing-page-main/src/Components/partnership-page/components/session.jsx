import React from "react";
import './session.css'

function Session(){
    return(
        <div className="session-container">
        <h1 className="cont-title">Learning experience </h1>
        <div className="session">
          <h2 className="session-text">SESSION 1 | SEP 15TH</h2>
          <h2 className="session-title">Kick-off call</h2>
          <p className="session-desc">
            Meet the GrowthX community members you will be learning with. Get
            clarity on how you will learn the CRAFT of Partnership Led Growth.
            Talk about common problems you've faced while building partnerships
            and learn from your peers. Get access to a pre-read for the deep
            dive.
          </p>
        </div>
        <div className="session">
          <h2 className="session-text">SESSION 2 | SEP 16TH</h2>
          <h2 className="session-title">Partnerships Deep-Dive</h2>
          <p className="session-desc">
            <ul className="session-list">
              <li>Is your product ready for partnerships? Key litmus test.</li>
              <li>How does partnerships change by stage of the product?</li>

              <li>
                {" "}
                Core nuances of product integrations.
                <ul className="session-list1">
                  <li>How to define the right success metrics?</li>
                  <li>How to define the right success metrics?</li>
                  <li>
                    How to go from customer feedback insight to conviction
                    building?
                  </li>
                  <li>Mental models to choose your 'Ideal Partner Profile’</li>
                  <li>
                    Reach out plan for finding the right POC in a potential
                    partner company.
                  </li>
                  <li>
                    How to design first few calls, stakeholder alignment &
                    building trust with partners?
                  </li>
                  <li>
                    How to solve for early proof of concept & GTM limited
                    version?
                  </li>
                  <li>
                    How to build a cadence to drive integration adoption & track
                    success?
                  </li>
                </ul>
              </li>

              <li>
                Core nuances of channel partnerships.
                <ul className="session-list1">
                  <li> How to identify the right channel partners?</li>
                  <li>How to build an outreach strategy at Day 0?</li>
                  <li>
                    {" "}
                    How to create segmentation between self serve onboarding vs
                    white glove onboarding for channel partners?
                  </li>
                  <li>
                    {" "}
                    How to design for the marketing collaterals that helps
                    channel partners pitch effectively?{" "}
                  </li>
                  <li>
                    {" "}
                    How to create the right incentives for channel partners?
                  </li>
                  <li>
                    {" "}
                    How to track channel partner metric health & gamify for 1 to
                    100 scale?{" "}
                  </li>
                  <li>
                    {" "}
                    Key nuances of solving for churned channel partners. ‍{" "}
                  </li>
                </ul>
              </li>

              <li>
                {" "}
                Case Studies include:
                <div className="logos-cont">
                  <img
                    src=" https://assets-global.website-files.com/63a49822ee2304acc9455a42/6502bc565a2a96c905daf3c3_logos-plg.png"
                    alt=""
                  />
                </div>
              </li>
            </ul>
          </p>
        </div>
        <div className="session">
          <h2 className="session-text">SESSION 3 | SEP 18TH</h2>
          <h2 className="session-title">Project Briefing</h2>
          <p className="session-desc">
            Work with diverse set of peers - founders, strategy leaders, heads
            of partnerships, product, marketing, brand, & analytics to solve a
            partnership led problem statement in a live setting. This typically
            helps you solve cold-start problem while learning the CRAFT.
          </p>
        </div>
        <div className="session">
          <h2 className="session-text">SESSION 4 | SEP 23TH</h2>
          <h2 className="session-title">
            Program Director's Circle (Live setting)
          </h2>
          <p className="session-desc">
            Go multiple layers deeper with your program director into the CRAFT.
            Absorb feedback being discussed about some of the top proof of work
            built by members. Get access to intense Q&A with your program
            director and deepen your understanding of the nuances in partnership
            led growth.
          </p>
        </div>
      </div>
    )
}
export default Session;