import React , {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICE = {
    salad:10,
    cheese :20,
    meat:50,
    bacon:10
}

class BurgerBuilder extends Component {


    state = {
        ingredients : {
            salad: 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice:90
    }


    addIngredientHandler= (type) => {

        const oldCount = this.state.ingredients[type];
        const updatedCount= oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type]= updatedCount;
        const priceAddition =INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice= oldPrice + priceAddition;

        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})

    }

    removeIngredientHandler = (type) =>{

        const oldCount = this.state.ingredients[type];

        if(oldCount<=0)
        {
            return;
        }
        const updatedCount= oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type]= updatedCount;
        const priceDeduction =INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice= oldPrice - priceDeduction;

        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})

    }

    render() {

        //----For Disableing Less Button when No Ingredients found in Burger

        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo)
        {
            disabledInfo[key]= disabledInfo[key]<=0
        }

        //---------------------------------------------

        
        return (
            <Auxiliary>
               <Burger ingredients = {this.state.ingredients}/>
                
                <BuildControls 
                ingredientAdded= {this.addIngredientHandler} 
                ingredientRemoved= {this.removeIngredientHandler}
                disabled={disabledInfo}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;