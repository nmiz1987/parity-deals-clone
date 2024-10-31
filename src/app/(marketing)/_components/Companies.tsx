import Link from 'next/link';
import { NeonIcon } from '../_icons/Neon';
import { ClerkIcon } from '../_icons/Clerk';

export function Companies() {
  return (
    <div className="grid grid-cols-2 gap-16 md:grid-cols-3 xl:grid-cols-5">
      <Link href="https://neon.tech">
        <NeonIcon />
      </Link>
      <Link href="https://clerk.com">
        <ClerkIcon />
      </Link>
      <Link href="https://neon.tech">
        <NeonIcon />
      </Link>
      <Link href="https://clerk.com">
        <ClerkIcon />
      </Link>
      <Link href="https://neon.tech">
        <NeonIcon />
      </Link>
      <Link href="https://clerk.com">
        <ClerkIcon />
      </Link>
      <Link href="https://neon.tech">
        <NeonIcon />
      </Link>
      <Link href="https://clerk.com">
        <ClerkIcon />
      </Link>
      <Link href="https://neon.tech">
        <NeonIcon />
      </Link>
      <Link className="md:max-xl:hidden" href="https://clerk.com">
        <ClerkIcon />
      </Link>
    </div>
  );
}
