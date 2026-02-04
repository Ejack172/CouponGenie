import { featuredCoupons, categories } from '@/data/coupons';

export default function sitemap() {
    const baseUrl = 'https://coupongenie.in';

    // Static routes
    const staticRoutes = [
        '',
        '/blog',
        '/contact',
        '/privacy-policy',
        '/terms-and-conditions',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Categories
    const categoryRoutes = categories.map((category) => ({
        url: `${baseUrl}${category.link}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // Dynamic Coupon Pages
    const couponRoutes = featuredCoupons.map((coupon) => ({
        url: `${baseUrl}/${coupon.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1, // High priority for coupon pages
    }));

    return [...staticRoutes, ...categoryRoutes, ...couponRoutes];
}
