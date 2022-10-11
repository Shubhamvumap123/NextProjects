//write backened note js code inside next js 
// /api/new-blog

import { MongoClient } from "mongodb";

async function handler (req,res){
    
    //req.method , req.body
if(req.method !== "POST") {
    
} ;
    const {img,title, descreption,details}= req.body
    const slug = title.toLowerCase()

    if(!img || !title || ! descreption || !details){
        return res.status(400).json({
            message:"Fields not valid."
        })
    }
   
   const client = await MongoClient.connect('mongodb+srv://shubhamvumap:0aEAakMVk9TZVxik@cluster0.avdoufs.mongodb.net/?retryWrites=true&w=majority')
     
   const db = client.db()
   const postcollection = db.collection("posts")
   const result = await postcollection.insertOne({img,title, descreption,details,slug})

   client.close()

   res.status(201).send({
    post:result,
    message:"Post creted"
   })

}
export default handler