"use server";

import { redirect } from "next/navigation";

export async function navigateSource(path: string){
    redirect(path);
}