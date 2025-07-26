"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import LogoutButton from "./LogoutButton";
import { useUser } from "@/hooks/useUser";

const MobileNav = () => {
    const pathname = usePathname();
    const { user } = useUser();

    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Menu className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo.svg"
                                alt="AI Interview"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                            <h1 className="font-bold text-xl">AI Interview</h1>
                        </Link>
                    </SheetHeader>
                    <div className="flex flex-col gap-6 mt-8">
                        {user ? (
                            <>
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
                                <Link
                                    href="/reports"
                                    className={cn("nav-link", {
                                        "text-primary-200": pathname === "/reports",
                                    })}
                                >
                                    Reports
                                </Link>
                                <LogoutButton />
                            </>
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
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav; 