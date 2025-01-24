import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard",
  description: "This is Dashboard",
};
export default async function dashboard() {
const {getUser} = getKindeServerSession();
const user = await getUser();
if(!user){
  return redirect('/login')
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome, {user?.given_name} </h1>

      </div>
    </div>
  );
}