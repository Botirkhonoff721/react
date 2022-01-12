import React from 'react'
import './ContainerStyle.css'

class Container extends React.Component{
    render(){
        console.log(this.props.air)
        return(
            <div className='container'>
              <div className='wrapperti'>
                <img className='rasm' src={this.props.img} alt="" width={90} height={60} />
              <h1 className='title'>{this.props.title}</h1>  
              </div>
              <h1 className='text'>{this.props.text}</h1>  
                <button className='btn'>Send</button>
            </div>
        )
    }
}

export default Container