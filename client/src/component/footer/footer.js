import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted Footer">
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="https://www.facebook.com/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com/" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.google.com/" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://www.instagram.com/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.github.com/" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row footerrow  mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                SpaceKey HomeLaunch
              </h6>
              <p>
              Search for any house, shop or villa, we will help you find what you need
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <Link to="/buy" className="text-reset">Buy</Link>
              </p>
              <p>
                <Link to="/rent" className="text-reset">Rent</Link>
              </p>
              <p>
                <Link to="/commercial" className="text-reset">commercial</Link>
              </p>
              <p>
                <Link to="/ourclint" className="text-reset">Our clients</Link>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <Link to="/Terms" className="text-reset">Terms & Conditions</Link>
              </p>
              <p>
                <Link to="/Privacy" className="text-reset">Privacy Policy</Link>
              </p>
              <p>
                <Link to="/Cookies" className="text-reset">Cookies Policy</Link>
              </p>
              <p>
                <Link to="/Aboutus" className="text-reset">About us</Link>
              </p>
            </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New cairo</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
            cis@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i>01207465753</p>
            </div>
            </div>
        </div>
      </section>
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="">7ana</a>
      </div>
    </footer>

  )
}

export default Footer
