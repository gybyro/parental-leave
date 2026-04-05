'use client'
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from "@/public/islandis.svg"

import { Button } from "@/app/components/ui/Button"

import "./fohestyle.css"

/**
 * Header Component
 * 
 * Persistent navigation bar containing the logo and main site links.
 * Displays a dynamic cart badge that updates instantly via CartContext.
 * 
 * @returns {JSX.Element} The rendered header with navigation and cart status.
 */
const Header = () => {
    
    // // grab the cart directly from context
    // const { cart } = useCart();

    // // calculates the total quantity whenever the cart changes
    // const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className='contentContainer'>
            
        <div className='h-28 px-3 py-8 block flex flex-row items-center'>
            <Link href="/" className='homebtn' >
                <Image
                    className="min-w-7 "
                    src={logo}
                    alt="island.is logo"
                    priority
                />
            </Link>
            <div className='w-full pl-4 flex justify-end'>

                <Link href="/bubbles">
                    <Button 
                    variant='ghost'
                    size='small'
                    >Start Filing</Button>
                </Link>

                <Button variant='utility' size='small'>
                    Start Filing
                </Button>

                <Button variant='destructive' size='small'>
                    Start Filing
                </Button>

            </div>
        </div>
        </div>
    );
}
export default Header;