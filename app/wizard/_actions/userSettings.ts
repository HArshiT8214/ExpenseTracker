"use server";

import prisma from "@/lib/prisma";
import { UpdateUserCurrencySchema } from "@/schema/userSetting";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function UpdateUserCurrency(currency:String){
    const parseedBody = UpdateUserCurrencySchema.safeParse({
        currency,
    });

    if(!parseedBody.success){
        throw parseedBody.error;
    }

    const user = await currentUser();

    if(!user){
        redirect("/sign-in");
    }

    const userSettings =await prisma.useretting.update({
        where:{
            userId:user.id,
        },
        data:{
         currency,
        },
    });

    return userSettings;
    
}