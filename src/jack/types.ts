export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
  badge?: string;
  pricing?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  name: string;
  col1TopImage: string;
  col1BottomImage: string;
  col2Image: string;
  liveUrl?: string;
  metricsBadge?: string;
  highlights?: string[];
}
