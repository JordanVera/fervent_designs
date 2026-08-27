'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/data';
import { SERVICE_LINKS } from '@/lib/services';
import { cn } from '@/lib/utils';
import SocialLinks from '@/components/layout/SocialLinks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const servicesActive =
    pathname === '/services' || pathname.startsWith('/services/');

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        className={cn(
          'mx-auto flex items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4',
          scrolled
            ? 'max-w-5xl border-white/10 bg-[#0e0c08]/80 shadow-lg shadow-black/20 backdrop-blur-xl'
            : 'max-w-6xl border-transparent bg-transparent',
        )}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2 pl-1">
          <Image
            src="/logo-white.png"
            alt={COMPANY.name}
            width={120}
            height={48}
            className="h-12 w-auto sm:h-16"
            priority
            unoptimized
          />
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const isServices = link.href === '/services';
            const isActive = isServices
              ? servicesActive
              : pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(`${link.href}/`));

            if (isServices) {
              return (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      'relative inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors xl:px-3',
                      isActive
                        ? 'text-[#ee85d4]'
                        : 'text-white/80 hover:text-white',
                    )}
                    aria-haspopup="menu"
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                    <span
                      className={cn(
                        'absolute inset-x-3.5 -bottom-0.5 h-px bg-[#ee85d4] transition-transform duration-300',
                        isActive
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div
                      role="menu"
                      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e0c08]/95 py-2 shadow-xl backdrop-blur-xl"
                    >
                      {SERVICE_LINKS.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className={cn(
                              'block px-4 py-2.5 text-[11px] font-medium tracking-widest uppercase transition-colors',
                              childActive
                                ? 'text-[#ee85d4]'
                                : 'text-white/80 hover:bg-[#ee85d4]/10 hover:text-white',
                            )}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group relative rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors xl:px-3',
                  isActive
                    ? 'text-[#ee85d4]'
                    : 'text-white/80 hover:text-white',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute inset-x-3.5 -bottom-0.5 h-px bg-[#ee85d4] transition-transform duration-300',
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100',
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <SocialLinks
            className="mr-4 md:mr-2"
            iconSize={18}
            linkClassName="text-white/70 hover:text-[#ee85d4]"
          />
          <Link
            href="/contact"
            className="hidden items-center rounded-full border border-[#ee85d4] px-3.5 py-1.5 text-[10px] tracking-[0.2em] uppercase text-[#ee85d4] transition-all duration-200 hover:bg-[#ee85d4] hover:text-black sm:inline-flex"
          >
            Book a Call
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={cn(
              'mx-auto mt-2 overflow-hidden rounded-3xl border border-white/10 bg-[#0e0c08]/95 p-4 shadow-xl backdrop-blur-xl lg:hidden',
              scrolled ? 'max-w-5xl' : 'max-w-6xl',
            )}
          >
            <div className="flex flex-col">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-[#ee85d4]/10',
                  pathname === '/'
                    ? 'text-[#ee85d4]'
                    : 'text-white hover:text-[#ee85d4]',
                )}
              >
                Home
              </Link>
              {NAV_LINKS.map((link) => {
                const isServices = link.href === '/services';
                const isActive = isServices
                  ? servicesActive
                  : pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(`${link.href}/`));

                if (isServices) {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <div className="flex items-center">
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            'flex-1 rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-[#ee85d4]/10',
                            isActive
                              ? 'text-[#ee85d4]'
                              : 'text-white hover:text-[#ee85d4]',
                          )}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={mobileServicesOpen}
                          aria-label="Toggle services menu"
                          onClick={() =>
                            setMobileServicesOpen((value) => !value)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-xl text-white/70 hover:bg-[#ee85d4]/10 hover:text-[#ee85d4]"
                        >
                          <ChevronDown
                            size={16}
                            className={cn(
                              'transition-transform duration-200',
                              mobileServicesOpen ? 'rotate-180' : '',
                            )}
                          />
                        </button>
                      </div>
                      <AnimatePresence>
                        {mobileServicesOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="overflow-hidden"
                          >
                            <div className="mb-1 ml-3 flex flex-col border-l border-white/10 pl-3">
                              {SERVICE_LINKS.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={cn(
                                    'rounded-xl px-3 py-2 text-sm transition hover:bg-[#ee85d4]/10',
                                    pathname === child.href
                                      ? 'text-[#ee85d4]'
                                      : 'text-white/80 hover:text-[#ee85d4]',
                                  )}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-[#ee85d4]/10',
                      isActive
                        ? 'text-[#ee85d4]'
                        : 'text-white hover:text-[#ee85d4]',
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-[#ee85d4] px-4 py-3 text-center text-sm font-semibold tracking-[0.15em] uppercase text-black"
              >
                Book a Call
              </Link>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#ee85d4]/30 px-4 py-3 text-center text-sm font-medium text-white"
              >
                <Phone size={14} className="text-[#ee85d4]" />
                {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
