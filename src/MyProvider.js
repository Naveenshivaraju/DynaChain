import React, { Component } from 'react'
import Sidebar from './Components/Sidebar/Sidebar';


//make a new context
export const MyContext = React.createContext();

//create a provider component
class MyProvider extends Component {
    state = {
        wrapperDiv: 'wrapper',
        pageContentDiv: 'page-content-wrapper',
        isOpen: '',
        sideBarOpen: false,
        sideBar: null
    }


    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                toggleButtonClickHandler: () => {

                    let new_isOpen = '';
                    let new_sideBar = null;
                    let new_wrapper = "wrapper";
                    let new_pageContentDiv = 'page-content-wrapper';

                    if (this.state.isOpen === '') {
                        new_isOpen = 'open';
                    }
                    else {
                        new_isOpen = '';
                    }

                    if (this.state.sideBar === null) {
                        new_sideBar = <Sidebar />;
                    }
                    else {
                        new_sideBar = null;
                    }


                    if (this.state.wrapperDiv === 'wrapper') {
                        new_wrapper = 'wrapper-active'
                    }
                    else {
                        new_wrapper = 'wrapper'
                    }


                    if (this.state.pageContentDiv === 'page-content-wrapper') {
                        new_pageContentDiv = 'page-content-wrapper-active'
                    }
                    else {
                        new_pageContentDiv = 'page-content-wrapper'
                    }


                    this.setState({
                        sideBar: new_sideBar,
                        isOpen: new_isOpen,
                        wrapperDiv: new_wrapper,
                        pageContentDiv: new_pageContentDiv,
                    })

                    this.setState((prevState) => {
                        console.log("Event occured and method ran.");
                        return { sideBarOpen: !prevState.sideBarOpen };
                    })
                },
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;