import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App.jsx'
const data=[
  {id:1,name: 'Otabek',status: 'Student'},
  {id:2,name: 'Iqbol',status: 'Student'},
  {id:3,name: 'Zokir',status: 'Student'},
  {id:4,name: 'Asadullo',status: 'Student'},
  {id:5,name: 'Bahtiyor',status: 'Student'},
]

ReactDOM.render(
  <React.StrictMode>  
        {
          data.map((value)=>
           <App id={value.id} name={value.name} status={value.status} />
          )

        }
  </React.StrictMode>,
  document.getElementById('root')

)