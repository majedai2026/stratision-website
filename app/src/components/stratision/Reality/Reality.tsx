import { Card, SectionHeader } from '../ui';

const PROBLEMS = [
  { title: 'Sales teams overwhelmed', body: "Stop losing opportunities to slow response times." },
  { title: 'Knowledge disappearing', body: "Make sure what your business knows doesn't walk out the door." },
  { title: 'Manual processes', body: 'Give your team back the hours lost to repetitive work.' },
  { title: 'Disconnected systems', body: 'Your tools should talk to each other, so your people don\'t have to.' },
];

export function Reality() {
  return (
    <section className="bg-soft-grey px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader headline="AI isn't the challenge." supporting="Choosing where AI creates value is." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem) => (
            <Card key={problem.title} className="bg-white">
              <h3 className="mb-2 text-base font-semibold text-near-black">{problem.title}</h3>
              <p className="text-sm leading-body text-[#555555]">{problem.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
