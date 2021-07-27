import React from 'react';
import Classes from './Burger.module.css';
import BurgerIngrediens from './BurgerIngredients/BurgerIngredients';

const Burger = (props)=>{
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey=>{
        return [...Array(props.ingredients[ingKey])].map((_,i)=>{
            return <BurgerIngrediens key={ingKey+i} type={ingKey}/>
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    
    if(transformedIngredients.length === 0){
        transformedIngredients  = <p>Please start adding ingredients..</p>
    }
    return(
        <div className={Classes.Burger}>
            <BurgerIngrediens type='bread-top'/>        
                {transformedIngredients}
            <BurgerIngrediens type='bread-bottom'/>
        </div>
    )
}

export default Burger;