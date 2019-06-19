import React, {Component} from 'react'
import Catalog from './Catalog'
import Cart from './Cart'
import Checkout from './Checkout'

class Shop extends Component{
    constructor(){
        super();
        this.state={
            items:[],
            cartItems:[],
            orderTotal:0
        }
    }

    addToCart=(item)=>{
        
        var isItemExist=this.state.cartItems.some((cartItem)=>{
            return cartItem.id==item.id;
        })

        if(isItemExist==false){
            item.qty=1
            this.setState({
                cartItems:[
                    ...this.state.cartItems,
                    item
                ]
            },()=>{
                var orderTotal=this.state.cartItems.reduce((total,cartItem)=>{
                    return total + cartItem.price * cartItem.qty;
                },0);
    
                this.setState({
                    orderTotal:orderTotal
                })
            })

        }
        else
        {
            var currentItem=this.state.cartItems.find((cartItem)=>{
                return cartItem.id==item.id;
            })

            currentItem.qty++;

            this.setState({
                cartItems:[
                    ...this.state.cartItems.filter((cartItem)=>{
                        return cartItem.id!=currentItem.id
                    }),
                    currentItem
                ]
            },()=>{
                var orderTotal=this.state.cartItems.reduce((total,cartItem)=>{
                    return total + cartItem.price * cartItem.qty;
                },0);
    
                this.setState({
                    orderTotal:orderTotal
                })
            })
            
        }

        

    }

    removeFromCart=(item)=>{
        console.log(item)

        this.setState({
            cartItems:this.state.cartItems.filter((cartItem)=>{
                return cartItem.id!=item.id
            })
        },()=>{
            var orderTotal=this.state.cartItems.reduce((total,cartItem)=>{
                return total + cartItem.price * cartItem.qty;
            },0);

            this.setState({
                orderTotal:orderTotal
            })
        })

    }

    render(){
        console.log('rendering shop')
        return(
            <div className="row">
                <h1>Shop</h1>
                <div className="column">
                    <Catalog items={this.state.items} addToCart={this.addToCart}/>
                </div>
                <div className="column">
                    <Cart items={this.state.cartItems} removeFromCart={this.removeFromCart}/>
                    <Checkout orderTotal={this.state.orderTotal}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var url='http://api.jsoneditoronline.org/v1/docs/572180836c614dadb4b2eccdc3a33cbc/data?jsonp';
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(JSON.stringify(data))
            this.setState({
                items:data.response.products
            })
        })
    }
 
}

export default Shop;