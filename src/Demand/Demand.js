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
import ConfidenceForm from './Components/ConfidenceForm/ConfidenceForm';
import './Demand.css';
import SankeyChart from './Components/SankeyChart/SankeyChart';
import TimeLine from './Components/TimeLine/TimeLine';
import CircularBarPlot from './Components/CircularBarPlot/CircularBarPlot';
/* import StackedCircular from './Components/CircularBarPlot/StackedCircular';
 */

const items = [
	{
		name: 'Supply',
        active: false,
        date: '9 Week Out',
	},
	{
		name: 'Mfg 1',
        active: false,
        date: '7 Week Out',
    },
    {
		name: 'Mfg 2',
        active: false,
        date: '5 Week Out',
	},
	{
		name: 'Inventory',
        active: false,
        date: '3 Week Out',
	},
	{
		name: 'Distribution',
        active: false,
        date: '1 Week Out',
    },
    {
		name: 'temp',
        active: false,
        date: '0 Week Out',
	}
]


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
                                            {/* <div className="demand-header">
												<DemandHeader /><hr style={{marginTop:'0px'}}/>
											</div> */}

                                            <div className="confidence-form">
                                                <ConfidenceForm />
                                            </div>
                                            {/* <ConfidenceUI /><br/> */}
                                            {/* <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Unit Demand</h1>
                                            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '65%', padding: '10px' }}>
                                                <UnitDemand />
                                            </div> */}

                                            <Row>
                                                <Col xl={10}>
                                                    <Card>
                                                        <Card.Body>
                                                            <AdjustedDemand />
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col xl={2}>
                                                    <Row>
                                                        <Col>
                                                            <Card className="text-center">
                                                                <Card.Header>Lower(U)</Card.Header>
                                                                <Card.Body>
                                                                    <Card.Title>150,904​</Card.Title>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Card className="text-center">
                                                                <Card.Header>Lower($)</Card.Header>
                                                                <Card.Body>
                                                                    <Card.Title>$4,150,904​​</Card.Title>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Card className="text-center">
                                                                <Card.Header>Upper(U)</Card.Header>
                                                                <Card.Body>
                                                                    <Card.Title>150,904​​</Card.Title>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Card className="text-center">
                                                                <Card.Header>Upper($)</Card.Header>
                                                                <Card.Body>
                                                                    <Card.Title>$2,150,904​​</Card.Title>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>


                                            {/* <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Adjusted Demand</h1> */}
                                            {/*  <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', margin: 'auto', width: '70%', padding: '10px' }}>
                                                <AdjustedDemand />
                                            </div> */}

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

                                            <div style={{marginTop:'20px'}}>
                                                <h2 style={{textAlign:'center'}}>Sankey Chart</h2>
                                                <Card>
                                                    <Card.Body>
                                                        <TimeLine items={items}/>
                                                        <SankeyChart />z
                                                    </Card.Body>
                                                </Card>
                                            </div>

                                            <div style={{marginTop:'20px'}}>
                                                <h2 style={{textAlign:'center'}}>Circular Barplot</h2>
                                                <Card>
                                                    <Card.Body>
                                                        <CircularBarPlot />
                                                        {/* <StackedCircular /> */}
                                                    </Card.Body>
                                                </Card>
                                            </div>
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