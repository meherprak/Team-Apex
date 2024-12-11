
import { notFound } from "next/navigation"

function getrandomnumber(count:number){
    return Math.floor(Math.random()*count);
}

export default async function reviewdetalis(props:{params : Promise<{reviewid:string }>}) {
    const params = await props.params;
    const randomnum:number=getrandomnumber(2);
    if(randomnum==1)
        throw new Error("error loading route");

    if(parseInt(params.reviewid)>1000)
        notFound();

    return <h1>review of {params.reviewid} is good </h1>
}

