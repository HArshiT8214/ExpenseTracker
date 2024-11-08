import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function GET(request:Request){
    const user = await currentUser();
    if(!user){
        redirect("/sign-in");
    }

    const { searchParams} =new URL(request.url);
    const paramType = searchParams.get("type");

    const validator = z.enum(["expense","income"]).nullable();

    const quertParams = validator.safeParse(paramType);
    if(!quertParams.success){
        return Response.json(quertParams.error,{
            status:400,
        });
    }

    const type = quertParams.data;
    const categories = await prisma.category.findMany({
        where:{
            userId:user.id,
            ...(type && {type}),
        },
        orderBy:{
            name:"asc",
        },
    });
    return Response.json(categories);
}