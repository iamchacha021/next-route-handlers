import { NextResponse } from "next/server";



export async function Get(request: Request) {
    const { searchParams } = new URL(request.url)
    // static search params
    // const name = searchParams.get('name')
    // const instrument = searchParams.get('instrument')
    // // static json response
    // return NextResponse.json({name, instrument})

    // dynamic search params
    const obj = Object.fromEntries(searchParams.entries())
    // dynamic json response
    return NextResponse.json(obj)
}
