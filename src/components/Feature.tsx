import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

interface FeatureProps {
  children: React.ReactNode;
  className?: string;
}

export default function Feature({ children, className }: FeatureProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <CheckIcon className="size-4 rounded-full bg-accent/25 stroke-accent p-0.5" />
      <span>{children}</span>
    </div>
  );
}
