import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Bankhead Construction LLC",
  description: "Terms of Service, payment obligations, and liability scopes for Bankhead Construction LLC.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-4 mb-12">
          <Link href="/" className="text-primary hover:text-white transition-colors text-sm font-semibold flex items-center gap-2">
             ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">Terms of Service</h1>
          <p className="text-gray-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">1. Standard Agreement</h2>
            <p>
              These Terms of Service ("Terms") structure the relationship between Bankhead Construction LLC ("we," "our," "Contractor") and you ("the Client," or "User"). By accessing our digital property or formally requesting an estimate or construction service, you consent to these fundamental terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">2. Estimates vs. Binding Contracts</h2>
            <p>
              Any estimates provided verbally or through our contact forms are initial budgetary approximations based on the limited information provided. They do not constitute a legally binding agreement to perform work at the specified price. A formal, written, and signed contract is required before any construction, repair, or procurement of materials commences. 
            </p>
            <p>
              Prices generated in an estimate are valid for 15 days unless otherwise noted, after which material cost fluctuations may require a re-evaluation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">3. Scope of Work & Change Orders</h2>
            <p>
              The explicit scope of work will be defined in the formal contract signed by both parties. Any deviations, additions, or modifications to the original scope—whether requested by the Client or required due to unforeseen structural issues discovered during demolition/construction—must be documented as a "Change Order."
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Change orders may impact the final completion timeline.</li>
              <li>Change orders will incur additional costs that must be approved by the Client before the specific change is executed.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">4. Payment Terms</h2>
            <p>
              Payment schedules will be rigidly defined in the formal construction contract. Standard terms often require an initial deposit to secure scheduling and procure specialty materials. Progress payments may be required at specific project milestones, with the final balance due immediately upon substantial completion or a final walkthrough.
            </p>
            <p>
              Failure to remit progress payments on time may result in work stoppage until the balance is resolved.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">5. Warranties and Liabilities</h2>
            <p>
              Bankhead Construction LLC honors a standard craftmanship warranty on labor performed, asserting that work will be completed in a professional, workmanlike manner consistent with industry standards in St. Louis, MO.
            </p>
            <p>
              We are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Pre-existing structural, plumbing, or electrical flaws hidden within walls or foundations.</li>
              <li>Damage to the work caused by the Client, third-party contractors hired by the Client, or "Acts of God" (extreme weather, natural disasters).</li>
              <li>Materials purchased independently by the Client that fail or defect. Manufacturer warranties apply directly to materials.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">6. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the State of Missouri. Any disputes regarding these terms or the construction contract will be resolved in the appropriate state or federal courts located within St. Louis County, Missouri.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-heading">7. Contact Information</h2>
            <p>
              For legal inquiries or clarifications regarding these terms, please contact:
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
