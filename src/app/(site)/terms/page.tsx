import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Governance and terms of engagement for the Bhramaastra Advisory Services digital intelligence hub. Institutional-grade advisory standards.',
}

export default function TermsPage() {
  return (
    <main className="w-full flex flex-col bg-[#0B1B4D] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="mb-4">
          <Link href="/" className="font-inter text-[13px] text-[#C9A84C] hover:underline uppercase tracking-[0.1em] font-semibold">
            ← Back to Home
          </Link>
        </div>
        <h1 className="font-playfair text-[40px] md:text-[56px] text-white font-bold mb-4">Terms of Use</h1>
        <p className="font-inter text-[14px] text-[#94A3B8] mb-12 uppercase tracking-[0.05em]">Effective date: April 2026</p>

        <div className="font-inter text-[16px] text-[#E2E8F0] leading-[1.8] flex flex-col gap-8">
          <p>
            These Terms of Use govern your access to and use of the Bhramaastra Advisory Services website.
          </p>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">WEBSITE PURPOSE</h2>
            <p>
              This website is informational in nature. It does not constitute a contract for services. All service engagements are governed by separate written agreements between BAS and the client.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">INTELLECTUAL PROPERTY</h2>
            <p>
              All content on this website — including text, graphics, logos, images, and software — is the property of Bhramaastra Advisory Services and protected by copyright. You may not reproduce, distribute, or transmit any content without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">SERVICE DISCLAIMERS</h2>
            <p className="mb-4">
              DecisionMine Third Brain outputs are advisory in nature. They do not constitute legal, financial, regulatory, or professional advice. All verdicts should be reviewed by qualified professionals in your field before action is taken.
            </p>
            <p>
              BAS Academy courses and resources are educational. They do not guarantee specific outcomes. Results depend on implementation and organisational context.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">USER CONDUCT</h2>
            <p className="mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 marker:text-[#C9A84C]">
              <li className="pl-2 mb-2">Use this website for any unlawful purpose</li>
              <li className="pl-2 mb-2">Attempt to gain unauthorised access to our systems</li>
              <li className="pl-2 mb-2">Transmit malware or harmful code</li>
              <li className="pl-2 mb-2">Interfere with or disrupt the website&apos;s functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">LIMITATION OF LIABILITY</h2>
            <p>
              Bhramaastra Advisory Services will not be liable for any damages arising from your use of this website or any content provided, including lost profits, data loss, or indirect damages. This applies to the maximum extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">GOVERNING LAW</h2>
            <p>
              These Terms are governed by the laws of the United Arab Emirates.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">CHANGES TO TERMS</h2>
            <p>
              We reserve the right to update these terms at any time. Your continued use of the website constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">CONTACT</h2>
            <p>
              If you have questions about these terms, contact us at connect@bhramaastraadvisory.com.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
