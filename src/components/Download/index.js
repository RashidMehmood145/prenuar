import React from "react";

class Download extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="download-section pt-100 background-img"
          style={{
            // backgroundImage: "url('img/app-hero-bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="download-content text-white pb-100">
                  <h2 className="text-white">
                    Start Managing your apps business, more faster
                  </h2>
                  <p className="lead">
                  More by Pregnur Apps Checkout mobile call number locator, 
                  with country location of mobile number.
                   Find out the diet planner for weight loss and healthy diet plan.
                  </p>

                  <div className="download-btn">
                    <a href="https://play.google.com/store/apps/developer?id=Pregnur+Apps&hl=en&gl=US" className="btn google-play-btn mr-3">
                      <span className="ti-android"></span> Google Play
                    </a>
                    {/* <a href="/#" className="btn app-store-btn">
                      <span className="ti-apple"></span> App Store
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="download-img d-flex align-bottom">
                  <img
                    src="img/img.png"
                    alt="download"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Download;
