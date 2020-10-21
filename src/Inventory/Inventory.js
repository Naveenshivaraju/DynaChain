import React, { Component } from 'react'
import './Inventory.css';
import WorldMap from './Components/Map/WorldMap'
import BarChart from './Components/BarChart/BarChart';
import TreeMap1 from './Components/TreeMap1/TreeMap1';
import BarChart2 from './Components/Barchart2/BarChart2';
import PieChart from './Components/PieChart/PieChart'
import ProductBar from './Components/ProductBar/ProductBar'
import CustomerBar from './Components/CustomerBar/CustomerBar'
import PieChart2 from './Components/PieChart2/PieChart2'
import PieChart3 from './Components/PieChart3/PieChart3'
import MyProvider from './MyProvider'
import PieChart5 from './Components/PieChart5/PieChart5'
import PieChart4 from './Components/PieChart4/PieChart4'
import InvHeader from './Components/InvHeader/InvHeader'
import Modal from './Components/Modal/CustomModal';
import Navbar from '../Components/Navbar/Navbar';
import { MyContext } from '../MyProvider'
import Footer from '../Components/Footer/Footer';




export class Inventory extends Component {

  render() {
    return (
      <>
        <MyContext.Consumer>
          {
            (context) => (
              <div className="inventory">
                <MyProvider>
                  <div className={context.state.wrapperDiv}>
                    {context.state.sideBar}
                    <div className={context.state.pageContentDiv}>
                      <div className="content">
                        {/* <div className="container-fluid p-0 px-lg-0 sticky-nav"> */}
                          <Navbar sideBarClickHandler={context.toggleButtonClickHandler} isOpen={context.state.isOpen} />
                       {/*  </div> */}

                        <div className="row Inventory_header">
                          <InvHeader />
                        </div>

                        <div className="row row-padding"> {/*  sticky-div */}

                          <div className="col-md-5" style={{ paddingRight: '10px' }}>
                            <div className="card">
                              <div className="map-card">
                                <WorldMap />
                                {/*  <MapLegend /> */}
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
                                      {/*  <TreeMapModel /> */}
                                      <Modal
                                        modalTitle="Inventory Obsolescence"
                                        modalBody={<TreeMap1 />}
                                        size="lg"
                                      />
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
                                      <Modal
                                        modalTitle={"Inventory Obsolescence"}
                                        modalBody={<BarChart />}
                                        size="lg" />
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
                                <h5 className="" style={{ textAlign: 'center', margin: '0px' }}>
                                  Top 5 Inventories Info
                                </h5>
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

                                    <div className="row">

                                      <div className="col-sm-10">
                                        <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                          Top 5 BU Inventories Mtn (By Balance)
                                      </div>
                                      </div>
                                      <div className="col-sm-2">
                                        <Modal
                                          modalTitle="Top 5 BU Inventories Mtn (By Balance)"
                                          modalBody={<BarChart2 />}
                                          size='lg'
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <BarChart2 />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6" style={{ paddingLeft: '7px' }}>
                                <div className="card smallcard">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-2">
                                      </div>
                                      <div className="col-sm-8">
                                        <div className="card-title mb-4" style={{ textAlign: 'left', fontSize: '15px', fontWeight: '400px' }}>
                                          Top 5 BU % of Inventories
                                      </div>
                                      </div>
                                      <div className="col-sm-2">
                                        <Modal
                                          modalTitle="Top 5 BU % of Inventories"
                                          modalBody={<PieChart legend={true} enableRadialLabels={true} />}
                                          size='lg'
                                        />
                                      </div>
                                    </div>

                                    <div className="row" >
                                      <PieChart legend={false} enableRadialLabels={false} />
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
                                    <div className="row">
                                      <div className="col-sm-2">
                                      </div>
                                      <div className="col-sm-8">
                                        <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                          Total Inventory (Mtn)
                                      </div>
                                      </div>
                                      <div className="col-sm-2">
                                        <Modal
                                          modalTitle="Total Inventory (Mtn)"
                                          modalBody={<PieChart2 legend={true} enableRadialLabels={true} />}
                                          size='lg'
                                        />
                                      </div>
                                    </div>

                                    <div className="row" >
                                      <PieChart2 legend={false} enableRadialLabels={false} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6" style={{ paddingLeft: '7px' }}>
                                <div className="card smallcard">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-2">
                                      </div>
                                      <div className="col-sm-8">
                                        <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                          Inventory Cost
                                      </div>
                                      </div>
                                      <div className="col-sm-2">
                                        <Modal
                                          modalTitle="Inventory Cost"
                                          modalBody={<PieChart3 legend={true} enableRadialLabels={true} />}
                                          size='lg'
                                        />
                                      </div>
                                    </div>

                                    <div className="row" >
                                      <PieChart3 legend={false} enableRadialLabels={false} />
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
                                    <div className="row">
                                      <div className="col-sm-2">
                                      </div>
                                      <div className="col-sm-8">
                                        <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px', zIndex: '1' }}>
                                          Top 10 Products (Sales)
                                      </div>
                                      </div>
                                      <div className="col-sm-2" style={{ zIndex: '1' }}>
                                        <Modal
                                          modalTitle="Top 10 Products (Sales)"
                                          modalBody={<ProductBar />}
                                          size='lg'
                                        />
                                      </div>
                                    </div>

                                    {/* <div className="row"> */}
                                    <ProductBar />
                                    {/* </div> */}
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6" style={{ paddingLeft: '7px' }}>
                                <div className="card smallcard">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-2">
                                      </div>
                                      <div className="col-sm-8">
                                        <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px', zIndex: '1' }}>
                                          Top 10 Customers (Sales)
                                      </div>
                                      </div>
                                      <div className="col-sm-2" style={{ zIndex: '1' }}>
                                        <Modal
                                          modalTitle="Top 10 Customers (Sales)"
                                          modalBody={<CustomerBar />}
                                          size='lg'
                                        />
                                      </div>
                                    </div>

                                    {/* <div className="row"> */}
                                    <CustomerBar />
                                    {/* </div> */}
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


                            <div className="row" style={{ paddingRight: '8px' }}>
                              <div className="col-sm-6" style={{ paddingRight: '7px' }}>
                                <div className="card smallcard">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-2">
                                      </div>
                                      <div className="col-sm-8">
                                        <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                          Total Value ($)
                                      </div>
                                      </div>
                                      <div className="col-sm-2">
                                        <Modal
                                          modalTitle="Total Value ($)"
                                          modalBody={<PieChart4 legend={true} enableRadialLabels={true} />}
                                          size='lg'
                                        />
                                      </div>
                                    </div>

                                    <div className="row" >
                                      <PieChart4 legend={false} enableRadialLabels={false} />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6" style={{ paddingRight: '7px' }}>
                                <div className="card smallcard">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-2">
                                      </div>
                                      <div className="col-sm-8">
                                        <div className="card-title mb-4" style={{ textAlign: 'center', fontSize: '15px', fontWeight: '400px' }}>
                                          Inventory Turns
                                      </div>
                                      </div>
                                      <div className="col-sm-2">
                                        <Modal
                                          modalTitle="Inventory Turns"
                                          modalBody={<PieChart5 legend={true} cx={360} cy={120} />}
                                          size='lg'
                                        />
                                      </div>
                                    </div>

                                    <div className="row" >
                                      <PieChart5 legend={false} cx={155} cy={120} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Footer />
                    </div>          
                </MyProvider>
              </div>
            )
          }
        </MyContext.Consumer>
      </>
    )
  }
}

export default Inventory
