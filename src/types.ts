export type BoardLevel = 1 | 2 | 3 | 4;

export interface BoardMember {
  id: string;
  name: string;
  position: string;
  department: string;
  level: BoardLevel;
  image?: string;
  bio?: string;
  email?: string;
  linkedin?: string;
  instagram?: string;
  discord?: string;
  github?: string;
  rollNumber?: string;
}

export interface BrandingConfig {
  gdcLogoUrl?: string;
  snistLogoUrl?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  featured?: boolean;
}

export const GDC_INSTAGRAM_URL = 'https://www.instagram.com/gdc.snist?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==';

