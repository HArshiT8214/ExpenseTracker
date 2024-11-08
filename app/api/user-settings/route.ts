import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { json } from "stream/consumers";

export async function GET(request:Request){
    const user = await currentUser();

    if(!user){
        redirect("/sign-in");
    }

    let userSettings = await prisma.useretting.findUnique({
        where:{
            userId:user.id,

        },
    });
    if (!userSettings) {
        userSettings = await prisma.useretting.create({
            data:{
                userId:user.id,
                currency:"USD",
            },
        });
    }

    revalidatePath("/");
    return  Response.json(userSettings);
    
}