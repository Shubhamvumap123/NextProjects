
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import "tailwindcss/tailwind.css";
import Blogitem from "./Component/BlogItem/BlogItem";

// const BLOG_POST = [
//   {
//     id: 1,
//     slug:'first-blog',
//     title: "First Blog",
//     image:
//       "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80",
//     description: "This is my first blog really excited ",
//     details: "How it all began....",
//   },
//   {
//     id: 1,
//     slug:'second-blog',
//     title: "Second Blog",
//     image:
//       "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80",
//     description: "This is my Second blog really excited ",
//     details: "How began....",
//   },
// ];

const Homepage = (props) => {
  console.log(props)
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Inter:wght@400;500;800&family=Montserrat:ital,wght@0,300;1,400&family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <h1 className="bg-green-500">blog pages</h1>
      {props.blogPosts.map((blog) => (
        <div   key={blog.id}>
        <Blogitem
          title={blog.title}
          img={blog.img}
          descreption={blog.descreption}
          details={blog.details}
          slug={blog.slug}
        />
        </div>
      ))}
    </Fragment>
  );
};

export async function getStaticProps(context){
  const {req,res} = context
    //send request to a backened api
  //Read the fs...
  //Securely connect to a database
const client = await MongoClient.connect('mongodb+srv://shubhamvumap:0aEAakMVk9TZVxik@cluster0.avdoufs.mongodb.net/?retryWrites=true&w=majority')

const blogPostsCollection = client.db().collection('posts')

const blogPosts = await blogPostsCollection.find().toArray()
// const blogPosts = JSON.parse(blogPost)
// console.log("res",res)
client.close()

// console.log("blogPosts json", JSON.parse(JSON.stringify(blogPosts)))

return {
  props:{
    // blogPosts:JSON.parse(JSON.stringify(blogPosts))
    blogPosts: blogPosts.map(blog =>{
   return {
    title: blog.title,
    descreption: blog.descreption,
    img: blog.img,
    slug:blog.slug
   }
        
  }),
  },
  revalidate:3600,
}
}
// export async function getStaticProps(){
//   //send request to a backened api
//   //Read the fs...
//   //Securely connect to a database
//   // console.log(blogPosts)
//   return {
//     props:{
//       blogPosts:BLOG_POST,
//     },
//     revalidate:60,  //Ecery hour 10,
//   }
// }

export default Homepage;

