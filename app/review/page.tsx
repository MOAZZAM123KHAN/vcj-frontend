import type { Metadata } from 'next';
import ReviewClient from './ReviewClient';

export const metadata: Metadata = {
  title: 'Share Your Experience | Vimal Changal Jewellers Jaunpur',
  description:
    'Write and share your authentic Google review for Vimal Changal Jewellers, Jaunpur. Get quick review suggestions in Hinglish, Hindi, or English.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReviewPage() {
  return <ReviewClient />;
}
