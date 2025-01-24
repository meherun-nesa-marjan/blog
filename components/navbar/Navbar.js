import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();
    return (
        <nav className="flex justify-between my-5 items-center text-center">
            <div>
                <Link href="/">Blog</Link>
            </div>
            <div className="flex items-center text-center space-x-5">
                <div className="flex space-x-5">
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                    <Link href="/dashboard">
                        <p>Profile</p>
                    </Link>
                </div>

                <div>
                    {(await isAuthenticated()) ? (
                        <LogoutLink>
                            <button className="px-4 py-2 border-2">Sign Out</button>
                        </LogoutLink>

                    ) : (
                        <div className="flex space-x-5">
                            <LoginLink><button className="px-4 py-2 border-2">Sign in</button></LoginLink>
                            <RegisterLink><button className="px-4 py-2 border-2">Sign Up</button></RegisterLink>
                        </div>
                    )}

                </div>
            </div>
        </nav>
    );
}

