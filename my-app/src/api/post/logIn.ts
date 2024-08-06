'use server';

import { redirect } from 'next/navigation'
import { headers } from "next/headers";
import { createClient } from '@/utils/supabase/server';

type Credentials = {
    email: string,
    password: string
};

export const logIn = async ({ email, password }: Credentials) => {
    const supabase = createClient();
    const origin = headers().get("origin");
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.log(error)
    }

    return redirect(origin + "/editor");
}