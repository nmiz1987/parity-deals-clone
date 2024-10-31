import Link from 'next/link';

interface Link {
  label: string;
  href: string;
}
interface FooterLinkGroupProps {
  title: string;
  links: Link[];
}

export function FooterLinkGroup({ links, title }: FooterLinkGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map(link => (
          <li key={`${link.label}-${link.href}`}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
