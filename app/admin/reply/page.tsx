import type { Metadata } from 'next';
import AdminReplyClient from './AdminReplyClient';

export const metadata: Metadata = {
  title: 'Owner Reply Assistant | VCJ Jewellers Jaunpur',
  description: 'AI helper for Vimal Changal Jewellers to craft warm, professional Google review replies.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminReplyPage() {
  return <AdminReplyClient />;
}
