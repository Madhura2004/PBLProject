import React from 'react';
import './vendor/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './custom.css';
import RTLogo from './RT_logo.png'; 

class HomePage extends React.Component {
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
                  <a className="nav-link" href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        
        <div className="menu">
  <h1 style={{ paddingTop: '890px'}}></h1>
  <div className="container">
    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="card">
          <div className="container">
            <br/>
            <h2><a href="#fill_manually" style={{ textDecoration: 'none', color: 'inherit' }}>Fill Manually</a></h2> 
            <p className="title"></p>
            <p>Fill the data by manual typing</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className="card">
          <div className="container">
            <br />
            <h2><a href="#fill_by_image" style={{ textDecoration: 'none', color: 'inherit' }}>Fill By Image</a></h2>
            <p className="title"></p>
            <p>Fill the data by scanning the image</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className="card">
          <div className="container">
            <br />
            <h2><a href="#view_information" style={{ textDecoration: 'none', color: 'inherit' }}>View Information</a></h2>
            <p className="title"></p>
            <p>View all the records</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="menu">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="card">
          <div className="container">
            <br/>
            <h2><a href="#update_information" style={{ textDecoration: 'none', color: 'inherit' }}>Update Information</a></h2> 
            <p className="title"></p>
            <p>Update Information</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className="card">
          <div className="container">
            <br />
            <h2><a href="#delete_information" style={{ textDecoration: 'none', color: 'inherit' }}>Delete Information</a></h2>
            <p className="title"></p>
            <p>Delete any Information</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className="card">
          <div className="container">
            <br />
            <h2><a href="#view_information" style={{ textDecoration: 'none', color: 'inherit' }}>View Information</a></h2>
            <p className="title"></p>
            <p>View all the records</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="about-section">
        <br></br>
        <br></br>
        <br></br>
          <h1 style={{ paddingLeft: '540px'}}>Hello Users ;)</h1>
          <p style={{ paddingLeft: '540px'}}>Thank you for visiting our website!</p>
          <br></br>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <div className="container">
                    <br />
                    <h2>About Us</h2>
                    <p className="title"></p>
                    <p>
                      RentTrack streamlines rental processes for students and property owners. It manages vital information, simplifies lease agreements, payments, and maintenance requests, ensuring a smoother experience for all.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="card">
                  <div className="container">
                    <br />
                    <h2>Our Goal</h2>
                    <p className="title"></p>
                    <p>
                      At RentTrack, our goal is to simplify data management for estate owners handling multiple student accommodations. With our dedicated team, we streamline complex tasks, empowering owners to manage properties effectively.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="card">
                  <div className="container">
                    <br />
                    <h2>Who Are We</h2>
                    <p className="title"></p>
                    <p>
                      We're the team behind RentTrack, passionate about using technology to improve the lives of seniors and property owners. With expertise in both tech and real estate, we understand the challenges they face in managing assets efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br/>
          <h1 style={{ paddingLeft: '540px'}}>Meet Our Team</h1>
          <p style={{ paddingLeft: '585px'}}>renttrack@gmail.com</p>
          <p style={{ paddingLeft: '590px'}}>+91 2364383929</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
