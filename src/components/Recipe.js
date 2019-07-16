import React from 'react';

const API_KEY="6c01ee7b9183861270708b6966293bf4";

class Recipe extends React.Component{
    state ={
        activeRecipe: []
    }
    componentDidMount = async() => {
        const title = this.props.location.state.recipe;
        const req= await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
        const res = await req.json();
        this.setState({activeRecipe : res.recipes[0] });
        console.log(this.state.activeRecipe);
    }
    render(){
        console.log(this.props);
        return(
            <div>Recipe Compnent!</div>
        );
    }
}

export default Recipe;