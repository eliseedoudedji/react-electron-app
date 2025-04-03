import React from "react";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <section className="py-16" style={{ marginTop: "100px" }}>
      <h2 className="display-6 fw-semibold text-dark mb-5">Tarification</h2>
      <div className="row">
        <div className="col-sm-6 col-xl-3 primary">
          <div className="princing-item mb-4">
            <div className="pricing-divider text-center br-5">
              <h3 className="text-fixed-white fs-24">Basic</h3>
              <h4 className="my-0 display-2 text-fixed-white fw-normal mb-3 fs-64 text-fixed-white"><span className="h3 text-fixed-white">$</span> 120 <span className="h5 text-fixed-white">/mo</span></h4>
              <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" y="0px">
                <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
										c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
										c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
										H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
									c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
              </svg>
            </div>
            <div className=" br-5 bg-white mt-0 shadow text-center">
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item rounded-0 rounded-0"><b>10</b> users included</li>
                <li className="list-group-item rounded-0 rounded-0"><b>2 GB</b> of storage</li>
                <li className="list-group-item rounded-0 rounded-0"><b>Free </b>Email support</li>
                <li className="list-group-item rounded-0 rounded-0"><b> 24/7</b> support</li>
                <li className="list-group-item rounded-0 rounded-0 border-bottom"><b>Help center access</b></li>
              </ul>
              <div className="card-footer p-3">
                <button type="button" className="btn btn-primary ">Sign up for free</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3 info">
          <div className="princing-item mb-4">
            <div className="pricing-divider text-center br-5">
              <h3 className="text-fixed-white fs-24">Premium</h3>
              <h4 className="my-0 display-2 text-fixed-white fw-normal mb-3 fs-64"><span className="h3 text-fixed-white">$</span> 150 <span className="h5 text-fixed-white">/mo</span></h4>
              <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_2" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" y="0px">
                <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
										c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
										c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
										H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
									c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
              </svg>
            </div>
            <div className="br-5 bg-white mt-0 shadow text-center">
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item rounded-0 rounded-0"><b>10</b> users included</li>
                <li className="list-group-item rounded-0 rounded-0"><b>2 GB</b> of storage</li>
                <li className="list-group-item rounded-0 rounded-0"><b>Free </b>Email support</li>
                <li className="list-group-item rounded-0 rounded-0"><b> 24/7</b> support</li>
                <li className="list-group-item rounded-0 rounded-0 border-bottom"><b>Help center access</b></li>
              </ul>
              <div className="card-footer p-3">
                <button type="button" className="btn btn-info ">Sign up for free</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3 success">
          <div className="princing-item mb-4">
            <div className="pricing-divider text-center br-5">
              <h3 className="text-fixed-white fs-24">Enterprise</h3>
              <h4 className="my-0 display-2 text-fixed-white fw-normal mb-3 fs-64"><span className="h3 text-fixed-white">$</span> 200 <span className="h5 text-fixed-white">/mo</span></h4>
              <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_3" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" y="0px">
                <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
										c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
										c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
										H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
									c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
              </svg>
            </div>
            <div className=" br-5 bg-white mt-0 shadow text-center">
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item rounded-0 rounded-0"><b>10</b> users included</li>
                <li className="list-group-item rounded-0 rounded-0"><b>2 GB</b> of storage</li>
                <li className="list-group-item rounded-0 rounded-0"><b>Free </b>Email support</li>
                <li className="list-group-item rounded-0 rounded-0"><b> 24/7</b> support</li>
                <li className="list-group-item rounded-0 rounded-0 border-bottom"><b>Help center access</b></li>
              </ul>
              <div className="card-footer p-3">
                <button type="button" className="btn btn-success ">Sign up for free</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3 secondary">
          <div className="princing-item mb-4">
            <div className="pricing-divider text-center br-5">
              <h3 className="text-fixed-white fs-24">Enterprise</h3>
              <h4 className="my-0 display-2 text-fixed-white fw-normal mb-3 fs-64"><span className="h3 text-fixed-white">$</span> 180 <span className="h5 text-fixed-white">/mo</span></h4>
              <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_4" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" y="0px">
                <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
										c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
										c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
										H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
									c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
              </svg>
            </div>
            <div className=" br-5 bg-white mt-0 shadow text-center">
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item rounded-0 rounded-0"><b>10</b> users included</li>
                <li className="list-group-item rounded-0 rounded-0"><b>2 GB</b> of storage</li>
                <li className="list-group-item rounded-0 rounded-0"><b>Free </b>Email support</li>
                <li className="list-group-item rounded-0 rounded-0"><b> 24/7</b> support</li>
                <li className="list-group-item rounded-0 rounded-0 border-bottom"><b>Help center access</b></li>
              </ul>
              <div className="card-footer p-3">
                <button type="button" className="btn btn-secondary">Sign up for free</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
