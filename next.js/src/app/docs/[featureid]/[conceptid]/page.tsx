export default function conceptdetails({ params }:{params:{conceptid:string,featureid:string}}){

    return <h1>showing concept  {params.conceptid} of {params.featureid}</h1>

}