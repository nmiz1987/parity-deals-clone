import { Companies } from './Companies';

export function TrustedCompaniesSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container flex flex-col gap-16 px-8 py-16 md:px-16">
        <h2 className="text-balance text-center text-3xl font-semibold">
          Trusted by the top modern companies
        </h2>
        <Companies />
      </div>
    </section>
  );
}
