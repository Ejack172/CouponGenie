import Link from 'next/link';
import { featuredCoupons, categories } from '@/data/coupons';
import CouponCard from '@/components/CouponCard';
import styles from './page.module.css';
import { CheckCircle, Trophy, GraduationCap, ShoppingBag, Smartphone, Tv } from 'lucide-react';

const iconMap = {
    GraduationCap,
    ShoppingBag,
    Smartphone,
    Tv
};

export default function Home() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Working Coupon Codes & <br />Best Deals in India</h1>
                    <p className={styles.heroSub}>
                        Verified coupons for students, shopping, apps, OTT platforms, and online courses. Updated daily.
                    </p>
                    <div className={styles.ctabox}>
                        <Link href="#featured" className="btn btn-primary">Get Latest Coupons</Link>
                        <Link href="#categories" className="btn btn-secondary">Browse Categories</Link>
                    </div>
                </div>
            </section>

            <section id="featured" className="section container">
                <h2 className={styles.sectionTitle}>
                    <Trophy className="text-primary" /> Featured Coupons
                </h2>
                <div className={styles.grid}>
                    {featuredCoupons.map((coupon) => (
                        <CouponCard key={coupon.id} coupon={coupon} />
                    ))}
                </div>
            </section>

            <section id="categories" className="section container" style={{ background: '#F9FAFB' }}>
                <h2 className={styles.sectionTitle}>Browse by Category</h2>
                <div className={styles.catGrid}>
                    {categories.map((cat) => {
                        const Icon = iconMap[cat.icon];
                        return (
                            <Link key={cat.name} href={cat.link} className={styles.catCard}>
                                <div className={styles.catIcon}>
                                    {Icon && <Icon size={32} />}
                                </div>
                                <h3 className={styles.catName}>{cat.name}</h3>
                                <span className={styles.catCount}>{cat.count}</span>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="section container">
                <h2 className={styles.sectionTitle}>Why CouponGenie?</h2>
                <div className="card" style={{ padding: '3rem' }}>
                    <div className="grid grid-cols-3 gap-4" style={{ textAlign: 'center' }}>
                        <div>
                            <CheckCircle size={48} color="var(--accent)" style={{ margin: '0 auto 1rem' }} />
                            <h3>100% Verified</h3>
                            <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>We manually test every coupon code daily.</p>
                        </div>
                        <div>
                            <Trophy size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                            <h3>Premium Deals</h3>
                            <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>Exclusive partnerships with top brands.</p>
                        </div>
                        <div>
                            <ShoppingBag size={48} color="#F59E0B" style={{ margin: '0 auto 1rem' }} />
                            <h3>Student First</h3>
                            <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>Special focus on education & learning apps.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
