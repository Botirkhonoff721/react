import React from 'react';
import './App.css'
import Air from './assets/airbnbpic.png'
import ebay from './assets/ebaypic.png'
import pay from './assets/paypallicon.png'
import Container from './Container.jsx'
class App extends React.Component {
    render(){
        return(
            <div className='Wrapper'>
            <Container img={pay}  title='Airbnb' text='There is abooo in the library. If you want to read book just enter to the internet and read '>

            </Container>
         
            <Container img={ebay}  title='Airbnb' text='There is abooo in the library. If you want to read book just enter to the internet and read '>

            </Container>
         
            <Container img={pay}  title='Airbnb' text='There is abooo in the library. If you want to read book just enter to the internet and read '>

            </Container>
         
            <Container img={ebay} title='Airbnb' text='There is abooo in the library. If you want to read book just enter to the internet and read '>

            </Container>
         
            <Container img={ebay}  title='Airbnb' text='There is abooo in the library. If you want to read book just enter to the internet and read '>

            </Container>
            <Container img={pay} title='Airbnb' text='There is abooo in the library. If you want to read book just enter to the internet and read '>

            </Container>
         
          
         
         
            </div>
        )
    }
}

export default App
