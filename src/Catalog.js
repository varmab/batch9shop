import React, {PureComponent} from 'react'
import Item from './Item'

class Catalog extends PureComponent{
    constructor(props){
        super(props);

        this.state={
            items:props.items
        }
    }

    addToCart=(item)=>{
        console.log(item)
        this.props.addToCart(item);
    }

    componentWillReceiveProps(newProps){
        this.setState({
            items:newProps.items
        })
    }


    render(){
        console.log('rendering catalog')
        return(
            <React.Fragment>
                <h1>Catalog</h1>
                {
                    this.state.items.map((item)=>{
                        return <Item key={item.id} item={item} isCart={false} addToCart={this.addToCart}/>
                    })
                }
            </React.Fragment>
        )
    }
 
}

export default Catalog;