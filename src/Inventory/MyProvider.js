import React, { Component } from 'react'


//make a new context
export const MyContext = React.createContext();

//create a provider component
class MyProvider extends Component {
    state = {
        name: 'Rohit',
        dataNumber: 1,
        cityname: 'Inventory',
        upicon: 'upicon_hide'
    }



    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                increment: (cname) => {

                    this.setState({
                        dataNumber: this.state.dataNumber + 1,
                        cityname: cname,
                        upicon: 'upicon_show'
                    })


                    if (this.state.dataNumber === 6) {
                        this.setState({
                            dataNumber: 2
                        })
                    }
                },

                upiconClick: () => {
                    this.setState({
                        cityname:'Inventory',
                        dataNumber: 1,
                        upicon: 'upicon_hide'
                    })
                },

            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;