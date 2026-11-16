import type { CampusAnnouncement } from '../types/announcement';

export const CAMPUS_ANNOUNCEMENTS: CampusAnnouncement[] = [
  {
    id: '1',
    sender: 'REGISTRAR',
    title: 'Enrollment reminders for Second Semester',
    message: 'Please settle your accounts before the priority registration period starts next week.',
    read: false,
  },
  {
    id: '2',
    sender: 'STUDENT AFFAIRS',
    title: 'New Campus Orientation and Guidelines',
    message: 'All freshman students are required to attend the orientation at the main auditorium.',
    read: false,
  },
  {
    id: '3',
    sender: 'LIBRARY',
    title: 'Extended Operating Hours during Midterms',
    message: 'The main library will remain open until 10:00 PM starting next Monday.',
    read: false,
  },
];
