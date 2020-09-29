import React, { Component } from 'react'
import './App.css'
/* import Sidebar from './Components/Sidebar/Sidebar'
 */import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import WorldMap from './Components/Map/WorldMap'
import ACProgressChart from './Components/ACProgressChart/ACProgressChart'
import ACCard from './Components/ACCard/ACCard'
import DynaTower from './DynaTower.json'
import BarChart from './Components/BarChart/BarChart';
import TreeMap1 from './Components/TreeMap1/TreeMap1';
import BarChart2 from './Components/Barchart2/BarChart2';
import PieChart from './Components/PieChart/PieChart'
import ProductBar from './Components/ProductBar/ProductBar'
import CustomerBar from './Components/CustomerBar/CustomerBar'
import PieChart2 from './Components/PieChart2/PieChart2'
import PieChart3 from './Components/PieChart3/PieChart3'
import MyProvider from './MyProvider'
import BarModel from './Components/Model/BarModel'
import TreeMapModel from './Components/Model/treeMapModel'
import MapLegend from './Components/Map/MapLegend'
import PieChart5 from './Components/PieChart5/PieChart5'
import PieChart4 from './Components/PieChart4/PieChart4'
import InvHeader from './Components/InvHeader/InvHeader'





export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sideBarOpen: false,
      wrapperDiv: 'wrapper',
      pageContentDive: 'page-content-wrapper',
      sideBarDiv: 'sidebar-wrapper',
      index: 0,
      isOpen: ''
    }
  }

  toggleButtonClickHandler = () => {

    let new_isOpen = '';
    if (this.state.isOpen === '') {
      new_isOpen = 'open';
    }
    else {
      new_isOpen = '';
    }

    this.setState({
      isOpen: new_isOpen
    })

    this.setState((prevState) => {
      console.log("Event occured and method ran.");
      return { sideBarOpen: !prevState.sideBarOpen };
    })
  }

  nextAC = () => {
    const newIndex = this.state.index + 4;
    this.setState({
      index: newIndex
    })
  }

  prevAC = () => {
    const newIndex = this.state.index - 4;
    this.setState({
      index: newIndex
    })
  }

  render() {

    let wrapperDiv = 'wrapper';
    let pageContentDiv = 'page-content-wrapper';
    let sideBarWrapper = 'sidebar-wrapper';

    if (this.state.sideBarOpen) {
      wrapperDiv = 'wrapper-active';
      pageContentDiv = 'page-content-wrapper-active';
      sideBarWrapper = 'sidebar-wrapper-active';
      console.log("inside if.");
    }

    return (
      <>
        <MyProvider>
          <Router>
            <div className={wrapperDiv}>
              <div className="overlay"></div>
             {/*  {sideBar} */}
              <div className={pageContentDiv}>
                <div className="content">
                  <div className="container-fluid p-0 px-lg-0">
                    <Navbar sideBarClickHandler={this.toggleButtonClickHandler} isOpen={this.state.isOpen} />

                    <div className="row Inventory_header">
                      <InvHeader />
                    </div>

                    <div className="row row-padding"> {/*  sticky-div */}

                      <div className="col-md-5" style={{ paddingRight: '10px' }}>
                        <div className="card">
                          <div className="map-card">
                            <WorldMap />
                            <MapLegend />
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-7" style={{ paddingRight: '16px', paddingLeft: '5px' }}>
                        <div className="row">
                          <div className="col-sm-6" style={{ paddingRight: '10px' }}>
                            <div className="card" style={{ marginBottom: '6px' }}>
                              <div className="row">
                                <div className="col-sm-2">
                                </div>
                                <div className="col-sm-8">
                                  <div className="graph-heading">Inventory Quality</div>
                                </div>
                                <div className="col-sm-2">
                                  <TreeMapModel />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6" style={{ paddingLeft: '5px' }}>
                            <div className="card" style={{ marginBottom: '6px' }}>
                              <div className="row">
                                <div className="col-sm-2">
                                </div>
                                <div className="col-sm-8">
                                  <div className="graph-heading">Inventory Obsolescence</div>
                                </div>
                                <div className="col-sm-2">
                                  <BarModel />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="row">
                          <div className="col-sm-6" style={{ paddingRight: '10px' }}>
                            <div className="card">
                              <div className="treemap-card">
                                <TreeMap1 />
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6" style={{ paddingLeft: '5px' }}>
                            <div className="card" >
                              <div className="barchart-card">
                                <BarChart />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sticky header close */}

                    <div className="row row-padding">
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body" style={{ paddingTop: '6px', paddingBottom: '6px' }}>
                            <h5 className="" style={{ textAlign: 'center', margin: '0px' }}>Top 5 Inventories Info</h5>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body" style={{ paddingTop: '6px', paddingBottom: '6px' }}>
                            <h5 className="" style={{ textAlign: 'center', margin: '0px' }}>Inventory Matrics</h5>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row row-padding">
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6" style={{ paddingRight: '7px' }}>
                            <div className="card smallcard">
                              <div className="card-body">
                                <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                  Top 5 BU Inventories Mtn (By Balance)
                                </div>
                                <BarChart2 />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6" style={{ paddingLeft: '7px' }}>
                            <div className="card smallcard">
                              <div className="card-body">
                                <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                  Top 5 BU % of Inventories
                                  </div>
                                <div style={{ height: '232px', width: '100%' }}>
                                  <PieChart />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6" style={{ paddingRight: '7px' }}>
                            <div className="card smallcard">
                              <div className="card-body">
                                <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                  Total Inventory (Mtn)
                                  </div>
                                <div style={{ height: '232px', width: '100%' }}>
                                  <PieChart2 />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6" style={{ paddingLeft: '7px' }}>
                            <div className="card smallcard">
                              <div className="card-body">
                                <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                  Inventory Cost
                                  </div>
                                <div style={{ height: '232px', width: '100%' }}>
                                  <PieChart3 />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row row-padding">
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6" style={{ paddingRight: '7px' }}>
                            <div className="card smallcard">
                              <div className="card-body">
                                <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                  Top 10 Products​ (Sales)
                                  </div>
                                <div style={{ display: 'flex', overflowX: 'scroll', overflowY: 'scroll', height: '450px' }}>
                                  <ProductBar />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6" style={{ paddingLeft: '7px' }}>
                            <div className="card smallcard">
                              <div className="card-body">
                                <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                  Top 10 Customers​ (Sales)
                                  </div>
                                <div style={{ display: 'flex', overflowX: 'scroll', overflowY: 'scroll', height: '450px' }}>
                                  <CustomerBar />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-3">
                                <div className="row" className="itemicon" style={{ backgroundColor: "#60c49f" }}>
                                </div>
                                <div className="row" className="itemtext">Sheet ingots​</div>
                              </div>
                              <div className="col-sm-3">
                                <div className="row" className="itemicon" style={{ backgroundColor: '#f2bb23' }}>
                                </div>
                                <div className="row " className="itemtext">Extrusion ingots​</div>
                              </div>
                              <div className="col-sm-3">
                                <div className="row" className="itemicon" style={{ backgroundColor: '#eb7f3e' }} >
                                </div>
                                <div className="row " className="itemtext">Wire rod</div>
                              </div>
                              <div className="col-sm-3">
                                <div className="row" className="itemicon" style={{ backgroundColor: '#4788fe' }}>
                                </div>
                                <div className="row" style={{ textAlign: 'left' }} >Primary foundry alloys​</div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="row">
                          <div className="col-sm-6" style={{ paddingRight: '7px' }}>
                            <div className="card smallcard">
                              <div className="card-body">
                                <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                  Total Value ($)
                                  </div>
                                <div style={{ height: '232px', width: '100%' }}>
                                  <PieChart4 />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6" style={{ paddingLeft: '7px' }}>
                            <div className="card smallcard">
                              <div className="card-body">
                                <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                  Inventory Turns
                                  </div>
                                <div style={{ height: '232px', width: '100%' }}>
                                  <PieChart5 />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Sticky body */}
                    {/* Sticky body close */}
                  </div>
                  <Footer />
                </div>
              </div>
            </div>
            <Switch>
              <Route path='/' />
            </Switch>
          </Router >
        </MyProvider>
      </>
    )
  }
}

export default App
