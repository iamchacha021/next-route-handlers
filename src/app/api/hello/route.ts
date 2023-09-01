import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({"message": "Hello, It's Me"})
    // we use nextresponse.json() instead of res.json() to avoid errors
}