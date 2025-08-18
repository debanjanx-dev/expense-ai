// "use client"
// import { useSession } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      async accessToken(){
        return (await auth()).getToken({template : "supabase"})
      }
    }
  );
}
