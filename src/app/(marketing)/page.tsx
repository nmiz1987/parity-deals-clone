import { Button } from '@/components/ui/button';
import { SignUpButton } from '@clerk/nextjs';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { NeonIcon } from './_icons/Neon';
import { ClerkIcon } from './_icons/Clerk';
import { subscriptionTiersInOrder } from '@/data/subscriptionTiers';
import PricingCard from './_components/PricingCard';

export default function HomePage() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center gap-8 text-balance bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] px-4 text-center">
        <h1 className="text-6xl font-bold tracking-tight lg:text-7xl xl:text-8xl">
          Price Smarter, Sell Bigger!
        </h1>
        <p className="max-w-screen-xl text-lg lg:text-3xl">
          Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic pricing
        </p>
        <SignUpButton>
          <Button className="flex gap-2 rounded-xl p-6 text-lg">
            Get started for free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container flex flex-col gap-16 px-8 py-16 md:px-16">
          <h2 className="text-balance text-center text-3xl font-semibold">
            Trusted by the top modern companies
          </h2>
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
        </div>
      </section>
      <section id="pricing" className="bg-accent/5 px-8 py-16">
        <h2 className="text-balance text-center text-4xl font-semibold">
          Pricing software which pays for itself 20x over
        </h2>
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 lg:grid-cols-4">
          {subscriptionTiersInOrder.map(t => (
            <PricingCard key={t.name} {...t} />
          ))}
        </div>
      </section>
    </>
  );
}
