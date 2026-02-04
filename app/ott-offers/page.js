import { Tv } from 'lucide-react';

export const metadata = {
    title: 'OTT Subscription Offers & Coupons - CouponGenie',
};

export default function OTTCoupons() {
    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ background: '#FEF2F2', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <Tv size={32} color="#EF4444" />
                </div>
                <h1>OTT Offers</h1>
                <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '1rem auto 0' }}>Discounts on Netflix, Prime Video, Hotstar, and more.</p>
            </div>
            <p style={{ textAlign: 'center', margin: '4rem 0' }}>No offers currently available. Check back later.</p>
        </div>
    );
}
