import { subscriptionTiersInOrder } from '@/data/subscriptionTiers';
import { PricingCard } from './PricingCard';

export function PricingSection() {
  return (
    <section id="pricing" className="bg-accent/5 px-8 py-16">
      <h2 className="mb-8 text-balance text-center text-4xl font-semibold">
        Pricing software which pays for itself 20x over
      </h2>
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 lg:grid-cols-4">
        {subscriptionTiersInOrder.map(t => (
          <PricingCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
