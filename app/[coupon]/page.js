import { notFound } from 'next/navigation';
import { featuredCoupons } from '@/data/coupons';
import CouponBox from '@/components/CouponBox';
import styles from './page.module.css';

export async function generateStaticParams() {
    return featuredCoupons.map((coupon) => ({
        coupon: coupon.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { coupon: slug } = await params;
    const data = featuredCoupons.find((c) => c.slug === slug);

    if (!data) return {};

    return {
        title: data.h1,
        description: data.intro,
    };
}

export default async function CouponPage({ params }) {
    const { coupon: slug } = await params;
    const data = featuredCoupons.find((c) => c.slug === slug);

    if (!data) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
            }
        }))
    };

    return (
        <article>
            <div className={styles.heroBackground}>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className={styles.h1}>{data.h1}</h1>
                    <p className={styles.intro}>{data.intro}</p>
                    <CouponBox coupon={data} />
                </div>
            </div>

            <div className="container section">
                <div className={styles.contentWrapper}>
                    <div className={styles.mainContent} dangerouslySetInnerHTML={{ __html: data.content }} />

                    <div className={styles.faqSection}>
                        <h2>Frequently Asked Questions</h2>
                        <div className={styles.faqList}>
                            {data.faqs.map((faq, index) => (
                                <div key={index} className={styles.faqItem}>
                                    <h3 className={styles.faqQuestion}>{faq.q}</h3>
                                    <p className={styles.faqAnswer}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </article>
    );
}
