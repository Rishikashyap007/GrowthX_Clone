import React from 'react';
import './style.css'; 

const App = () => {
  return (
    <div className="body_in_person_lunches">
      <section className="image-desktop">
        <div className="image-content-section">
          <div className="heading_in_person_lunches">In-person lunches</div>
          <div className="subheading_in_person_lunches">
            Monthly lunches hosted across <span className="is--white_in_person_lunches">top metro cities.</span> <br />
            The conversations are curated to flow with structure and <span className="is--white_in_person_lunches">outcomes for members.</span>
          </div>
          <img
            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/656ee7cf24f756d10f8afc2d_Group%205681.svg"
            loading="lazy" alt="growthx-membership-growth-x-cities" className="dinner-images" />
        </div>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6576d2944fcb0664c2d19e39_lunch-2.webp"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 92vw, (max-width: 1279px) 93vw, (max-width: 1439px) 1000px, 1160px"
            srcSet="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6576d2944fcb0664c2d19e39_lunch-2-p-500.webp 500w, https://assets-global.website-files.com/63a49822ee2304acc9455a42/6576d2944fcb0664c2d19e39_lunch-2-p-800.webp 800w, https://assets-global.website-files.com/63a49822ee2304acc9455a42/6576d2944fcb0664c2d19e39_lunch-2-p-1080.webp 1080w, https://assets-global.website-files.com/63a49822ee2304acc9455a42/6576d2944fcb0664c2d19e39_lunch-2-p-1600.webp 1600w, https://assets-global.website-files.com/63a49822ee2304acc9455a42/6576d2944fcb0664c2d19e39_lunch-2.webp 1680w"
            alt="" className="image-section-img" />
        </div>
      </section>
      
      <div className="heading_in_person_lunches">Invite-only experiences</div>
      <div className="subheading_in_person_lunches">
        Access online &amp; in-person experiences with <span className="is--white_in_person_lunches">top leaders in the ecosystem. </span><br />
        A facilitator leads the discussion where advice &amp; feedback is shared to help you compound as a leader.
      </div>
      
      <div className="slider_in_person_lunches">
        <div className="slide-track_in_person_lunches">
          <div className="slide_in_person_lunches">
            <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6576d4ea9db93a0b550fcd44_invite-2-p-1600.webp" />
          </div>
          <div className="slide_in_person_lunches">
            <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6576d4e69200194a88f9c292_invite-3-p-1600.webp" />
          </div>
          <div className="slide_in_person_lunches">
            <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6576d4e79db93a0b550fcb8f_invite-1-p-1600.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
