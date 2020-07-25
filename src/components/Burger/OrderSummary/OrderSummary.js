import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class orderSummary extends Component {

    componentWillUpdate()
    {
        console.log('[OrderSUmmary] WIllUpdate');
    }

    render() {
        const ingredientSummary= Object.keys(this.props.ingredients)
        .map(igKey =>{
            return (
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>
                        {igKey}

                    </span>: {this.props.ingredients[igKey]}
                </li>
            );
        })
        return(
        <Auxiliary>
           <h3>Your Order</h3>
           <p>A delicious burger with following ingredients:</p>
           <ul>
            {ingredientSummary}
           </ul>
           <p><b>Total Price : {this.props.price.toFixed(2)}</b></p>
           <p>Continue to Checkout?</p>
           <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
           <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>

       </Auxiliary>
        );
    }
} 


export default orderSummary;