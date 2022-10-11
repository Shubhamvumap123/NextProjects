import {useRouter} from 'next/router'
import { MongoClient } from 'mongodb'
import { Fragment } from 'react'
import BlogItem from '../Component/BlogItem/BlogItem'
const BlogDetails = (props ) => {
const {blog:{title,img,descreption,details}} = props
  const router = useRouter() 
 
    // const blogID = router.query.slug
    // console.log("blogID",blogID)
  return (
    <Fragment>
      <h1>The Blog details Pages</h1>
      <div className='flex felx-col'>
      <BlogItem title={title} descreption={descreption} img={img} details={details}/>
      </div>
    </Fragment>
  )
}
export async function getStaticPaths(){
  
  const client = await MongoClient.connect('mongodb+srv://shubhamvumap:0aEAakMVk9TZVxik@cluster0.avdoufs.mongodb.net/?retryWrites=true&w=majority')
 const blogPostsCollection  = client.db().collection('posts')
 const blogPosts = await blogPostsCollection.find({},{slug:1}).toArray();//only return the SLUG
 client.close()
 console.log("blogPosts........................",blogPosts)
 return {
  paths:blogPosts.map(({slug}) =>({
  params: {slug},
})),
fallback: false,
 
 };
}

export async function getStaticProps(context){
  const blogID = context.params.slug ;
  console.log("context.params",context.params)
  // console.log('slug',slug)
  const client = await MongoClient.connect('mongodb+srv://shubhamvumap:0aEAakMVk9TZVxik@cluster0.avdoufs.mongodb.net/?retryWrites=true&w=majority')
  const blogPostsCollection  = client.db().collection('posts')
  const blogPost = await blogPostsCollection.findOne({slug:blogID})
  client.close()
  return ({
    props:{
      blog:{
        title: blogPost.title || null,
        descreption: blogPost.descreption || null,
        img: blogPost.img || null,
        details:blogPost.details || null
      }
    }
  })

}
export default BlogDetails
