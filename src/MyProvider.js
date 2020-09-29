import React, { Component } from 'react'


//make a new context
export const MyContext = React.createContext();

//create a provider component
class MyProvider extends Component {
    state = {
        name: 'Rohit',
        dataNumber: 1,
        cityname:''
    }

    

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                increment: (cname) => {
                    
                    this.setState({
                    dataNumber: this.state.dataNumber + 1,
                    cityname: cname
                })

                if(this.state.dataNumber == 6)
                {
                    this.setState({
                        dataNumber: 1
                    })
                }
            }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;