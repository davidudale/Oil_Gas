
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  date: string;
  image: string;
}
