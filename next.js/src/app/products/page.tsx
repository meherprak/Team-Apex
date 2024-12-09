import Link from "next/link"

export default function product()
{
    return (
        <>
        
            <ul>
                <Link href="products/1"><li>product 1</li></Link>
                <Link href="products/2"><li>product 2</li></Link>
                <Link href="products/3"><li>product 3</li></Link>
            </ul>
            <Link href="/">Home</Link>
        
        
        
        </>
    )
}