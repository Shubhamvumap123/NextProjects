import { Fragment } from "react"
import Blogform from "../Component/Blogform/Blogform"
const addblog = () => {
//send requesr to the backene to add a new blog
const addBloghandler = async (data)=>{
 try {
   const response = await fetch("api/new-blogs",{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data),
   });
   const responsedata = await response.json()
   return responsedata
  
 } catch (error) {
  console.log(error)
 }
}   
  return (
    <Fragment>
    <div>addblog</div>
    <Blogform addBloghandler={addBloghandler}/>
    </Fragment>
  )

}


export default addblog