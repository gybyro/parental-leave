'use client'
import React from 'react';

import Image from "next/image";
import Link from 'next/link';
import logo from "@/public/islandis.svg"

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
        <div className='header'>
            <Link href="/" className='homebtn' >
                <Image
                    className="headerLogo"
                    src={logo}
                    alt="Bubblify logo"
                    priority
                />
            </Link>
            <div>
                <Link href="/bubbles" className="btn">Products</Link>
                <Link href="/bundles" className="btn">Bundles</Link>
                <Link href="/about" className="btn">About us</Link>
                {/* <Link href="/cart" className="btn">
                    Cart {"     "}
                    <FontAwesomeIcon icon={faCartShopping} /> 
                    {cartCount > 0 && (
                        <span className="cart-badge">{cartCount}</span>
                    )}
                </Link> */}
            </div>
        </div>
    );
}
export default Header;