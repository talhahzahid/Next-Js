"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function login(data: FormData) {
  console.log(data);
  const supabase = await createClient();
  const userData = {
    email: data.get("email") as string,
    password: data.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(userData);
  if (error) {
    console.log(error);
  }

  redirect("/blog")
}
