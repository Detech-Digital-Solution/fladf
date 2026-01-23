export interface Project {
  id: string;
  title: string;
  description: string;
  content?: string; // Full text for detail view
  image: string;
  category: string;
  link?: string;
  location?: string;
  stats?: { label: string; value: string }[];
  allowDonation?: boolean;
  allowParticipation?: boolean;
  cmsLink?: string; // External link managed by CMS (e.g. Google Link)
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime?: string;
  author?: string;
  tagColor?: string;
  date: string;
  pdfUrl?: string; // Added for PDF viewer
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  type: 'Community' | 'Partnership' | 'Education' | 'Infrastructure' | 'Leadership' | 'Inspiration';
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  department: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  details: string[];
  link?: string;
  linkText?: string;
}