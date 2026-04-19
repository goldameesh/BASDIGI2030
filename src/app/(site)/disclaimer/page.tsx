import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <main className="w-full flex flex-col bg-[#0B1B4D] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="mb-4">
          <Link href="/" className="font-inter text-[13px] text-[#C9A84C] hover:underline uppercase tracking-[0.1em] font-semibold">
            ← Back to Home
          </Link>
        </div>
        <h1 className="font-playfair text-[40px] md:text-[56px] text-white font-bold mb-12">Disclaimer</h1>

        <div className="font-inter text-[16px] text-[#E2E8F0] leading-[1.8] flex flex-col gap-8">
          
          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">ADVISORY DISCLAIMER</h2>
            <p className="mb-4">
              All content on the Bhramaastra Advisory Services website is provided for informational purposes only. Nothing on this website constitutes legal, financial, regulatory, investment, or professional advice.
            </p>
            <p>
              The information, frameworks, and resources provided are general in nature and may not apply to your specific situation. You are responsible for evaluating the applicability of any content to your circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">OUTCOMES ARE CONTEXTUAL</h2>
            <p>
              Any outcomes, case studies, or examples referenced on this website are indicative and based on specific contexts. Similar outcomes are not guaranteed in your situation. Results depend on implementation quality, organisational readiness, market conditions, and numerous other factors beyond BAS&apos;s control.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">SERVICE ENGAGEMENTS</h2>
            <p>
              All service engagements with Bhramaastra Advisory Services are governed by individual scope of work agreements. Nothing on this website creates or implies any service commitment.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">THIRD BRAIN OUTPUTS</h2>
            <p>
              DecisionMine Third Brain outputs are analytical aids only. They do not replace professional judgment. You should not rely solely on Third Brain verdicts to make consequential decisions. Consult with qualified professionals — legal, financial, regulatory — in your field before acting on any output.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">NO LIABILITY</h2>
            <p className="mb-4">
              Bhramaastra Advisory Services accepts no liability for decisions, actions, or outcomes resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 marker:text-[#C9A84C]">
              <li className="pl-2 mb-2">Use of this website</li>
              <li className="pl-2 mb-2">Reliance on website content</li>
              <li className="pl-2 mb-2">Third Brain outputs</li>
              <li className="pl-2 mb-2">Course materials or resources</li>
              <li className="pl-2 mb-2">Any information provided by BAS</li>
            </ul>
            <p>
              This applies to the maximum extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">LIMITATION OF REMEDIES</h2>
            <p>
              In any case where BAS is found liable, your sole remedy is a refund of fees paid for services — not to exceed the amount paid.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">CHANGES</h2>
            <p>
              BAS reserves the right to update or remove content at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[24px] text-[#C9A84C] font-semibold mb-3">FINAL STATEMENT</h2>
            <p>
              By using this website and engaging with BAS, you acknowledge that you have read and understood this disclaimer and accept its terms fully.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
