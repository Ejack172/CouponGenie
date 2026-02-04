import { Smartphone } from 'lucide-react';

export const metadata = {
    title: 'App Referral Codes & Sign up Bonuses - CouponGenie',
};

export default function AppCoupons() {
    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ background: '#ECFDF5', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <Smartphone size={32} color="#10B981" />
                </div>
                <h1>App Referral Codes</h1>
                <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '1rem auto 0' }}>Get free credits and sign up bonuses for top apps.</p>
            </div>
            <p style={{ textAlign: 'center', margin: '4rem 0' }}>No offers currently available. Check back later.</p>
        </div>
    );
}
