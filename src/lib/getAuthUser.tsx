import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

export default async function getAuthUser() {
    const session = await getServerSession(authOptions);
    console.log('user session',session);
    
    return session; 
}