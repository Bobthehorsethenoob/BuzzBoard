# BuzzBoard
## Project Overview
 The purpose of BuzzBoard is to have students be able to join clubs, interact with members, to RSVP exclusive events and be notified of announcements. Also to have club owners be able to manage clubs, announcements, events, and members. The goal is to make the process for each action to be seamless and user friendly. A problem that BuzzBoard aims to solve for students is the lack of information surrounding clubs and events. For club owners, the problem to be solved is the management of clubs and events.

### Scope: 

1. **Sign Up**
   - Input: email (username), password  
   - Validation & Encryption  
   - Stores data in MongoDB  
   - Redirects to dashboard after success  

2. **Join a Club**
   - Search clubs by name or keyword  
   - Filter by category, size, or meeting frequency  
   - Sort alphabetically or by popularity  
   - Admin approval system for joining  

3. **Notifications**
   - Real-time updates using WebSocket  
   - Event reminders, announcements, and approvals  
   - Optional email notifications  

4. **Chat Room**
   - Real-time messaging for verified club members  
   - Message history display  
   - Admin moderation controls  

5. **Calendar of Events**
   - Upcoming events in calendar view  
   - RSVP functionality  
   - Sync/export to Google Calendar  

6. **Manage Club**
   - Edit club details, members, and events  
   - QR-code attendance tracking  

---

### 🚫 Out of Scope
- Club creation and approval system  
- School admin moderation features  
- Event polls and voting system  
- VIP RSVP system  
