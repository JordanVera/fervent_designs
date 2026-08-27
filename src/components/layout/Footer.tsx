import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/data';
import SocialLinks from '@/components/layout/SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-[#0e0c08] text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-white.png"
                alt={COMPANY.name}
                width={120}
                height={48}
                className="h-24 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              {COMPANY.tagline} Award-winning full-service wedding planning and
              event design in Houston and destination weddings abroad.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h4 className="text-white text-xs tracking-[0.25em] uppercase mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-[#ee85d4] transition-colors"
                >
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#ee85d4] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-[0.25em] uppercase mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="flex items-center gap-3 hover:text-[#ee85d4] transition-colors"
                >
                  <Phone size={14} className="text-[#ee85d4] flex-shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 hover:text-[#ee85d4] transition-colors"
                >
                  <Mail size={14} className="text-[#ee85d4] flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="text-[#ee85d4] flex-shrink-0 mt-0.5"
                />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}. All Rights
            Reserved.
          </p>
          <p>Houston, Texas</p>
        </div>
      </div>
    </footer>
  );
}
