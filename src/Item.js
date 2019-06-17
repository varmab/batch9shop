import React, {Component} from 'react'

class Item extends Component{
    constructor(props){
        super(props);

        this.state={
            item:props.item,
            isCart:props.isCart
        }
    }

    addToCart=()=>{
        this.props.addToCart(this.state.item);
    }

    removeFromCart=()=>{
        this.props.removeFromCart(this.state.item)
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.item.title}</h1>
                <p>Price: ${this.state.item.price}</p>
                
                {
                    (this.state.isCart==true) ? 
                    (<p>Qty: {this.state.item.qty}</p>) : 
                    ("")
                }
                {
                    (this.state.isCart==true) ? 
                    (<button onClick={this.removeFromCart}>Remove</button>) : 
                    (<button onClick={this.addToCart}>Add To Cart</button>)
                }
                
            </React.Fragment>
        )
    }
 
}

export default Item;