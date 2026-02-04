import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3 className={styles.heading}>CouponGenie</h3>
                        <p className={styles.text}>
                            Your trusted source for verified coupon codes, student discounts, and exclusive deals. We help you save money on education, shopping, and more.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.subHeading}>Categories</h4>
                        <ul>
                            <li><Link href="/education-coupons">Education</Link></li>
                            <li><Link href="/shopping-coupons">Shopping</Link></li>
                            <li><Link href="/ott-offers">OTT Offers</Link></li>
                            <li><Link href="/app-referral-codes">Apps</Link></li>
                        </ul>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.subHeading}>Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms-and-conditions">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} CouponGenie. All rights reserved.</p>
                    <p className={styles.disclaimer}>
                        Disclosure: We may earn a commission when you use one of our coupons/links to make a purchase.
                    </p>
                </div>
            </div>
        </footer>
    );
}
