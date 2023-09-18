import { NextResponse } from "next/server"
import { webData } from "./data"

export async function GET(){
    const data = webData
    
    return NextResponse.json(data,{status:200})
}