import Link from "next/link";

export default async function Productid(props:{params: Promise<{productid:number}>}) {
    const params = await props.params;
    return (
        <>
            <h1>Details of product {params.productid}</h1>

        </>

    );
}