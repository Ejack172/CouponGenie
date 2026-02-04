"use client";

import Link from 'next/link';
import { Menu, X, Ticket } from 'lucide-react';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Ticket size={24} color="white" />
                    </div>
                    <span className={styles.logoText}>CouponGenie</span>
                </Link>

                {/* Desktop Nav */}
                <nav className={`${styles.nav} hidden-md block-md`}>
                    <ul className={styles.navList}>
                        <li><Link href="/" className={styles.navLink}>Home</Link></li>
                        <li><Link href="/education-coupons" className={styles.navLink}>Education</Link></li>
                        <li><Link href="/shopping-coupons" className={styles.navLink}>Shopping</Link></li>
                        <li><Link href="/blog" className={styles.navLink}>Blog</Link></li>
                    </ul>
                </nav>

                <div className="hidden-md block-md">
                    <Link href="#featured" className="btn btn-primary">Find Coupons</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="block-md hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <nav>
                        <ul className={styles.mobileNavList}>
                            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                            <li><Link href="/education-coupons" onClick={() => setIsMenuOpen(false)}>Education Code</Link></li>
                            <li><Link href="/shopping-coupons" onClick={() => setIsMenuOpen(false)}>Shopping Deals</Link></li>
                            <li><Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                            <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
