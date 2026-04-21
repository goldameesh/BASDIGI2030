import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Compliance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection. Understanding how BAS protects your institutional intelligence.',
}

export default function PrivacyPage() {
  return (
    <main className="w-full flex flex-col bg-[#0B1B4D] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="mb-4">
          <Link href="/" className="font-inter text-[13px] text-[#C9A84C] hover:underline uppercase tracking-[0.1em] font-semibold">
            ← Back to Home
          </Link>
        </div>
        <h1 className="font-playfair text-[40px] md:text-[56px] text-white font-bold mb-4">Privacy Policy</h1>
        <p className="font-inter text-[14px] text-[#94A3B8] mb-12 uppercase tracking-[0.05em]">Effective date: April 2026</p>

        <div className="font-inter text-[16px] text-[#E2E8F0] leading-[1.8] flex flex-col gap-8">
          <p>
            Bhramaastra Advisory Services (&quot;BAS&quot;) is committed to protecting your personal data. This policy explains how we collect, use, and protect your information.
          </p>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">DATA WE COLLECT</h2>
            <p className="mb-4">
              We collect personal information only when you submit it to us — primarily through contact forms on this website. This includes your name, email address, phone number (if provided), organisation, and the content of your message.
            </p>
            <p>
              We do not collect or track behavioural data, cookies, or browsing history. We do not use analytics that identify you personally.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">HOW WE USE YOUR DATA</h2>
            <p>
              Your information is used solely to respond to your enquiry. We will not use your contact details for marketing, newsletters, or any other purpose without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">HOW WE PROTECT YOUR DATA</h2>
            <p>
              Your data is submitted through Formspree, which handles form processing. Formspree stores your submission temporarily to deliver it to us. We do not store contact form data on our own servers. All communication is encrypted in transit (HTTPS).
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">YOUR RIGHTS UNDER UAE LAW</h2>
            <p className="mb-4">
              Under UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 marker:text-[#C9A84C]">
              <li className="pl-2 mb-2">Request access to your personal data</li>
              <li className="pl-2 mb-2">Request correction of inaccurate data</li>
              <li className="pl-2 mb-2">Request deletion of your data</li>
              <li className="pl-2 mb-2">Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise these rights, contact us at connect@bhramaastraadvisory.com.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">DATA RETENTION</h2>
            <p>
              Form submissions are retained only as long as necessary to respond to your enquiry. You may request deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">THIRD PARTIES</h2>
            <p>
              We do not share your data with third parties. We do not sell or rent your information. The only exception is Formspree, which processes your form submission as our data processor.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">CHANGES TO THIS POLICY</h2>
            <p>
              We may update this policy from time to time. Any changes will be posted on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">CONTACT US</h2>
            <p>
              If you have questions about this privacy policy or how we handle your data, contact us at connect@bhramaastraadvisory.com or +971 50 409 0727.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
