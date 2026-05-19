import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  viewAll?: boolean;
}

export function Section({ title, subtitle, children, viewAll = true }: SectionProps) {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h3 className="text-3xl font-extrabold text-primary mb-1 tracking-tight">{title}</h3>
          <p className="text-on-surface-variant font-medium opacity-70">{subtitle}</p>
        </div>
        {viewAll && (
          <a
            href="#"
            className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform group pb-1"
          >
            <span className="text-sm">View All</span>
            <ArrowRight size={18} className="text-primary" />
          </a>
        )}
      </div>
      {children}
    </section>
  );
}
