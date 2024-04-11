import React from 'react';
import './vendor/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './custom.css';
import lugimg from './lugimg.png';
import RTLogo from './RT_logo.png'; 
// Import the logo image

class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
  <a className="navbar-brand nav-link text-light d-flex align-items-center" href="#">
    <img src={RTLogo} alt="RT Logo" />
    <span className="rent-track-text">RentTrack</span>
  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="home.js">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="content-container" style={{ paddingTop: '100px', position: 'relative' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div>
    <h1 style={{ paddingLeft: '60px', color: 'white', paddingTop: '1100px' }}>Welcome to RentTrack!</h1>
    <h3 style={{ paddingLeft: '80px', color: 'white' , paddingTop: '40px' }}>
        "Welcome to our innovative platform where effortlessly managing your <br />
         tenants data becomes a breeze! Explore the simplicity of storing and  <br />
         handling your tenants' information with ease. <br />
         Keep discovering the possibilities!"
    </h3>
    </div>
    <img src={lugimg} alt="Image" style={{ width: '550px', marginLeft: '20px', paddingTop: '1000px', paddingLeft: '60px' }} />

  </div>
  <button className="button button5">Register now</button>
  <button className="button2 button6">Log-In</button>
</div>

        <div className="about-section">
          <h1 style={{ paddingTop: '5px'}}>Hello Users ;)</h1>
          <p>Thank you for visiting our website!</p>
          <br></br>
          <h2 className="text-center"></h2>
          <div className="row">
            <div className="column">
              <div className="card">
                <div className="container">
                  <br></br>
                  <h2>About Us</h2>
                  <p className="title"></p>
                  <p>
                    RentTrack streamlines rental processes for students and property owners. It manages vital information, simplifies lease agreements, payments, and maintenance requests, ensuring a smoother experience for all.
                  </p>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="container">
                  <br></br>
                  <h2>Our Goal</h2>
                  <p className="title"></p>
                  <p>
                  At RentTrack, our goal is to simplify data management for estate owners handling multiple student accommodations. With our dedicated team, we streamline complex tasks, empowering owners to manage properties effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="container">
                  <br></br>
                  <h2>Who Are We</h2>
                  <p className="title"></p>
                  <p>
                   
We're the team behind RentTrack, passionate about using technology to improve the lives of seniors and property owners. With expertise in both tech and real estate, we understand the challenges they face in managing assets efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <h1>Meet Our Team</h1>
          <p>renttrack@gmail.com</p>
          <p>+91 2364383929</p>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
