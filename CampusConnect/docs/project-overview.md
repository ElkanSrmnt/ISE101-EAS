
# Campus Connect

## Project Purpose

Campus Connect is a mobile application designed
for students. Its purpose is to help students stay
connected and updated with campus activities and
important information.

## Target Users

The target users of this application are college
students and other students who want to receive
campus updates.

## Planned Features

1. Home Dashboard
2. Student Navigation
3. Forms and User Input
4. Campus Announcements
5. Event Information
6. User Authentication
7. Offline Support
8. Device Features

## Development Tools

- React Native
- Expo
- JavaScript / TypeScript
- Visual Studio Code
- Node.js and npm

## Week 5 — Expo Router Navigation

Week 5 continues the original Campus Connect app; no second Expo project was created. Expo Router maps files under `src/app/` to routes. The root layout, `src/app/_layout.tsx`, provides the Home, Announcements, and Profile tabs. The unused Expo starter Explore route remains available by URL but is hidden from the tab bar.

The Announcements tab has its own Stack in `src/app/announcements/_layout.tsx`. The list route reuses the Week 3–4 `AnnouncementPanel`, and selecting **View Details** opens `src/app/announcements/[id].tsx` with the announcement ID. Both screens use the shared sample data in `src/constants/announcements.ts`. The details route checks that the incoming ID is a single string and matches a known item; missing, malformed, and unknown IDs show a not-found message. Returning from a detail screen uses the Stack's Back navigation.

Tabs are used for the app's three primary destinations, and Stack is used for the list-to-detail flow. A Drawer is not needed for this small set of primary destinations; it could be considered later for secondary links such as help or settings. The app's `campusconnect` URL scheme supports custom-scheme routes such as `campusconnect://announcements/1`. Production Android App Links or iOS Universal Links would additionally require a controlled web domain and platform association files/configuration.

### Week 5 verification

From the `CampusConnect` project root:

1. Run `npx expo start` and open the project in Expo Go or a development build.
2. Open an announcement's details, then use Back to return to the list.
3. Mark an announcement as read and confirm the unread count changes.
4. Open an unknown route such as `/announcements/unknown` and confirm the not-found message appears.
5. On web, test `/announcements/1` directly; for an installed app, test `campusconnect://announcements/1` in a development build.
6. Week 5 screenshots: [announcement list](./evidence/week-5-announcements-list.png) and [announcement details](./evidence/week-5-announcement-detail.png). Existing Week 1–4 evidence is also in [`docs/evidence/`](./evidence/).


## Project File Descriptions

**package.json**

Contains the project information, scripts, and dependencies needed by the application.

**app.json**

Contains the configuration and settings of the Campus Connect application, such as the app name, version, icon, and platform settings.

**src/app/index.tsx**

Contains the initial screen and welcome message of Campus Connect.

**assets**

Stores images, icons, and other resources used in the application.

**.gitignore**

Lists files and folders that should not be included in the Git repository.

