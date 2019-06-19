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
                {
                    (this.state.item.imageUrl && this.state.isCart==false)?
                    (<img src={ this.state.item.imageUrl[0] }/>) :
                    ("")
                }
                
                <h1><a href={`/items/${this.state.item.style_partno_unbxd}`}>{this.state.item.product_short_description}</a></h1>
                <p>Price: ${this.state.item.min_list_price}</p>
                
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