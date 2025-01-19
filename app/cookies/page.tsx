import React from "react";

export default function Page() {
    return (
        <div className="bg-white max-w-4xl  mx-auto text-[#4B5563] p-6 md:p-10 font-sans leading-relaxed">
            <h1 className="text-4xl pt-20 font-extrabold mb-6 text-[#0080ff]">
                Cookie Policy
            </h1>
            <p className="mb-4">
                At BAMhire, we use cookies and similar technologies to improve your browsing
                experience, provide personalized services, and better understand how
                our website is used. This Cookie Policy explains what cookies are, how
                we use them, and your choices regarding their use. By continuing to use
                our website (
                <a
                    href="https://www.BAM Hire.com/"
                    className="text-blue-600 hover:underline"
                >
                    https://www.BAM Hire.com/
                </a>
                ), you consent to the use of cookies as described in this policy.
            </p>

            

            <section>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]">
                     What Are Cookies?
                </h2>
                <p className="mb-4">
                    Cookies are small text files that are stored on your device (computer,
                    smartphone, tablet) when you visit a website. They help the website
                    remember your preferences and activities, making your experience more
                    seamless and personalized.
                </p>
            </section>

            

            <section>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]">
                     Types of Cookies We Use
                </h2>
                <p className="mb-[10px]">We use the following types of cookies on our website:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <span className="font-semibold">Essential Cookies:</span>These Cookies are necessary
                        for the website to function properly, enabling core features such as
                        security, network management, and accessibility. Disabling these cookies may affect the website’s functionality.
                    </li>
                    <li>
                        <span className="font-semibold">Performance and Analytics Cookies:</span>{" "}
                        These cookies help us understand how visitors interact with our website by collecting anonymous information about page visits, time spent, and other usage data. This helps us improve our website and services.
                    </li>
                    <li>
                        <span className="font-semibold">Functional Cookies:</span> These cookies allow the website to remember your preferences, such as language selection or login details, to provide a more personalized experience.
                    </li>
                    <li>
                        <span className="font-semibold">Advertising and Targeting Cookies:</span>{" "}
                        These cookies are used to deliver relevant advertisements to you and measure the effectiveness of our marketing campaigns. They may also track your activity across other websites.
                    </li>
                </ul>
            </section>

            

            <section>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]">
                    How We Use Cookies
                </h2>
                <p className="mb-[10px]">We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Improve the performance and functionality of our website.</li>
                    <li>Analyze website traffic and user behavior.</li>
                    <li>Deliver personalized content and targeted advertising.</li>
                    <li>
                        Enhance your browsing experience by remembering your preferences.
                    </li>
                </ul>
            </section>

            

            <section>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]">
                     Managing Your Cookie Preferences
                </h2>
                <p className="mb-4">
                    You have the right to control the use of cookies. Here’s how:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <span className="font-semibold">Browser Settings:</span> Most web browsers allow you to manage cookies through their settings. You can choose to block or delete cookies. However, disabling certain cookies may impact your ability to use some features of our website.
                    </li>
                    <li>
                        <span className="font-semibold">Cookie Banners:</span> When you visit our website, you may see a cookie banner that allows you to accept or decline specific types of cookies.
                    </li>
                    <li>
                        <span className="font-semibold">Opt-Out Tools:</span> Some third-party services we use for analytics and advertising provide opt-out options. Please refer to their privacy policies for more details.
                    </li>
                </ul>
            </section>

            

            <section>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]">
                     Third-Party Cookies
                </h2>
                <p className="mb-4">
                We may allow third-party services to place cookies on your device for analytics, advertising, or other purposes. These third parties have their own privacy and cookie policies, and we encourage you to review them.

                </p>
            </section>

            

            <section>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]">
                     Updates to This Policy
                </h2>
                <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. Any updates will be posted on this page with an updated "Effective Date."
                </p>
            </section>

            

            <section>
                <h2 className="text-2xl font-bold mb-4 text-[#0080ff]">
                    Contact Us
                </h2>
                <p className="mb-4">
                    If you have any questions about this Cookie Policy or how we use
                    cookies, please contact us:
                </p>
                <p className="mb-4">
                BAMhire
                    <br />
                    Phone: <a href="tel:(708) 790-1398" className="text-blue-600 hover:underline">(708) 790-1398</a>
                    <br />
                    Email:{" "}
                    <a
                        href="mailto:recruiting@BAMhire.com"
                        className="text-blue-600 hover:underline"
                    >
                        recruiting@BAMhire.com
                    </a>
                </p>
            </section>

            

            <p className="text-center text-gray-600">
                Thank you for choosing BAMhire. We are committed to providing you with a
                transparent and user-friendly experience.
            </p>
        </div>
    );
}
