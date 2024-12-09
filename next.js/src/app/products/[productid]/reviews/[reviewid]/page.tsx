import { notFound } from "next/navigation"


export default async function reviewdetalis(props:{params : Promise<{reviewid:string }>}) {
    const params = await props.params;
    if(parseInt(params.reviewid)>1000)
        notFound();

    return <h1>review of {params.reviewid} is good </h1>
}

