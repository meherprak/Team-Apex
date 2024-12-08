import { notFound } from "next/navigation"


export default function reviewdetalis({params}:{params : {reviewid:string }})
{
    if(parseInt(params.reviewid)>1000)
        notFound();
    
    return <h1>review of {params.reviewid} is good </h1>
}

