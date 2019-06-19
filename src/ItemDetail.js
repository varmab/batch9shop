import React from 'react'

class ItemDetail extends React.Component{
    render(){
        return(
            <h1>Item Detail: {this.props.match.params.id}</h1>
        )
    }
}

export default ItemDetail;