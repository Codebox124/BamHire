import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="bg-white text-[#4B5563] max-w-4xl  mx-auto p-6 md:p-10 font-sans leading-relaxed">
            <h1 className="text-4xl pt-20 font-extrabold mb-6  text-[#0080ff]">Privacy Policy</h1>
            <p className="mb-6">
                At <strong>BAM Hire</strong>, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, share, and protect your personal information when you visit our website or engage with our services. By using our website (<a href="https://www.bamhire.com/" target="_blank" rel="noopener noreferrer" className='text-blue-600'>https://www.bamhire.com/</a>) and services, you agree to the terms outlined in this policy.
            </p>

            <section style={{ marginTop: '30px' }}>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]"> Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <h3 style={{ fontSize: '1.4rem', marginTop: '20px' }}>-. Personal Information</h3>
                <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    <li>Name, email address, phone number, and other contact details.</li>
                    <li>Employment-related information such as your resume or job history if you apply for a position through our website.</li>
                </ul>

                <h3 style={{ fontSize: '1.4rem', marginTop: '20px' }}>-. Non-Personal Information</h3>
                <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    <li>IP address, browser type, and operating system.</li>
                    <li>Website usage data, including pages visited, time spent on the site, and other analytics data.</li>
                </ul>

                <h3 style={{ fontSize: '1.4rem', marginTop: '20px' }}>-. Cookies and Tracking Technologies</h3>
                <p>
                    We use cookies to improve your browsing experience and understand how you interact with our website. You can manage your cookie preferences through your browser settings.
                </p>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]">How We Use Your Information</h2>
                <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    <li>Provide and improve our services.</li>
                    <li>Respond to your inquiries and requests.</li>
                    <li>Process job applications and connect you with potential employers or opportunities.</li>
                    <li>Analyze website performance and user behavior for optimization.</li>
                    <li>Comply with legal obligations.</li>
                </ul>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]"> How We Share Your Information</h2>
                <p>
                    We value your trust and will never sell your personal information. However, we may share your information with:
                </p>
                <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    <li><strong>Trusted Partners:</strong> To provide staffing or recruitment services in line with your career goals.</li>
                    <li><strong>Service Providers:</strong> To support our operations, such as IT services or analytics.</li>
                    <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
                </ul>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]"> Your Choices and Rights</h2>
                <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    <li><strong>Access and Update:</strong> You can request access to or correction of your personal information by contacting us.</li>
                    <li><strong>Opt-Out:</strong> You can opt out of marketing communications at any time by following the unsubscribe instructions in our emails.</li>
                    <li><strong>Cookies Management:</strong> Adjust your browser settings to block or delete cookies.</li>
                </ul>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]"> How We Protect Your Information</h2>
                <p>
                    We implement industry-standard security measures to safeguard your personal information. However, no method of online transmission or storage is 100% secure. We encourage you to take precautions to protect your own information.
                </p>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]"> Third-Party Links</h2>
                <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. Please review their policies before providing any personal information.
                </p>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]"> Children's Privacy</h2>
                <p>
                    Our website and services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children.
                </p>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]"> Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review the policy periodically.
                </p>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]"> Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:</p>
                <address style={{ fontStyle: 'normal', marginTop: '10px' }}>
                    <strong>BAM Hire</strong><br />
                    Phone: <a href="tel:+17087901398" className='text-blue-600'>(708) 790-1398</a><br />
                    Email: <a href="mailto:recruiting@bamhire.com" className='text-blue-600'>recruiting@bamhire.com</a>
                </address>
            </section>

            <p style={{ marginTop: '30px', textAlign: 'center' }}>Thank you for trusting BAM Hire. We are committed to protecting your privacy and providing you with a secure and transparent experience.</p>
        </div>
    );
}
