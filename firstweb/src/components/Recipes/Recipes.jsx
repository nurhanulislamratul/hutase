import PropTypes from 'prop-types';
import Recipe from '../Recipe/Recipe';

const Recipes = ({recipes}) => {
    return (
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            {
                recipes.map((recipe, idx) => (
                    <Recipe key={idx} recipe={recipe} />
                ))
            }
        </div>
    );
};
Recipes.propTypes = {
    recipes: PropTypes.array
};
export default Recipes;