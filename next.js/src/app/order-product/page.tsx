"use client"

import { useRouter } from "next/navigation"

export default function orderproduct()
{
    const router =useRouter();
    const handleclick=()=>{
        console.log("oder placed succesfully");
        router.push("/");
    }
    return (
        <>

            <h1>order product</h1>
            <button onClick={handleclick}> order</button>
        </>
    )

}

