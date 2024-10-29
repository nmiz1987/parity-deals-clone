import Feature from '@/components/Feature';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SubscriptionTierInfo } from '@/data/subscriptionTiers';
import { formatCompactNumber } from '@/lib/formatters';
import { SignUpButton } from '@clerk/nextjs';

export default function PricingCard({
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding,
  maxNumberOfProducts,
  maxNumberOfVisits,
  name,
  priceInCents,
}: SubscriptionTierInfo) {
  const isMostPopular = name === 'Standard';
  return (
    <Card>
      <CardHeader>
        <div className="mb-8 font-semibold text-accent">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /month
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="w-full rounded-lg text-lg"
            variant={isMostPopular ? 'accent' : 'default'}>
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <Feature className="font-bold">
          {maxNumberOfProducts}{' '}
          {maxNumberOfProducts === 1 ? 'product' : 'products'}
        </Feature>
        <Feature>PPP discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canRemoveBranding && <Feature>Remove easy PPP branding</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
      </CardFooter>
    </Card>
  );
}
