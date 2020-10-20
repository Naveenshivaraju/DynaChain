import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <footer className="footer position-relative">
                <div className="container-fluid">
                  <div className="row text-muted">
                    <div className="col-6 text-left">
                      <p className="mb-0">
                        <a href="#" className="text-muted">Copyright &copy; 2020 Tata Consultancy Services</a>
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <ul className="list-inline">
                        <li className="footer-item">
                          <a className="text-muted" href="#">Support</a>
                        </li>
                        <li className="footer-item">
                          <a className="text-muted" href="#">Help Center</a>
                        </li>
                        <li className="footer-item">
                          <a className="text-muted" href="#">Privacy</a>
                        </li>
                        <li className="footer-item">
                          <a className="text-muted" href="#">Terms</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </footer>
        </>
    )
}

export default Footer
