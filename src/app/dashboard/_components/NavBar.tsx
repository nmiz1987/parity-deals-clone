import { BrandLogo } from '@/components/BrandLogo';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export function DashboardNavBar() {
  return (
    <header className="flex bg-background py-4 shadow">
      <nav className="container flex items-center gap-10">
        <Link href="/dashboard" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link href="/dashboard/products" className="mr-auto">
          Products
        </Link>
        <Link href="/dashboard/analytics" className="mr-auto">
          Analytics
        </Link>
        <Link href="/dashboard/subscription" className="mr-auto">
          Subscription
        </Link>
        <UserButton />
      </nav>
    </header>
  );
}
