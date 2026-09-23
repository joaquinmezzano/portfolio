'use client';

import Link from 'next/link';

import { links, siteMeta } from '@/common/lib/data';
import { smoothScrollTo } from '@/common/lib/utils';
import { cn } from '@/common/lib/utils';
import { useActiveSectionContext } from '@/common/stores/active-section';
import { ModeToggle } from '@/common/theme/mode-toggler';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <div className="page-wrap flex h-16 items-center justify-between gap-4">
        <Link
          href="#home"
          onClick={(e) => {
            smoothScrollTo({ e, id: 'home' });
            setActiveSection('home');
            setTimeOfLastClick(Date.now());
          }}
          className="font-mono text-sm font-medium text-ink"
        >
          ~/{siteMeta.name.toLowerCase().split(' ').join('')}
        </Link>

        <nav>
          <ul className="hidden items-center gap-6 sm:flex">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.id}
                  onClick={(e) => {
                    smoothScrollTo({ e, id: link.id });
                    setActiveSection(link.id);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={cn(
                    'font-mono text-[0.68rem] uppercase tracking-[0.18em] transition-colors',
                    activeSection === link.id
                      ? 'text-ink'
                      : 'text-silk hover:text-ink',
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            onClick={(e) => {
              smoothScrollTo({ e, id: 'contact' });
              setActiveSection('contact');
              setTimeOfLastClick(Date.now());
            }}
            className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-signal sm:hidden"
          >
            contact
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
