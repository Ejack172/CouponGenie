import Link from 'next/link';
import { CheckCircle, ArrowRight, Copy } from 'lucide-react';
import styles from './CouponCard.module.css';

export default function CouponCard({ coupon }) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.logo} style={{ backgroundColor: coupon.logo ? 'white' : coupon.color }}>
                    {coupon.logo ? (
                        <img src={coupon.logo} alt={coupon.title} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} />
                    ) : (
                        coupon.title.charAt(0)
                    )}
                </div>
                <div>
                    <h3 className={styles.title}>{coupon.title}</h3>
                    {coupon.verified && (
                        <span className={styles.verified}>
                            <CheckCircle size={12} /> Verified
                        </span>
                    )}
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.discount}>{coupon.discount}</div>
                <p className={styles.desc}>{coupon.description}</p>
            </div>

            <div className={styles.footer}>
                <div className={styles.codeBox}>
                    <span className={styles.code}>{coupon.code}</span>
                    <Copy size={14} className={styles.copyIcon} />
                </div>
                <Link href={coupon.link} className={styles.link}>
                    Get Deal <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
}
