import { featuredCoupons } from '@/data/coupons';
import CouponCard from '@/components/CouponCard';
import { GraduationCap } from 'lucide-react';

export const metadata = {
    title: 'Education Coupons & Course Discounts - CouponGenie',
};

export default function EducationCoupons() {
    // Filter for education related coupons (mock filter)
    const coupons = featuredCoupons.filter(c => c.id === 'physics-wallah' || c.id === 'unacademy');

    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ background: '#EEF2FF', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <GraduationCap size={32} color="var(--primary)" />
                </div>
                <h1>Education Coupons</h1>
                <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '1rem auto 0' }}>Save on online courses, test series, and study materials with top education coupons.</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {coupons.map(coupon => (
                    <CouponCard key={coupon.id} coupon={coupon} />
                ))}
            </div>
        </div>
    );
}
