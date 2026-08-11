/**
 * Section 05b. Deliberate pacing break — Apple-style pause after the density
 * of Sections 04-05. This is the second appearance of the signature belief
 * statement (first: WhyAIFails, third: Insights). Must stay word-for-word
 * identical across all three appearances — repetition is what makes it
 * "signature," per Homepage Copy Draft Section 05b notes.
 */
export function BreathingSpace() {
  return (
    <section className="bg-white px-6 py-24 text-center lg:py-40">
      <p className="mx-auto max-w-2xl text-2xl font-medium leading-display text-near-black lg:text-3xl">
        Businesses don't fail with AI because the technology isn't ready.
        <br />
        They fail because they implement tools before understanding the business problem.
      </p>
      <p className="mt-8 text-base text-accent-500">Every transformation begins with understanding.</p>
    </section>
  );
}
