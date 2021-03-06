import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import AddDrink from './AddDrink';

function CocktailCard(props) {
  const { strDrink, strInstructions, strDrinkThumb } = props.cocktail;

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const newIngredient = props.cocktail[`strIngredient${i}`];
      if (newIngredient) {
        ingredients.push(newIngredient);
      } else {
        break;
      }
    }
    return ingredients;
  }

  const favoriteButton = props.cName === 'big-cocktail-card' ? <AddDrink drink={props.cocktail} /> : null;

  return (
    <Card className='mb-3 {props.cName}'>
      <Card.Header as='h5'>{strDrink}</Card.Header>
      <Card.Body>
        <ul>
          {getIngredients().map((ingredient, index) => {
            if (props.cocktail[`strMeasure${index+1}`]) {
              return <li key={`ingredient${index}`}>{ingredient}, {props.cocktail[`strMeasure${index+1}`]}</li>
            } else {
              return <li key={`ingredient${index}`}>{ingredient}</li>
            }
          })}
        </ul>
        <Card.Img src={strDrinkThumb} />
      </Card.Body>
      <Card.Footer>
        <Card.Text>{strInstructions}</Card.Text>
        {favoriteButton}
      </Card.Footer>
    </Card>
  )
}

CocktailCard.propTypes = {
  cocktail: PropTypes.object,
  cName: PropTypes.string
}

export default CocktailCard;