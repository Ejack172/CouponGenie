import { featuredCoupons } from '@/data/coupons';
import CouponCard from '@/components/CouponCard';
import { ShoppingBag } from 'lucide-react';

export const metadata = {
    title: 'Shopping Coupons & Sale Offers - CouponGenie',
};

export default function ShoppingCoupons() {
    const coupons = featuredCoupons.filter(c => c.id === 'amazon');

    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ background: '#FFF7ED', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <ShoppingBag size={32} color="#F97316" />
                </div>
                <h1>Shopping Coupons</h1>
                <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '1rem auto 0' }}>Latest deals on fashion, electronics, and home essentials.</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {coupons.map(coupon => (
                    <CouponCard key={coupon.id} coupon={coupon} />
                ))}
            </div>
        </div>
    );
}
