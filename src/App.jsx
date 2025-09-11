import axios from "axios";
import { useEffect, useState } from "react";
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import { useNavigate } from "react-router";
export default function App() {
    const [set, setData] = useState();
    // const nav = useNavigate();
    const getData = async() =>{
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
          setData(response.data);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
      getData();
    },[]);

    console.log(set)


  return (
    <div className="grid grid-cols-4 gap-5">
      {set && set.categories.map((cata)=>{
        return  <Card className="py-4 \
        " 
        isPressable

        key={cata.idCategory}
        >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{cata.strCategory}</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={cata.strCategoryThumb}
          width={270}
        />
        {/* <p>{cata.strCategoryDescription}</p> */}
      </CardBody>
    </Card>
      }) }
    </div>
  )
}
