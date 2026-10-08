import React from 'react';
import type { Metadata } from 'next';
import { VisionAndMissionView } from './VisionAndMissionView';

export const metadata: Metadata = {
  title: 'Vision and Mission',
  description: 'Driven by purpose and focused on progress. Discover Neparica’s customer-centric vision and mission delivering reliable, innovative, and affordable SMB IT solutions.'
};

export default function VisionAndMissionPage() {
  return <VisionAndMissionView />;
}
