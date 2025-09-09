import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function Meal() {
    const {id} = useParams();
    const [data,setData] = useState();
          const getData = async () =>{
            try {
              const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php',
                {
                    params:{i:id}
                });
              setData(response.data);
            } catch (err) {
              console.log(err);
            }
          }
        
          useEffect(()=>{
            getData();
          },[]);

        //   console.log(data)

  return (
    <div className="p-5 px-14 max-md:px-5 ">
      {data && data.meals.map((meal)=>{
        const youtubeKey = meal.strYoutube.split('-')[1];
        console.log(youtubeKey)
        return <div key={meal.idMeal} className="space-y-5" > 
        <h1>{meal.strMeal}</h1>
      
      <div className="flex gap-5 text-gray-700">
          <p>Area: {meal.strArea}</p>
        <p>Category: {meal.strCategory}</p>
      </div>

        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1" >
            <img className="h-[400px] rounded-xl w-full object-cover" src={meal.strMealThumb} alt="" />

            <iframe className="h-[400px] w-full"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        </div>

        <div className="flex gap-5">
            <div>
            <h1 className="mb-2">Ingredients</h1>
            {Object.keys(meal).map((mealKey)=>{
            if(mealKey.includes('strIngredient')){
            return <p key={mealKey}>{meal[mealKey]}</p>
                }
            })}
            </div>



             <div>
            <h1 className="mb-2">Measures</h1>
            {Object.keys(meal).map((mealKey)=>{
            if(mealKey.includes('strMeasure')){
            return <p key={mealKey}>{meal[mealKey]}</p>
                }
            })}
            </div>
         
        </div>

        <p>{meal.strInstructions}</p>
        
        <h1>Source: <a className="text-purple-600 text-lg" href={meal.strSource} target="_blank"> &nbsp; Visit the source</a></h1>

        </div>
      })}
    </div>
  )
}
