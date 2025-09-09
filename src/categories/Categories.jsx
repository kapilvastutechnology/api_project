import axios from "axios";
import { useEffect, useState } from "react";
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import { useNavigate } from "react-router";
export default function Categories() {
  const [data,setData] = useState();
  const [load, setLoading] = useState(false);
  const [err, setErr] = useState();
  const nav = useNavigate();
  const getData = async () =>{
    setLoading(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErr(err.response.data);
    }
  }

  useEffect(()=>{
    getData();
  },[]);
  
  if(load){
    return <div>Loading............</div>
  }

  if(err){
    return <div dangerouslySetInnerHTML={{__html: err}} ></div>
  }

  return (
    <div className="px-5 py-3 grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
      {data && data.categories.map((cata)=>{
    return  <Card 
    isPressable
    onPress={()=> nav(`/category-items/${cata.strCategory}`)}

    className="py-4 cursor-pointer " key={cata.idCategory}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">{cata.strCategory}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={cata.strCategoryThumb}
          width={270}
        />
      </CardBody>
    </Card>
      })}
    </div>
  )
}
