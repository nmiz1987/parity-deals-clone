type SubscriptionTier = 'Free' | 'Basic' | 'Standard' | 'Premium';

export type SubscriptionTierInfo = {
  name: string;
  priceInCents: number;
  maxNumberOfProducts: number;
  maxNumberOfVisits: number;
  canAccessAnalytics: boolean;
  canCustomizeBanner: boolean;
  canRemoveBranding: boolean;
};

type SubscriptionTiers = {
  [key in SubscriptionTier]: SubscriptionTierInfo;
};

export const subscriptionTiers: SubscriptionTiers = {
  Free: {
    name: 'Free',
    priceInCents: 0,
    maxNumberOfProducts: 1,
    maxNumberOfVisits: 5_000,
    canAccessAnalytics: false,
    canCustomizeBanner: false,
    canRemoveBranding: false,
  },
  Basic: {
    name: 'Basic',
    priceInCents: 1_900,
    maxNumberOfProducts: 5,
    maxNumberOfVisits: 10_000,
    canAccessAnalytics: true,
    canCustomizeBanner: false,
    canRemoveBranding: true,
  },
  Standard: {
    name: 'Standard',
    priceInCents: 4_900,
    maxNumberOfProducts: 30,
    maxNumberOfVisits: 100_000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
  },
  Premium: {
    name: 'Premium',
    priceInCents: 9_900,
    maxNumberOfProducts: 50,
    maxNumberOfVisits: 1_000_000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
  },
} as const;

export const subscriptionTiersInOrder = [
  subscriptionTiers.Free,
  subscriptionTiers.Basic,
  subscriptionTiers.Standard,
  subscriptionTiers.Premium,
] as const;
