import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {

    const requestheaders=new Headers(request.headers)
    console.log(requestheaders.get("Authorization"))
    return Response.json("Profile api data");
}

