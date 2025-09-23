
import {Form, Input, Button, SelectItem, Select, Textarea} from "@heroui/react";
import {Checkbox} from "@heroui/react";
import {RadioGroup, Radio} from "@heroui/react";
import { Formik } from "formik";
 import * as Yup from 'yup';

const countries = [
  {key: "nepal", label: "Nepal"},
  {key: "india", label: "India"},
  {key: "china", label: "Change"}];

  const valSchema =  Yup.object({
    username:Yup.string().min(5).max(20).required(),
    email:Yup.string().email().required(),
    habits:Yup.array().min(1).required(),
    gender:Yup.string().required(),
    country:Yup.string().required(),
    description:Yup.string().required()


  })

export default function UserAdd() {
  return (
    <div className="p-5 m-3">
        <Formik
        
        initialValues={{
            username:'',
            email:'',
            habits:[],
            gender:'',
            country:'',
            description:''
        }}

        onSubmit={(val,{resetForm})=>{
            console.log(val);
            // resetForm();
        }}
        validationSchema={valSchema}

        >
            {({handleChange,handleSubmit,values,errors,touched})=>(
    <Form
    onSubmit={handleSubmit}
      className="w-full max-w-xs flex flex-col gap-4">
      <Input
      onChange={handleChange}
        label="User
        name"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
        value={values.username}  
      />
      {errors.username && <p className="text-red-500">{errors.username}</p>}

      <Input
        onChange={handleChange}
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
        value={values.email}
        />
        

    <div>
        <h1 className="text-lg space-y-3">Select your habits</h1>
    <div className="flex gap-4">
      <Checkbox 
      onChange={handleChange}
      value={'dance'} name="habits" >Dance</Checkbox>
      <Checkbox
      onChange={handleChange}
      value={'sing'} name="habits">Sing</Checkbox>
    </div>
    </div>

    <div>
    <RadioGroup onChange={handleChange} label="Select your Gender">
      <Radio name="gender" value="male">Male</Radio>
      <Radio name="gender" value="female">Female</Radio>
      <Radio name="gender" value="other">Other</Radio>
    </RadioGroup>
    </div>
      
       <Select 
       name="country"
       onChange={handleChange}
       className="max-w-xs"
        label="Country"
         placeholder="Select your country">
        {countries.map((country) => (
          <SelectItem
           key={country.key}>{country.label}</SelectItem>
           
        ))}
      </Select>


      <Textarea
      onChange={handleChange}
      name="description"
      className="max-w-xs" label="Description" placeholder="Enter your description"
      value={values.description} />
      
        <Button color="primary" type="submit">
          Submit
        </Button>

    </Form>
)}
</Formik>
    </div>
  )
}
