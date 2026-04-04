'use client'
import Link from 'next/link';
import "./fohestyle.css"
/**
 * Footer Component
 * 
 * A persistent UI element rendered at the bottom of every page.
 * Contains a link to the company's About page and decorative lines.
 * 
 * @returns {JSX.Element} The rendered footer with navigation.
 */

const Footer = () => {
    return (
        <div className='footer'>
            <div className="line"></div>
            <Link href="/about" className="fbtn">About us</Link>
            <div className="line"></div>
        </div>
    );
}
export default Footer;