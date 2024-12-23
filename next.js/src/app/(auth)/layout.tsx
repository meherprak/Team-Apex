"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Register", href: "/Register" },
    { name: "Login", href: "/Login" },
    { name: "Forgot Password", href: "/forgot-password" },
];

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname=usePathname();
    return (
        <div>
            {navLinks.map((link) => {  
                const isActive = pathname.startsWith(link.href);

            return(
                
                <Link href={link.href} key={link.name}
                    className={isActive?"font-bold mr-4 ":"text-blue-100 mr-4"}
                >
                        {link.name}
                </Link>
            );
            })}
            {children}
        </div>
    );
}
