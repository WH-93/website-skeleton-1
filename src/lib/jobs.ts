// Shared in-memory job store — both the jobs list and job detail pages read from this.
// In production this would be Prisma/SQL; here it's a module-level singleton for demo.

export interface Job {
  id: string; title: string; slug: string; company: string; location: string;
  type: string; sector: string; salary: string; status: string; description: string;
  applications: number; createdAt: string;
}

export const JOBS: Record<string, Job> = {
  '1': { id: '1', title: 'Audit Senior Manager', slug: 'audit-senior-manager', company: 'Top 20 Accountancy Practice', location: 'London', type: 'Full-time', sector: 'Practice', salary: '£75,000 — £90,000', status: 'Live', description: 'Leading audit engagements for a portfolio of key clients. Overseeing teams of auditors and managing client relationships from planning through to completion.', applications: 6, createdAt: '2026-05-15' },
  '2': { id: '2', title: 'Corporate Tax Director', slug: 'corporate-tax-director', company: 'Boutique Firm — Mayfair', location: 'London', type: 'Full-time', sector: 'Tax', salary: '£120,000 — £150,000', status: 'Live', description: 'Leading the corporate tax practice. Advising owner-managed businesses and PE-backed groups on complex tax structuring.', applications: 4, createdAt: '2026-05-20' },
  '3': { id: '3', title: 'VAT Manager — In-House', slug: 'vat-manager-in-house', company: 'PE-Backed Retail Group', location: 'Manchester', type: 'Full-time', sector: 'In-House Tax', salary: '£65,000 — £80,000', status: 'Live', description: 'Managing VAT compliance and advisory for a fast-growing retail group. Working closely with the Head of Tax on cross-border transactions.', applications: 3, createdAt: '2026-06-01' },
  '4': { id: '4', title: 'Employment Tax Senior', slug: 'employment-tax-senior', company: 'Big 4 Firm', location: 'Birmingham', type: 'Full-time', sector: 'Tax', salary: '£55,000 — £70,000', status: 'Live', description: 'Advising clients on employment tax matters including IR35, share schemes, and termination payments.', applications: 5, createdAt: '2026-06-02' },
  '5': { id: '5', title: 'Accounts Manager', slug: 'accounts-manager', company: 'Independent Practice', location: 'Bristol', type: 'Full-time', sector: 'Practice', salary: '£50,000 — £65,000', status: 'Draft', description: 'Managing a portfolio of SME clients. Preparing year-end accounts, management accounts, and tax computations.', applications: 0, createdAt: '2026-06-03' },
};

export function getJobsArray(): Job[] {
  return Object.values(JOBS);
}
