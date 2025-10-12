
import { Button, Form, Input, Textarea } from "@heroui/react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useCreatePostMutation } from "./postApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const valSchema = Yup.object({
  title: Yup.string().required(),
  detail: Yup.string().required(),
  author: Yup.string().required(),
  image: Yup.string().url().required()
})

export default function AddPost() {
  const nav = useNavigate();
  const [addPost, { isLoading }] = useCreatePostMutation();
  return (
    <div className="p-5">

      <Formik
        initialValues={{
          title: '',
          detail: '',
          author: '',
          image: ''
        }}

        onSubmit={async (val) => {
          try {
            await addPost(val).unwrap();
            toast.success('Post Added Successfully');
            nav(-1);
          } catch (err) {
            toast.error(err.data)
          }
        }}

        validationSchema={valSchema}


      >

        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            onSubmit={handleSubmit}
            className="max-w-[400px]  space-y-5"
          >
            <div className="w-full">
              <Input
                className="w-full"
                onChange={handleChange}
                value={values.title}
                label="Title"
                labelPlacement="outside"
                name="title"
                placeholder="Enter Title"
                type="text"
              />
              {touched.title && errors.title && <p className="text-red-500">{errors.title}</p>}
            </div>

            <div className="w-full">
              <Textarea
                className="w-full"
                onChange={handleChange}
                value={values.detail}
                label="Detail"
                labelPlacement="outside"
                name="detail"
                placeholder="Enter Detail"
                type="text"
              />
              {touched.detail && errors.detail && <p className="text-red-500">{errors.detail}</p>}
            </div>

            <div className="w-full">
              <Input
                className="w-full"
                onChange={handleChange}
                value={values.author}
                label="Author"
                labelPlacement="outside"
                name="author"
                placeholder="Enter Author"

                type="text"
              />
              {touched.author && errors.author && <p className="text-red-500">{errors.author}</p>}
            </div>

            <div className="w-full">
              <Input
                className="w-full"
                onChange={handleChange}
                value={values.image}
                label="Image"
                labelPlacement="outside"
                name="image"
                placeholder="Enter Image"
                type="text"

              />
              {touched.image && errors.image && <p className="text-red-500">{errors.image}</p>}
            </div>



            <Button
              isLoading={isLoading}
              type="submit" color="primary">Submit</Button>

          </Form>
        )}

      </Formik>

    </div>
  )
}





// import { Button, Form, Input, Textarea } from "@heroui/react";
// import { Formik } from "formik";
// import * as Yup from 'yup';
// import { useCreatePostMutation } from "./postApi";
// import { toast } from 'react';
// const valSchema = Yup.object({
//   title: Yup.string().required(),
//   detail: Yup.string().required(),
//   author: Yup.string().required(),
//   image: Yup.string().url().required()
// })

// export default function AddPost() {
//   const [addPost, {isLoading}] = useCreatePostMutation();
//   return (
//     <div className="p-5">

//       <Formik
//         initialValues={{
//           title: '',
//           detail: '',
//           author: '',
//           image: ''
//         }}

//         onSubmit={async(val) => {
//           try{
//             await addPost(val).unwrap();
//             toast.success('Post Added Successfully')
//           }catch(err){
//             toast.error(err.data)
//           }
//         }}

//         validationSchema={valSchema}


//       >

//         {({ handleSubmit, handleChange, values, touched, errors }) => (
//           <Form
//             onSubmit={handleSubmit}
//             className="max-w-[400px]  space-y-5"
//           >
//             <div className="w-full">
//               <Input
//                 className="w-full"
//                 onChange={handleChange}
//                 value={values.title}
//                 label="Title"
//                 labelPlacement="outside"
//                 name="title"
//                 placeholder="Enter Title"
//                 type="text"
//               />
//               {touched.title && errors.title && <p className="text-red-500">{errors.title}</p>}
//             </div>

//             <div className="w-full">
//               <Textarea
//                 className="w-full"
//                 onChange={handleChange}
//                 value={values.detail}
//                 label="Detail"
//                 labelPlacement="outside"
//                 name="detail"
//                 placeholder="Enter Detail"
//                 type="text"
//               />
//               {touched.detail && errors.detail && <p className="text-red-500">{errors.detail}</p>}
//             </div>

//             <div className="w-full">
//               <Input
//                 className="w-full"
//                 onChange={handleChange}
//                 value={values.author}
//                 label="Author"
//                 labelPlacement="outside"
//                 name="author"
//                 placeholder="Enter Author"

//                 type="text"
//               />
//               {touched.author && errors.author && <p className="text-red-500">{errors.author}</p>}
//             </div>

//             <div className="w-full">
//               <Input
//                 className="w-full"
//                 onChange={handleChange}
//                 value={values.image}
//                 label="Image"
//                 labelPlacement="outside"
//                 name="image"
//                 placeholder="Enter Image"
//                 type="text"

//               />
//               {touched.image && errors.image && <p className="text-red-500">{errors.image}</p>}
//             </div>



//             <Button 
//             isLoading={isLoading}
//             type="submit" color="primary">Submit</Button>

//           </Form>
//         )}

//       </Formik>

//     </div>
//   )
// }







// import { Formik } from "formik";
// import {Button, Form, Input} from "@heroui/react";
// import * as Yup from "yup";

// const valSchema = Yup.object({
//   title: Yup.string().required(),
//   detail:Yup.string().required(),
//   author: Yup.string().required(),
//   image:Yup.string().url().required()
// })
// export default function AddPost() {

//   return (
//     <div className="p-5">
//       <Formik
//         initialValues={{
//           title:'',
//           detail: '',
//           author: '',
//           image: ''
//         }}

//          onSubmit={(val)=>{
//           console.log(val);
//         }}
//         validationSchema={valSchema}


//       >

//         {({handleSubmit, handleChange, values, touched, errors}) => (
//           <Form
//             onSubmit={handleSubmit}
//             className="max-w-[500px] space-y-5 "
//           >

//             <div  className="w-full">
//               <Input
//               className="w-full"
//               validationBehavior="onChange"
//               onChange={handleChange}
//               value={values.title}
//               label="Title"
//               labelPlacement="outside"
//               name="title"
//               placeholder="Enter Title"
//               type="text"
//             />
//             {touched.title && errors.title && <p className="text-red-500">{errors.title}</p>}
//             </div>


//           <div  className="w-full">
//               <Input
//               className="w-full"
//               validationBehavior="onChange"
//               onChange={handleChange}
//               value={values.detail}
//               label="Detail"
//               labelPlacement="outside"
//               name="detail"
//               placeholder="Enter Detail"
//               type="text"
//             />
//             {touched.detail && errors.detail && <p 
//             className="text-red-500">{errors.detail}</p>}
//             </div>

//           <div  className="w-full">
//               <Input
//               className="w-full"
//               validationBehavior="onChange"
//               onChange={handleChange}
//               value={values.author}
//               label="Author"
//               labelPlacement="outside"
//               name="author"
//               placeholder="Enter Author"
//               type="text"
//             />
//             {touched.author && errors.author && <p 
//             className="text-red-500">{errors.author}</p>}
//             </div>


//             <div  className="w-full">
//               <Input
//               className="w-full"
//               validationBehavior="onChange"
//               onChange={handleChange}
//               value={values.image}
//               label="Image"
//               labelPlacement="outside"
//               name="image"
//               placeholder="Enter Image"
//               type="text"
//             />
//             {touched.image && errors.image && <p
//              className="text-red-500">{errors.image}</p>}
//             </div>
            

//             <Button color="primary" type="submit" >Submit</Button>
//           </Form>
//         )}
//       </Formik>
      
//     </div>
//   )
// }



