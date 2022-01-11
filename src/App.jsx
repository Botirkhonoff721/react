import React from 'react';

class App extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.id}</h1>  
                <h1>{this.props.name}</h1>  
                <h1>{this.props.status}</h1>  
            </div>
        )
    }
}

export default App
