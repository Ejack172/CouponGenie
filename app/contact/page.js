export const metadata = {
    title: 'Contact Us - CouponGenie',
    description: 'Get in touch with the CouponGenie team.',
};

export default function Contact() {
    return (
        <div className="container section">
            <h1>Contact Us</h1>
            <p style={{ maxWidth: '600px', margin: '1rem 0 2rem', color: 'var(--muted)' }}>
                Have a question or want to report an issue with a coupon? Fill out the form below or email us at support@coupongenie.in.
            </p>

            <div className="card" style={{ maxWidth: '500px' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                        <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} placeholder="Your Name" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                        <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} placeholder="your@email.com" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                        <textarea style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', minHeight: '120px' }} placeholder="How can we help?" />
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    );
}
