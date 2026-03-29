import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Bankhead Construction LLC",
  description: "Privacy Policy and data handling practices for Bankhead Construction LLC in St. Louis, Missouri.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-4 mb-12">
          <Link href="/" className="text-primary hover:text-white transition-colors text-sm font-semibold flex items-center gap-2">
             ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">1. Introduction</h2>
            <p>
              Bankhead Construction LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy informs you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">2. Information We Collect</h2>
            <p>
              We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong className="text-gray-300">Identity Data</strong> includes first name, last name, or similar identifier.</li>
              <li><strong className="text-gray-300">Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
              <li><strong className="text-gray-300">Project Data</strong> includes details about the construction, remodeling, or repair services you are requesting.</li>
              <li><strong className="text-gray-300">Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting, and operating system statistics.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">3. How We Use Your Information</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>To provide you with an accurate estimate or quote for our construction services.</li>
              <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
              <li>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting, and hosting of data).</li>
              <li>To communicate regarding scheduling, project updates, and post-project follow-ups.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">5. Cookies</h2>
            <p>
              Our website may use "cookies" to enhance the user experience. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">6. Third-Party Links</h2>
            <p>
              This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 mt-4">
              <p className="font-bold text-white mb-2">Bankhead Construction LLC</p>
              <p>St. Louis, Missouri</p>
              <p>Phone: <a href="tel:+13147014877" className="text-primary hover:underline">(314) 701-4877</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
