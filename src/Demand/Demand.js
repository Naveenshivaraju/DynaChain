import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { MyContext } from '../MyProvider';
import UnitDemand from './Components/UnitDemand/UnitDemand';
import AdjustedDemand from './Components/AdjustedDemand/AdjustedDemand';
import ForcastStability from './Components/ForcastStability/ForcastStability';
import TimeAnalysis from './Components/TimeAnalysis/TimeAnalysis';
import Card from 'react-bootstrap/Card'
import LagAnalysis from './Components/LagAnalysis/LagAnalysis';
import { Col, Container, Row } from 'react-bootstrap';
import DemandHeader from './Components/DemandHeader/DemandHeader';
import ConfidenceUI from './Components/ConfidenceUI/ConfidenceUI';


function Demand() {
    return (
        <MyContext.Consumer>
            {
                (context) => (
                    <div className="demand">
                        <div className="wrapper">
                            <div className={context.state.wrapperDiv}>
                                {context.state.sideBar}
                                <div className={context.state.pageContentDiv}>
                                    <div className="content">
                                       {/*  <div className="container-fluid p-0 px-lg-0"> */}
                                            <Navbar sideBarClickHandler={context.toggleButtonClickHandler} isOpen={context.state.isOpen} />
                                       {/*  </div> */}
										<Container fluid>
											<div className="demand-header">
												<DemandHeader />
											</div>
											<ConfidenceUI />

											 <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Unit Demand</h1>
                                            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '65%', padding: '10px' }}>
                                                <UnitDemand />
                                            </div>


                                            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Adjusted Demand</h1>
                                            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '70%', padding: '10px' }}>
                                                <AdjustedDemand />
                                            </div>

                                            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Forcast Stability</h1>
                                            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '65%', padding: '10px' }}>
                                                <ForcastStability />
                                            </div>

                                            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Time Analysis</h1>
                                            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '65%', padding: '10px' }}>
                                                <TimeAnalysis />
                                            </div>

                                            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Lag Analysis</h1>
                                            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '65%', padding: '10px' }}>
                                                <LagAnalysis />
                                            </div>


                                            <Card style={{ width: '300px', borderColor: "#ccc" }}>
                                                <Card.Header style={{ backgroundColor: "#ccc" }}>Unit Demand</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>123</Card.Title>
                                                    <Card.Text>
                                                        Hello World!
                                        </Card.Text>
                                                </Card.Body>
                                            </Card>
											
										</Container>
                                    </div>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </MyContext.Consumer>
    )
}

export default Demand;

/* <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Unit Demand</h1>
                                            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '65%', padding: '10px' }}>
                                                <UnitDemand />
                                            </div>


                                            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Adjusted Demand</h1>
                                            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '65%', padding: '10px' }}>
                                                <AdjustedDemand />
                                            </div>

                                            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Forcast Stability</h1>
                                            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '65%', padding: '10px' }}>
                                                <ForcastStability />
                                            </div>

                                            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Time Analysis</h1>
                                            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '65%', padding: '10px' }}>
                                                <TimeAnalysis />
                                            </div>

                                            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Lag Analysis</h1>
                                            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '65%', padding: '10px' }}>
                                                <LagAnalysis />
                                            </div>


                                            <Card style={{ width: '300px', borderColor: "#ccc" }}>
                                                <Card.Header style={{ backgroundColor: "#ccc" }}>Unit Demand</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>123</Card.Title>
                                                    <Card.Text>
                                                        Hello World!
                                        </Card.Text>
                                                </Card.Body>
                                            </Card> */