import Link from "next/link"
export default function productlayout({children}:{children :React.ReactNode})
{
    return (
    <>
    {children}

        <h1>features products </h1>
        <Link href="/">Home</Link>
        
    </>

    )
}