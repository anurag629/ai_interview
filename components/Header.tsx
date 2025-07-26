"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import MobileNav from "./MobileNav";
import LogoutButton from "./LogoutButton";
import { cn } from "@/lib/utils";

const Header = () => {
    const pathname = usePathname();
    const { user } = useUser();

    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2">
                <h1 className="font-bold text-2xl">AI Interview</h1>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                <Link
                    href="/interviews"
                    className={cn("nav-link", {
                        "text-primary-200": pathname === "/interviews",
                    })}
                >
                    Your Interviews
                </Link>
                <Link
                    href="/pending"
                    className={cn("nav-link", {
                        "text-primary-200": pathname === "/pending",
                    })}
                >
                    Pending Interviews
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                {user ? (
                    <LogoutButton />
                ) : (
                    <>
                        <Link href="/sign-in" className="btn-secondary">
                            Sign In
                        </Link>
                        <Link href="/sign-up" className="btn-primary">
                            Sign Up
                        </Link>
                    </>
                )}
                <MobileNav />
            </div>
        </header>
    );
};

export default Header; 