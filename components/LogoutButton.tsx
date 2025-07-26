"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";

const LogoutButton = () => {
    const router = useRouter();

    const onLogout = async () => {
        await signOut();
        router.push("/sign-in");
    };

    return (
        <button onClick={onLogout} className="btn-secondary">
            Logout
        </button>
    );
};

export default LogoutButton; 