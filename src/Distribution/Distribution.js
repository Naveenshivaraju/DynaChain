import React from 'react';
import './Distribution.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { MyContext } from '../MyProvider';


function Distribution() {
    return (
<MyContext.Consumer>
{
    (context) => (
        <div className="distribution">
            <div className="wrapper">
                <div className={context.state.wrapperDiv}>
                    {context.state.sideBar}
                    <div className={context.state.pageContentDiv}>
                        <div className="content">
                            <div className="container-fluid p-0 px-lg-0">
                                <Navbar sideBarClickHandler={context.toggleButtonClickHandler} isOpen={context.state.isOpen} />
                                <h1 className="center">Distribution Page</h1>
                            </div>
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

export default Distribution;
