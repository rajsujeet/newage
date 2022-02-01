import './styles.css';
import React from "react";
import images from '../../constants/Images';

function FullImage() {
  return(
    <div>
      <section className="ice-bulbs-section">
        <img src={images.iceBulbs} className="App-logo image-full-width" alt="logo" />
        <div className="ice-bulds-container">
          <div className="ice-bulds-overlay">
            <div className="ice-bulds-text">
              <h2>Lorem Ipsum is simply dummy text</h2>
              <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
galley of type and scrambled it to make a type specimen book.</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="lights-section">
        <img src={images.lights} className="App-logo image-full-width" alt="logo" />
        <div className="lights-container">
          <div className="lights-overlay">
            <div className="lights-text">
              <h2>Lorem Ipsum is simply dummy text</h2>
              <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
galley of type and scrambled it to make a type specimen book.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FullImage;