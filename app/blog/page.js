import Link from 'next/link';

export const metadata = {
    title: 'Blog - CouponGenie',
    description: 'Latest saving tips, comparison guides, and coupon hacks.',
};

const blogPosts = [
    {
        slug: 'best-physics-wallah-coupon-code',
        title: 'Best Physics Wallah Coupon Code for JEE 2026',
        excerpt: 'Find out which PW coupon gives the maximum discount for the upcoming academic year.',
        date: 'Oct 12, 2025'
    },
    {
        slug: 'how-students-save-money',
        title: 'How Students Can Save Money Using Coupon Codes',
        excerpt: 'A complete guide for students to manage expenses and save on subscriptions.',
        date: 'Oct 10, 2025'
    },
    {
        slug: 'unacademy-vs-pw',
        title: 'Unacademy vs PW: Discounts and Offers Comparison',
        excerpt: 'We compared the pricing and available discounts for both platforms. Here is the winner.',
        date: 'Oct 05, 2025'
    }
];

export default function Blog() {
    return (
        <div className="container section">
            <h1 style={{ marginBottom: '1rem' }}>Latest Blog Posts</h1>
            <p style={{ marginBottom: '3rem', color: 'var(--muted)' }}>Tips, tricks, and guides to save more money.</p>

            <div className="grid grid-cols-3 gap-4">
                {blogPosts.map(post => (
                    <div key={post.slug} className="card">
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{post.title}</h2>
                        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>{post.date}</p>
                        <p style={{ marginBottom: '1.5rem' }}>{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="btn btn-secondary" style={{ width: '100%' }}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
