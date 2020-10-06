import React from 'react'
import './Navbar.css'
/* import ToggleButton from '../Sidebar/ToggleButton'; */
import profileImage from './user1.png';
import { Dropdown } from 'react-bootstrap';

const Navbar = props => (

  <nav className="navbar navbar-expand navbar-light my-navbar" /* fixed-top */ >

    {/* <ToggleButton click={props.sideBarClickHandler} isOpen={props.isOpen} /> */}

    <h1 className="h3 mb-0 text-gray-800 brand">Cognitive Control Tower</h1>


    <ul className="navbar-nav ml-auto">

      <li className="nav-item">
      <Dropdown>
          <Dropdown.Toggle id="dropdown-custom-components">
          Procurement​
        </Dropdown.Toggle>
          {/* <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Raw Matrials</Dropdown.Item>
            <Dropdown.Item eventKey="2">WIP</Dropdown.Item>
            <Dropdown.Item eventKey="3">Finished Goods</Dropdown.Item>
          </Dropdown.Menu>*/}
        </Dropdown> 
      </li>


      <li className="nav-item">
      <Dropdown>
          <Dropdown.Toggle id="dropdown-custom-components">
          Manufacturing​
        </Dropdown.Toggle>
         {/*  <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Raw Matrials</Dropdown.Item>
            <Dropdown.Item eventKey="2">WIP</Dropdown.Item>
            <Dropdown.Item eventKey="3">Finished Goods</Dropdown.Item>
          </Dropdown.Menu>*/}
        </Dropdown> 
      </li>

      <li className="nav-item">
      <Dropdown>
          <Dropdown.Toggle id="dropdown-custom-components">
            Inventory
        </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Raw Matrials</Dropdown.Item>
            <Dropdown.Item eventKey="2">WIP</Dropdown.Item>
            <Dropdown.Item eventKey="3">Finished Goods</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>


      <li className="nav-item">
      <Dropdown>
          <Dropdown.Toggle id="dropdown-custom-components">
            Distribution
        </Dropdown.Toggle>
         {/*  <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Raw Matrials</Dropdown.Item>
            <Dropdown.Item eventKey="2">WIP</Dropdown.Item>
            <Dropdown.Item eventKey="3">Finished Goods</Dropdown.Item>
          </Dropdown.Menu> */}
        </Dropdown>
      </li>




      <li className="nav-item">
        <a className="nav-link" href="#" role="button">
          <i className="fas fa-sync-alt" style={{ size: '2px' }}></i>
          <span className="badge badge-info badge-counter" style={{ fontSize: '12px' }}>!</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link " href="#" role="button">
          <i className="fas fa-envelope"></i>
          <span className="badge badge-danger badge-counter">4</span>
        </a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" className="userDropdown" role="button"
          data-toggle="dropdown">
          <span className="mr-2 d-none d-lg-inline text-gray-600 medium">Hi Rohit</span>
          <img className="imgProfile" src={profileImage} />
        </a>
      </li>
    </ul>
  </nav>

)

export default Navbar;
