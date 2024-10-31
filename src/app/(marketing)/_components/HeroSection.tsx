import { Button } from '@/components/ui/button';
import { SignUpButton } from '@clerk/nextjs';
import { ArrowRightIcon } from 'lucide-react';

export function HeroSection() {
  return (
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
  );
}
