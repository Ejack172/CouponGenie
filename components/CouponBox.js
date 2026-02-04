"use client";

import { CheckCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import styles from './CouponBox.module.css';

export default function CouponBox({ coupon }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(coupon.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.box}>
            <div className={styles.top}>
                <div className={styles.logo} style={{ backgroundColor: coupon.logo ? 'white' : coupon.color }}>
                    {coupon.logo ? (
                        <img src={coupon.logo} alt={coupon.title} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} />
                    ) : (
                        coupon.title.charAt(0)
                    )}
                </div>
                <div className={styles.meta}>
                    <h2 className={styles.title}>{coupon.title}</h2>
                    <span className={styles.verified}>
                        <CheckCircle size={14} /> Verified Today
                    </span>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.discountBadge}>
                    {coupon.discount}
                </div>
                <p className={styles.desc}>{coupon.description}</p>

                <div className={styles.codeContainer}>
                    <div className={styles.codeText}>{coupon.code}</div>
                    <button onClick={handleCopy} className={styles.copyBtn}>
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                        {copied ? 'Copied' : 'Copy Code'}
                    </button>
                </div>
                <p className={styles.terms}>{coupon.terms}</p>
            </div>
        </div>
    );
}
