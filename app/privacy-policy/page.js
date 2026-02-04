export const metadata = {
    title: 'Privacy Policy - CouponGenie',
};

export default function Privacy() {
    return (
        <div className="container section">
            <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
            <div style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <br />
                <p>At CouponGenie, accessible from coupongenie.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by CouponGenie and how we use it.</p>
                <br />
                <h2>Log Files</h2>
                <p>CouponGenie follows a standard procedure of using log files. These files log visitors when they visit websites.</p>
                <br />
                <h2>Cookies and Web Beacons</h2>
                <p>Like any other website, CouponGenie uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.</p>
            </div>
        </div>
    );
}
