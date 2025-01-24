import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


export const metadata = {
    title: "Login",
    description: "This is Login",
  };
export default async function login() {
   

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full text-center max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-xl mb-3 font-semibold">Please Sign In here</h1>
                <div className="flex justify-around text-black">
                    <LoginLink><button className="px-4 py-2 border-2">Sign in</button></LoginLink>
                    <RegisterLink><button className="px-4 py-2 border-2">Sign Up</button></RegisterLink>
                </div>

            </div>
        </div>
    );
}