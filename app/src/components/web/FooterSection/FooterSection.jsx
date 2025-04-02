import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-graph-up me-2"></i>
              <span className="fs-4 fw-bold text-white">TalismanPro</span>
            </div>
            <p className="text-muted">Simplifying financial management for modern businesses.</p>
          </div>
          <div className="col-md-3 mb-4">
            <h3>Company</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="nav-link">About</a></li>
              <li className="mb-2"><a href="#" className="nav-link">Careers</a></li>
              <li className="mb-2"><a href="#" className="nav-link">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h3>Resources</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="nav-link">Blog</a></li>
              <li className="mb-2"><a href="#" className="nav-link">Documentation</a></li>
              <li className="mb-2"><a href="#" className="nav-link">Help Center</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h3>Newsletter</h3>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <button className="btn btn-primary w-100">Subscribe</button>
            </form>
            <div className="social-icons d-flex gap-3 mt-4">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center copyright">
          <p className="mb-0">&copy; 2025 TalismanPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
