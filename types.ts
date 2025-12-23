import React from 'react';

export type Page = 'home' | 'solutions' | 'tools' | 'resources';

export interface NavItem {
  label: string;
  href: string;
  page?: Page;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SolutionItem {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  ctaText?: string;
}

export interface CaseStudyItem {
  brand: string;
  title: string;
  imageSrc: string;
  logoSrc?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  logoSrc: string;
}