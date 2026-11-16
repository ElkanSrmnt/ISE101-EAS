export type AnnouncementCategory = 'Academic' | 'Events' | 'Notice';

export interface Announcement {
  id: string;
  title: string;
  category: AnnouncementCategory;
  read: boolean;
}

export interface CampusAnnouncement {
  id: string;
  sender: string;
  title: string;
  message: string;
  read: boolean;
}