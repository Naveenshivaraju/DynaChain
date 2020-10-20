import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { MyContext } from '../../MyProvider';




function Sidebar(props) {

  const [submenu_status, setSubMenu] = useState('submenu-list-hide');
  const [dropdownicon, setDropdownIcon] = useState('fas fa-chevron-down');

  function toggleSubMenu() {
    console.log("toggleSubMenu Run");
    setSubMenu(prevsubmenu_status => (prevsubmenu_status === 'submenu-list-hide') ? 'submenu-list-show' : 'submenu-list-hide');
    setDropdownIcon(prevdropdownicon => (prevdropdownicon === 'fas fa-chevron-down') ? 'fas fa-chevron-up' : 'fas fa-chevron-down');
  }

  return (
    <MyContext.Consumer>
      {
        (context) => (
          <>
            <nav className="fixed-top align-top sidebar-wrapper" role="navigation">
              <div className="simplebar-content" style={{ padding: '0px' }}>
                <a className="sidebar-brand" href="#">
                  <span className="align-middle">DynaChain &trade;</span>
                </a>

                <ul className="navbar-nav align-self-stretch"/*  onClick={() => context.toggleButtonClickHandler()} */>

                  <li className="sidebar-header">Dashboard
            </li>

                  <li className="">
                    <Link className="nav-link text-left sidebarlink" role="button" aria-haspopup="true" aria-expanded="false"
                      to="/">
                      <i className="fas fa-chart-bar"></i> Home
                </Link>
                  </li>

                  <li className="">
                    <Link className="nav-link text-left sidebarlink" role="button" to="/procurement" >
                      <i className="fas fa-cart-arrow-down"></i> Procurement
              </Link>

                  </li>

                  <li className="" >
                    <Link className="nav-link text-left sidebarlink" role="button" to="/demand" >
                      <i className="fas fa-chart-line"></i> Demand
                    </Link>
                  </li>

                  <li className="">
                    <Link className="nav-link text-left sidebarlink" role="button" to="/manufacturing">
                      <i className="fas fa-industry"></i> Manufacturing
                    </Link>
                  </li>

                  <li className="">
                    <div className="row">
                      <div className="col-sm-10">
                        <Link className="nav-link-dd text-left-dd sidebarlink-dd dd" role="button" to="/inventory">
                          <i className="fas fa-warehouse i-dd" ></i> Inventory
                        </Link>
                      </div>

                      <div className="col-sm-2">
                          <i className={`${dropdownicon} drop-down`} onClick={toggleSubMenu}></i>
                      </div>
                    </div>

                    <div className="row">
                      <div className="submenu-box">
                        <ul className={submenu_status}>
                          <li><Link to="/raw_materials">Raw Materials</Link></li>
                          <li><Link to="/WIP">WIP</Link></li>
                          <li><Link to="/finished_goods">Finished Goods</Link></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="">
                    <Link className="nav-link text-left sidebarlink" role="button" to="/distribution">
                      <i className="fas fa-truck"></i> Distribution
                    </Link>
                  </li>

                  <li className="sidebar-header">
                    Tools and Component
            </li>

                  <li className="">
                    <a className="nav-link text-left" role="button">
                      <i className="flaticon-bar-chart-1"></i> Link 1
              </a>
                  </li>

                  <li className="">
                    <a className="nav-link text-left" role="button">
                      <i className="flaticon-bar-chart-1"></i> Link 2
              </a>
                  </li>
                  <li className="">
                    <a className="nav-link text-left" role="button">
                      <i className="flaticon-bar-chart-1"></i> Link 3
              </a>
                  </li>

                  <li className="sidebar-header">
                    Analysis
              </li>
                  <li className="">
                    <a className="nav-link text-left" role="button">
                      <i className="flaticon-bar-chart-1"></i> Chart
              </a>
                  </li>
                  <li className="">
                    <a className="nav-link text-left" role="button">
                      <i className="flaticon-map"></i> Map
               </a>
                  </li>
                </ul>
              </div>
            </nav>
          </>
        )}
    </MyContext.Consumer>
  )
}

export default Sidebar;
