# RoadFix - Bootstrap Conversion

This project has been successfully converted from a .NET Blazor application to a pure **Bootstrap HTML/CSS/JavaScript** frontend with Node.js Express backend.

## 🎯 Project Structure

```
RoadFix/
├── wwwroot/                    # Static website files
│   ├── index.html             # Main entry point (SPA)
│   ├── css/
│   │   └── app.css           # Bootstrap custom styles
│   ├── js/
│   │   ├── app.js            # Main app navigation and routing
│   │   ├── auth.js           # Authentication functions
│   │   └── mapbox.js         # Map initialization (Leaflet)
│   └── [other assets]
├── server.js                   # Express.js server
├── package.json               # Node.js dependencies
├── .env                       # Environment configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project root:
   ```bash
   cd RoadFix
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Supabase:
   - Update `.env` with your Supabase URL and API key
   - Update `js/app.js` line 2-3 with your Supabase credentials

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit: `http://localhost:5000`

## 🔧 Development

For hot-reload during development:
```bash
npm run dev
```

## 📚 Features

### Pages
- **Home** - Landing page with service information
- **Login** - User authentication via Supabase
- **Register** - New user registration
- **Dashboard** - User dashboard with quick access to services
- **Services** - Order pothole repair services
- **History** - View service request history
- **Map** - Interactive map showing pothole locations

### Technology Stack
- **Frontend**: Bootstrap 5, HTML5, Vanilla JavaScript
- **Backend**: Express.js, Node.js
- **Database**: Supabase (PostgreSQL)
- **Mapping**: Leaflet.js
- **Authentication**: Supabase Auth (GoTrue)

## 🔐 Authentication

The app uses Supabase's built-in authentication system:
- Sign up and login functionality
- Session management via localStorage
- Protected routes require authentication

## 🗺️ Map Integration

The map page uses Leaflet.js to display:
- Interactive map centered on Johannesburg
- Pothole markers fetched from Supabase database

## 📝 Configuration

### Environment Variables (.env)
```
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
PORT=5000
NODE_ENV=development
```

## 📦 Dependencies

- **express** - Web framework
- **cors** - Cross-Origin Resource Sharing
- **dotenv** - Environment configuration

## 🎨 Styling

All styles are in `wwwroot/css/app.css` using:
- Bootstrap 5 framework
- Custom CSS for unique components
- Responsive design for mobile/tablet/desktop
- Gradient backgrounds and modern UI

## 🚧 Database Tables (Supabase)

The app expects these tables in Supabase:

### service_requests
```sql
- id (uuid)
- user_id (uuid)
- location (text)
- description (text)
- phone (text)
- status (text) - pending, in-progress, completed
- created_at (timestamp)
```

### potholes
```sql
- id (uuid)
- location (text)
- latitude (float)
- longitude (float)
- status (text)
- created_at (timestamp)
```

## 🔄 API Integration

All database operations use Supabase JavaScript client:
```javascript
import { createClient } from '@supabase/supabase-js'
```

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
npm install
```

### Supabase connection issues
- Verify `.env` credentials
- Check Supabase project is active
- Ensure CORS is configured in Supabase settings

### Map not loading
- Verify Leaflet CDN is accessible
- Check browser console for errors
- Ensure latitude/longitude are valid

## 📖 Additional Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Supabase Documentation](https://supabase.com/docs)
- [Leaflet.js Documentation](https://leafletjs.com/)
- [Express.js Guide](https://expressjs.com/)

## 📄 License

RoadFix © 2025. All rights reserved.
