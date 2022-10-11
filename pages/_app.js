import 'tailwindcss/tailwind.css'
import { Fragment } from 'react'
import Navigation from './Component/Navigation'

function MyApp({Component, pageProps}){
    return (
        <Fragment>
            <Navigation/>
            <Component {...pageProps}/>
        </Fragment>
    )
}
export default MyApp