import { PuffLoader } from 'react-spinners';
import { useFetch } from "../Hooks/useFetch";

// display name image ingredients prepTimeMinutes instructions

const Recipe = () => {
  const { data:{recipes}, isLoading } = useFetch("https://dummyjson.com/recipes");

         if (isLoading) {
           return (
             <div className="flex items-center justify-center h-60">
               <PuffLoader color="#ff0000" />;
             </div>
           );
         }

  return (
    <div>
        <h1>Prepare Your Favorite Meal</h1>
        <section>
            {recipes.map((recipe) =>{
                const {
                  id,
                  name,
                  image,
                  ingredients,
                  instructions,
                  prepTimeMinutes,
                  mealType
                } = recipe;
                return (
                    <div key={id} className='my-3.5 p-5'>
                        <h1 className='font-bold text-2xl my-2'>Name:{name}</h1>
                        <img src={image} alt={name} />
                        <p>PREPARATION TIME : {prepTimeMinutes} minutes</p>
                        <div>
                            <h1>INGREDIENTS</h1>
                            <ol className='list-decimal'>
                                {ingredients.map((ing, i) => {
                                    return <li key={i}>{ing}</li>
                                })}
                            </ol>
                        </div>
                        <div>
                            <h1>INSTRUCTIONS</h1>
                            <ol className='list-decimal'>
                                {instructions.map((ing, i) => {
                                    return <li key={i}>{ing}</li>
                                })}
                            </ol>
                        </div>
                        <p>MealType : {mealType}</p>
                    </div>)
            })}
        </section>
    </div>
  )
}

export default Recipe;