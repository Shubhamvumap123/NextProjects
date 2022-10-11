import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <ul className='flex justify-around px-4 py-2 bg-gray-300'>
        <li className='px-4 py-2 rounded-full font-bold text-white bg-blue-500 hover:bg-blue-700'>
<Link href='/'>Home</Link>
        </li>
        <li className='px-4 py-2 rounded-full font-bold text-white bg-blue-500 hover:bg-blue-700'>
<Link href='/Add-blog'>Add-Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation