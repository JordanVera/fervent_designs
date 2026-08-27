import Image from 'next/image';
import { COMPANY } from '@/lib/data';
import { cn } from '@/lib/utils';

const LINKS = [
  {
    label: 'Facebook',
    href: COMPANY.facebook,
    icon: '/facebook.svg',
  },
  {
    label: 'Instagram',
    href: COMPANY.instagram,
    icon: '/instagram.svg',
  },
] as const;

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
  linkClassName?: string;
};

export default function SocialLinks({
  className,
  iconSize = 18,
  linkClassName,
}: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {LINKS.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            'text-white/50 hover:text-[#ee85d4] transition-colors',
            linkClassName,
          )}
        >
          <Image
            src={icon}
            alt=""
            width={iconSize}
            height={iconSize}
            aria-hidden
            className="brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>
      ))}
    </div>
  );
}
