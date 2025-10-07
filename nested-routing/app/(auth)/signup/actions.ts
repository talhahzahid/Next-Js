"use server";

import { createClient } from "@/utils/supabase/server";

export async function signUp(data: FormData) {
  console.log(data);
  const supabase = await createClient();
  const userData = {
    username: data.get("username") as string,
    email: data.get("email") as string,
    password: data.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(userData);
  if (error) {
    console.log(error);
  }
}
