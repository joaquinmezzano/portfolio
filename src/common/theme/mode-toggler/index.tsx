'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { cn } from '@/common/lib/utils';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle color theme"
      className={cn(
        'font-mono text-[0.68rem] uppercase tracking-[0.18em] transition-colors',
        'text-silk hover:text-ink',
      )}
    >
      {isDark ? '[dark]' : '[light]'}
    </button>
  );
}
