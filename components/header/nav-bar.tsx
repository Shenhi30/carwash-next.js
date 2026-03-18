import css from "./navBar.module.css"
import Link from "next/link"

export default function navBar() {
    


    return (
        <>
         <Link href="../../app"> Home </Link>
         <Link href="../../app/Services">Services </Link>
         <Link href="../../app/Booking"> Booking </Link>
        
        </>
    )
}