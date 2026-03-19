import css from "./navBar.module.css"
import Link from "next/link"

export default function navBar() {
    


    return (
        <>
         <Link href="/app"> Home </Link>
         <Link href="/Services">Services </Link>
         <Link href="/Booking"> Booking </Link>
        
        </>
    )
}