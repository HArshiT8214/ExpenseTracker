"use client"

import React, { useState } from 'react'
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { UserButton } from '@clerk/nextjs';
import { ThemeSwitcherBtn } from './ThemeSwitcherBtn';


function Navbar() {
    return (
        <>
            <DesktopNavbar />
        </>
    )
}

const items = [{ label: "Dashboard", link: "/" },
{ label: "Transactions", link: "/Treasactions" },
{ label: "Manage", link: "/Manage" }
]



function DesktopNavbar() {
    return (
        <div className='hidden border-separate border-b bg-background md:block'>
            <nav className='container flex items-center justify-between px-8'>
                <div className='flex h-[80px] min-h-[60] items-center gap-x-4'>
                    <Logo />
                    <div className='flex h-full'>
                        {items.map(item => (
                            <NavbarItem
                                key={item.label}
                                link={item.link}
                                label={item.label}
                            />
                        ))}
                    </div>

                </div>
                <div className='flex items-center gap-2 absolute right-0 pr-10'>
                    <ThemeSwitcherBtn />
                    <UserButton afterSignOutUrl='/sign-in' />
                </div>
            </nav>
        </div>
    );
}


function NavbarItem({ link, label }: { link: string; label: string; }) {
    const pathname = usePathname();
    const isActive = pathname === link;

    return <div className="relative flex items-center">
        <Link href={link} className={cn(buttonVariants({
            variant: "ghost"
        }), "w-full justify-start text-lg text-muted-foreground hover:text-foeground",
            isActive && "text-foreground"
        )}>
            {label}
        </Link>
        {isActive && (
            <div className='absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block ' />
        )}
    </div>
}


export default Navbar