
import {Form, Input, Button, Select, SelectItem, Textarea} from "@heroui/react";
import {RadioGroup, Radio} from "@heroui/react";
import { nanoid } from 'nanoid';
import {Checkbox} from "@heroui/react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from 'yup'
import { setUser } from "./userSlice";
const countries = [
  {key: "nepal", label: "Nepal"},
  {key: "india", label: "India"},
  {key: "china", label: "China"}  
];

const valSchema = Yup.object({
  username: Yup.string().min(5).max(20).required(),
  email:Yup.string().email('Invalid email address').required('Required'),
  habits: Yup.array().min(1).required(),
  gender:Yup.string().required(),
  country:Yup.string().required(),
  description:Yup.string().required(),

})

export default function UserAdd() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div className="p-5" >
        <Formik 
        initialValues={{
            username:'',
            email:'',
            habits:[],
            gender:'',
            country:'',
            description:'',
        }}
        
        onSubmit={(val)=>{
          dispatch(setUser({
            ...val,
            id:nanoid()
          }));
          nav(-1);
            // console.log(val);
        }}


        validationSchema={valSchema}

        >
          {({handleChange,handleSubmit,values,errors,touched}) => (
<Form
    onSubmit={handleSubmit}
      className="w-full max-w-xs flex flex-col gap-4">
      <Input
      value={values.username}
      onChange={handleChange}
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
      />

      {errors.username && touched.username && 
       <p className="text-red-500" >{errors.username}</p>}

      <Input
      onChange={handleChange}
        label="Email"
        value={values.email}
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        
      />

      {errors.email && touched.email && 
      <p className="text-red-500">{errors.email}</p>}  

        <div className="space-y" >
        <h1 className="text-lg">Select your habits</h1>
        <div className="flex gap-4">
      <Checkbox
      onChange={handleChange}
      name="habits" value={'dance'} >Dance</Checkbox>
      <Checkbox
      onChange={handleChange}
      value={'sing'} name="habits" >Sing</Checkbox>
    </div>
    {errors.habits && touched.habits && 
      <p className="text-red-500">{errors.habits}</p>}
 </div>

      <RadioGroup onChange={handleChange}  name="gender"
      label="Select your Gender">
        <Radio value="male">Male</Radio>
        <Radio value="female">Female</Radio>
        <Radio value="other">Other</Radio>
      </RadioGroup>
      {errors.gender && touched.gender && 
      <p className="text-red-500">{errors.gender}</p>}

       <Select
       onChange={handleChange}
       name="country"
      className="max-w-xs"
     label="Country"
      placeholder="Select an Country"
    >
      {countries.map((country) => (
        <SelectItem key={country.key}>{country.label}</SelectItem>
      ))}
    </Select>
    {errors.country && touched.country && 
      <p className="text-red-500">{errors.country}</p>}


    <Textarea 
    onChange={handleChange}
    value={values.description}
    name="description"
    className="max-w-xs" 
    label="Description" placeholder="Enter your description" />
    {errors.description && touched.description && 
      <p className="text-red-500">{errors.description}</p>}
    
    <Button color="primary" type="submit">
      Submit
    </Button>

    </Form>
  )}
 
 </Formik>
      
    </div>
  )
}
