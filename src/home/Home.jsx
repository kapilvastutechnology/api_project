import { useGetCocktailsQuery } from "../features/cocktailApi/CocktailApi"


export default function Home(){
    const { data, error, isLoading } = useGetCocktailsQuery();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {error.data}</div>;
    console.log(data);
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
        {data && data.drinks.map((drink) => {
            return (
                <div key={drink.idDrink} >
                    <h1 className="space-x-4">{drink.strDrink}</h1>
                    <img src={drink.strDrinkThumb} 
                    alt={drink.strDrink}
                    className="w-full h-48 object-cover mb-4 rounded" />    
                </div>
            )
        })}
    </div>
  )
}

