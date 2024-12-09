export default async function conceptdetails(props:{params: Promise<{conceptid:string,featureid:string}>}) {
    const params = await props.params;

    return <h1>showing concept  {params.conceptid} of {params.featureid}</h1>
}