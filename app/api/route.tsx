import axiosInstance from "@/lib/axios-instance"; 
import { NextRequest, NextResponse } from "next/server";

export async function POST(params:NextRequest) {
    try { 
        const {
            userId,
            cifNo,
            trxType,
            dayAgo,
            frmDate,
            toDate,
          } = await params.json();
        const response = await axiosInstance.get("/cbs-data");
        return new NextResponse(JSON.stringify(response.data),{status:200});
    } catch (error) {
        console.error("[FETCH ERROR]", error)
        return new NextResponse("Error",{status:500});
    }
}