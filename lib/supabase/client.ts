import { auth } from "@clerk/nextjs/server";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  // console.log("Supabase ANON KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      accessToken: async () => {
        const token = await (await auth()).getToken({ template: "supabase" });
        console.log("Supabase access token:", token);
        return token;
      },
    }
  );
}
