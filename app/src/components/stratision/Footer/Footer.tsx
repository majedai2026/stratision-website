const FOOTER_LINKS = {
  Company: [
    { label: 'About', href: '#why-stratision' },
    { label: 'Insights', href: '#insights' },
  ],
  Solutions: [
    { label: 'AI Receptionist', href: '/solutions/ai-receptionist' },
    { label: 'Workforce Intelligence Platform™', href: '/solutions/workforce-intelligence-platform' },
    { label: 'Workflow Automation', href: '/solutions/workflow-automation' },
  ],
  Industries: [
    { label: 'Training & Workforce Development', href: '/industries/training-workforce-development' },
    { label: 'Professional Services', href: '/industries/professional-services' },
    { label: 'Recruitment', href: '/industries/recruitment' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite px-6 py-16 text-accent-200 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 sm:grid-cols-4">
          <div>
            <p className="text-lg font-medium tracking-wordmark text-white">STRATISION</p>
            <p className="mt-2 text-sm text-accent-300">Strategy · Vision · Intelligence</p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-accent-300">{heading}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-accent-300">
          © {year} Stratision. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
