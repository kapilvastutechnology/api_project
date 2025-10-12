import CardSkeleton from "../components/CardSkeleton";
import { useGetPostsQuery } from "../features/posts/postApi"
import {Card, CardHeader, CardBody, Image, Button, CardFooter} from "@heroui/react";
import RemovePost from "../features/posts/RemovePost";
export default function Home() {
  const {isLoading, error, data} = useGetPostsQuery();
  if(isLoading) return <div className="p-5 grid grid-cols-4 gap-5">
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
  </div>
  if(error) return <h1>{error.data}</h1>
  return (
    <div className="p-5 grid grid-cols-4 gap-5" >
      {data.map((post)=>{
        return  <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div>
        <p className="text-tiny uppercase font-bold">{post.title}</p>
        <small className="text-default-500">{post.data}</small>
        </div>
        <h4 className="font-bold text-large">{post.author}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={post.image}
          width={270}
        />
      </CardBody>
      <CardFooter>
        <div className="flex gap-4 items-center" >
          <Button isIconOnly aria-label="Take a photo"
          color="warning" variant="faded" >
            <i class="fa-solid fa-pen-to-square"></i>
          </Button>

           <RemovePost id={post.id} />
        </div>
      </CardFooter>
    </Card>
      })}
    </div>
  )
}







// import { useGetUsersQuery } from "../features/users/usersApi"

// export default function Home() {
//   const {isLoading, data, error} = useGetUsersQuery();

//   if(isLoading) return <div>Loading...</div>
//   if(error) return <div>{error.data}</div>
//   console.log(data);
//   return (
    
//     <div className="grid grid-cols-4 gap-4 p-4">
//       {data && data.users.map((user) => {
//         return (
//           <div key={user.id} >
//             <h2>{user.name}</h2>
//             <p>{user.email}</p>
//             <p>{user.age}</p> 
            
//             <div className="mb-4 ">
//               <img  src={user.image} 
//               alt={user.name}
//               className="w-20 h-20  object-cover mb-4 rounded-full" />
//             </div>    
//           </div>
//         )
//       })}

//     </div>
      

//   )
// }



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
//     if (error) return <div> {error.data}</div>;
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








