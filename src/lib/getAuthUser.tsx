import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

async function getAuthUser() {
     const sessionUser = await getServerSession(authOptions);

     return {
        sessionUser
     }
}

