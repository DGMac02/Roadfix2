# 🛣️ RoadFix - Pothole Detection & Repair Platform

A modern, professional pothole detection and repair service platform built with Bootstrap, Node.js, and Supabase.

## 🎯 Features

- ✅ **Responsive Bootstrap 5 UI** - Mobile-first design
- ✅ **User Authentication** - Secure login/register with Supabase Auth
- ✅ **Service Management** - Order and track pothole repairs
- ✅ **Interactive Map** - View pothole locations with Leaflet.js
- ✅ **Service History** - Track all repair requests
- ✅ **Real-time Updates** - Supabase integration for live data

## 📂 Project Structure

```
RoadFix/
├── public/                      # Static files served by Express
│   ├── index.html              # Main HTML entry point (SPA)
│   ├── css/
│   │   └── style.css           # Custom Bootstrap styles
│   ├── js/
│   │   ├── config.js           # Supabase configuration
│   │   ├── app.js              # Main app logic & routing
│   │   ├── auth.js             # Authentication functions
│   │   └── pages.js            # Page templates & handlers
│   └── assets/                 # Images, fonts, etc.
├── server.js                   # Express.js server
├── package.json                # Dependencies
├── .env                        # Environment variables
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account (free tier available)

### Installation

1. **Clone/Navigate to project:**
   ```bash
   cd RoadFix
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Supabase:**
   - Update `.env` with your Supabase credentials:
     ```
     VITE_SUPABASE_URL=https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY=your-anon-key
     ```
   - Update `public/js/config.js` with the same credentials

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📚 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with service information |
| Login | `/login` | User authentication |
| Register | `/register` | New user registration |
| Dashboard | `/dashboard` | User dashboard with quick links |
| Services | `/services` | Order pothole repair services |
| History | `/history` | View service request history |
| Map | `/map` | Interactive map of pothole locations |
| Profile | `/profile` | User profile and settings |

## 🔧 Development

### Run with hot-reload:
```bash
npm run dev
```

### Build for production:
```bash
npm run build
```

## 🔐 Authentication

Uses **Supabase Auth (GoTrue)** for secure authentication:
- Email/password registration
- Session management
- Protected routes
- Automatic session persistence

## 📊 Database Schema

### Required Supabase Tables

**service_requests**
```sql
id: uuid (primary key)
user_id: uuid (foreign key → auth.users)
location: text
description: text
phone: text
status: text ('pending', 'in-progress', 'completed')
created_at: timestamp
updated_at: timestamp
```

**potholes**
```sql
id: uuid (primary key)
location: text
latitude: float
longitude: float
severity: text ('low', 'medium', 'high')
status: text ('reported', 'in-repair', 'repaired')
created_at: timestamp
updated_at: timestamp
```

## 🗺️ Map Integration

Uses **Leaflet.js** for interactive mapping:
- OpenStreetMap tiles
- Pothole markers with popups
- Responsive zoom/pan controls

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| express | Web server framework |
| cors | Cross-Origin Resource Sharing |
| dotenv | Environment configuration |
| bootstrap | CSS framework (CDN) |
| leaflet | Mapping library (CDN) |
| @supabase/supabase-js | Database & auth client (CDN) |

## 🎨 Styling

- **Framework:** Bootstrap 5 (CDN)
- **Color Scheme:** Purple/Blue gradient with modern accents
- **Responsive:** Mobile-first approach
- **Custom CSS:** [public/css/style.css](public/css/style.css)

## 🚢 Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Heroku
```bash
heroku create roadfix
git push heroku main
```

### Railway
Connect GitHub repo and deploy

## 🔒 Environment Variables

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Server
PORT=3000
NODE_ENV=development
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Cannot find module | Run `npm install` |
| Supabase connection fails | Check `.env` credentials |
| Map not loading | Verify Leaflet CDN accessible |
| Auth not working | Check Supabase project is active |

## 📖 Useful Resources

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)
- [Supabase Docs](https://supabase.com/docs)
- [Leaflet Docs](https://leafletjs.com/reference.html)
- [Express Docs](https://expressjs.com/)

## 📝 License

MIT © 2025 RoadFix Team

## 🤝 Contributing

Contributions welcome! Please follow the existing code style and structure.

## 📞 Support

For issues or questions:
- Email: support@roadfix.com
- Phone: (555) 123-ROAD

---

**Made with ❤️ for better roads**
