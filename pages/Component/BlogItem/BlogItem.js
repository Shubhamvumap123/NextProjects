import {useRouter} from "next/router"


const BlogItem = ( props) => {
    console.log(props)
    const {title,img,descreption,details,slug} = props;
    const router= useRouter()
    const Navigate = () =>{
        router.push(`/${slug}`)
        
    }
  return (
    <div className="max-w-sm mx-auto overflow-hidden rouder shadow-lg">
        <img className="w-full h-60" src={img} alt={title}/>
        <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">
                   {title}
            </div>
            <p className="text-base text-gray-700">
                {descreption}
            </p>
          {details && <p className="text-base text-gray-700">
                {details}
            </p>}
        </div>
      {!details && (

<div className="text-center">
<button onClick={Navigate} className="px-4 py-2 my-1 font-semibold text-blue-700 bg-transparent border border-blue-400 hover:bg-blue-500 hover:text-white  hover:border-transparent">
     read more.....
</button>
        </div>
      )}
    </div>
  )
}

export default BlogItem