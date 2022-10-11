import {useRef} from 'react'

const Blogform = (props) => {
const {addBloghandler} = props
const titleRef = useRef()
const imgRef = useRef()
const descreptionRef = useRef()
const detailsRef = useRef()

//const [titleRef,imgRef,descreptionRef,detailsRef]= Array(4).fill(useRef())

const formSubmithandler= async(e)=>{

    e.preventDefault()
    const formdata ={
      title: titleRef.current.value,
      img: imgRef.current.value,
      details: detailsRef.current.value,
      descreption: descreptionRef.current.value
    }
   
    console.log(formdata);
   const data = await addBloghandler(formdata) ;
  }

  // const {title,image,description,details,slug} = props;
  return (
    <form className="max-w-lg w-full mx-auto" onSubmit={formSubmithandler}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2">
          Title
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 focus:outline-none focus:bg-white"
          type="text"
          placeholder="title"
          ref={titleRef}
        ></input>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2">
          Image
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 focus:outline-none focus:bg-white"
          type="text"
          placeholder="Image"
          ref={imgRef}
        ></input>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2">
          description
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 focus:outline-none focus:bg-white"
          type="text"
          placeholder="descreption"
          ref={descreptionRef}
        ></input>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2">
          Details
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 focus:outline-none focus:bg-white"
          type="text"
          placeholder="title"
          ref={detailsRef}
        ></input>
      </div>
      <button type='submit' className="px-4 py-2 my-1 rounded-lg font-semibold text-red-700 bg-transparent border border-red-400 hover:bg-red-500 hover:text-white  hover:border-transparent">
       Submit
      </button>
    </form>
  
  )
}
export default Blogform