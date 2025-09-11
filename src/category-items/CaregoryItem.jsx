import { useState } from "react";

export default function CaregoryItem() {
    const [set, setData] = useState();
    const getData = async() =>{
        const response = await axios.get('');
        try {
            console.log(response);

        } catch (error) {
            console.log(error);
            
        }
    }

    getData();
    console.log(data)

    
    


  return (
    <div>
      
    </div>
  )
}
