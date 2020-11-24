import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <nav className={"navbar navbar-expand-lg fixed-top " + (this.props.bgColor && this.props.bgColor === 'white' ? 'custom-nav white-bg' : 'bg-transparent')}>
            <div className="container">
              <a className="navbar-brand" href="/index.html">
                <img
                  src={this.props.bgColor && this.props.bgColor === 'white' ? "img/logo-color.png" : "img/logo-color.png"}
                  width="120"
                  alt="logo"
                  className="img-fluid"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="ti-menu"></span>
              </button>

              <div
                className="collapse navbar-collapse main-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item ">
                    <a
                      className="nav-link page-scroll "
                      href="/index.html"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                  </li>
                
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#features">
                      Key Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#services">
                      Why Choose us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#reviews">
                     What Clients say
                    </a>
                  </li>
               
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#screenshots">
                      Apps Screenshots
                    </a>
                  </li>
               
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#contact">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default connect(state => ({}))(Header);
