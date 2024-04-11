import React from 'react';
import './vendor/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './custom.css';
import myimg from './RT_logo.png';

class LoginPage extends React.Component {
  render() {
    return (
      <form action="/action_page.php" className="form-container">
        <div className="form-group">
          <img src={myimg} alt="RT Logo" className="logo-image" />
          <br />
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" size="50" />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" size="50" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
        </div>
        <div className="text-center mt-3 d-flex justify-content-end">
          <button type="submit" className="btn btn-default me-2">Cancel</button>
          <button type="submit" className="btn btn-primary">Log-in</button>
        </div>
      </form>
    );
  }
}

export default LoginPage;
