import React from 'react';
import Child from './test';

const data=[
    {id:1,name: 'Otabek',status: 'Student'},
    {id:2,name: 'Iqbol',status: 'Student'},
    {id:3,name: 'Zokir',status: 'Student'},
    {id:4,name: 'Asadullo',status: 'Student'},
    {id:5,name: 'Bahtiyor',status: 'Student'},
  ]
class App extends React.Component {
    render(){
        return(
            <div>
                <Child data={data}/>
            </div>
        )
    }
}

export default App
