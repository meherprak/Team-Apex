export default async function featuresdetails(props:{params: Promise<{featureid:string}>}) {
    const params = await props.params;

    return <h1>showing feature {params.featureid}</h1>
}