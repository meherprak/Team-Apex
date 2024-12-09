import { link } from "fs"
import Link from "next/link"

export default function Home()
{
    return (
    <>
        <h1>Home Pages</h1>
        <Link href="/blog">blog </Link>
        <Link href="/products">Product</Link>
    
    </>
);
}

