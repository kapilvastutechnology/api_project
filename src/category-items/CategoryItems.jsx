import axios from "axios";
import {Listbox, ListboxItem, Avatar} from "@heroui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

export default function CategoryItems() {
    const {name} =useParams();

      const [data,setData] = useState();
      const nav = useNavigate();
      const getData = async () =>{
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php',
            {
                params:{c:name}
            });
          setData(response.data);
        } catch (err) {
          console.log(err);
        }
      }
    
      useEffect(()=>{
        getData();
      },[]);




      
  return (
    <div className="p-5 ">
      {data && 
      <Listbox
        classNames={{
            base: "max-w-lg",
        }}
        defaultSelectedKeys={["1"]}
        items={data.meals}
        label="Assigned to"
        variant="flat">
        {(item) => (
          <ListboxItem
          onClick={()=>nav(`/meal/${item.idMeal}`)}
          key={item.idMeal} textValue={item.name}>
            <div className="flex gap-2 items-center">
              <Avatar alt={item.strMeal} className="shrink-0" size="lg" src={item.strMealThumb} />
              <div className="flex flex-col">
                <span className="text-lg">{item.strMeal}</span>
              </div>
            </div>
          </ListboxItem>
        )}
      </Listbox>
    }
    </div>
  )
}
