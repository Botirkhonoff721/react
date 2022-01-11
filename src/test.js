import React from 'react'


class Child extends React.Component{
    render(){
        console.log(this.props.data);
        return(
        <table border="2">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
            {
                this.props.data.map((value,index)=>
                <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.status}</td>
                </tr>
                )
            }
            </tbody>
        </table>
        )
    }
}

export default Child