import { useGetUsersQuery } from "../features/users/usersApi"

export default function Home() {
  const {isLoading, data, error} = useGetUsersQuery();

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>{error.data}</div>
  console.log(data);
  return (
    
    <div className="grid grid-cols-4 gap-4 p-4">
      {data && data.users.map((user) => {
        return (
          <div key={user.id} >
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.age}</p> 
            
            <div className="mb-4 ">
              <img  src={user.image} 
              alt={user.name}
              className="w-20 h-20  object-cover mb-4 rounded-full" />
            </div>    
          </div>
        )
      })}

    </div>
      

  )
}



// import { useGetCommentQuery } from "../features/comments/commentApi"
// export default function Home() {

//     const {isLoading, data, error} = useGetCommentQuery(1);

//     if(isLoading) return <div>Loading...</div>
//     if(error) return <div>{error.data}</div>
//     console.log(data);
//   return (
//     <div>
      
//     </div>
//   )
// }


// import { useGetCocktailsQuery } from "../features/cocktailApi/CocktailApi"

// export default function Home(){
//     const { data, error, isLoading } = useGetCocktailsQuery();
//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error occurred: {error.data}</div>;
//     console.log(data);
//   return (
//     <div className="grid grid-cols-4 gap-4 p-4">
//         {data && data.drinks.map((drink) => {
//             return (
//                 <div key={drink.idDrink} >
//                     <h1 className="space-x-4">{drink.strDrink}</h1>
//                     <img src={drink.strDrinkThumb} 
//                     alt={drink.strDrink}
//                     className="w-full h-48 object-cover mb-4 rounded" />    
//                 </div>
//             )
//         })}
//     </div>
//   )
// }






