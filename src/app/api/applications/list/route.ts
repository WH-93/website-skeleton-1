import { NextResponse } from 'next/server';

// In production: import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

const MOCK_APPLICATIONS = [
  {
    id: '1',
    firstName: 'Sarah', lastName: 'Chen', email: 'sarah.chen@email.com',
    phone: '07700 900001', cvKey: 'cvs/1717500000000-sarah-chen-cv.pdf', cvName: 'Sarah_Chen_CV.pdf',
    jobTitle: 'Audit Senior Manager', jobCompany: 'Top 20 Accountancy Practice',
    status: 'Applied', createdAt: '2026-06-01T09:30:00Z',
  },
  {
    id: '2',
    firstName: 'James', lastName: 'Wright', email: 'j.wright@email.com',
    phone: '07700 900002', cvKey: 'cvs/1717500000001-james-wright-cv.pdf', cvName: 'James_Wright_Resume.pdf',
    jobTitle: 'Corporate Tax Director', jobCompany: 'Boutique Firm — Mayfair',
    status: 'Screened', createdAt: '2026-06-02T14:15:00Z',
  },
  {
    id: '3',
    firstName: 'Amina', lastName: 'Hassan', email: 'amina.h@email.com',
    phone: null, cvKey: 'cvs/1717500000002-amina-hassan-cv.docx', cvName: 'Amina_Hassan_CV.docx',
    jobTitle: 'Audit Senior Manager', jobCompany: 'Top 20 Accountancy Practice',
    status: 'Interview', createdAt: '2026-06-03T11:00:00Z',
  },
  {
    id: '4',
    firstName: 'Tom', lastName: 'Barker', email: 'tom.barker@email.com',
    phone: '07700 900003', cvKey: 'cvs/1717500000003-tom-barker-cv.pdf', cvName: 'Tom_Barker_CV.pdf',
    jobTitle: 'VAT Manager — In-House', jobCompany: 'PE-Backed Retail Group',
    status: 'Applied', createdAt: '2026-06-04T08:45:00Z',
  },
  {
    id: '5',
    firstName: 'Elena', lastName: 'Rossi', email: 'elena.rossi@email.com',
    phone: null, cvKey: 'cvs/1717500000004-elena-rossi-cv.pdf', cvName: 'Elena_Rossi_Resume.pdf',
    jobTitle: 'Employment Tax Senior', jobCompany: 'Big 4 Firm',
    status: 'Offer', createdAt: '2026-05-28T16:20:00Z',
  },
];

export async function GET() {
  return NextResponse.json(MOCK_APPLICATIONS);
}
