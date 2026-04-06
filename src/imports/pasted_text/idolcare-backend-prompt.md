# Full Prompt for Building the IdolCare Backend + Authentication System

Build a production-ready backend for an AI-powered caregiving platform called IdolCare.

The platform helps family members monitor loved ones through health tracking, mood analysis, memory preservation, caregiver wellness, reminders, and AI-powered insights.

The backend must be scalable, modular, and connected properly with the frontend dashboard.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT Authentication
* bcrypt for password hashing
* Socket.IO for real-time updates
* Cloudinary for image and voice uploads
* Multer for file uploads
* dotenv for environment variables
* Nodemailer for OTP/password reset emails
* OpenAI API for AI-generated suggestions

---

## Folder Structure

```txt
backend/
 ├── config/
 │    ├── db.js
 │    ├── cloudinary.js
 │    └── socket.js
 │
 ├── controllers/
 │    ├── authController.js
 │    ├── dashboardController.js
 │    ├── moodController.js
 │    ├── memoryController.js
 │    ├── healthController.js
 │    ├── alertController.js
 │    ├── caregiverController.js
 │    └── recommendationController.js
 │
 ├── middleware/
 │    ├── authMiddleware.js
 │    ├── roleMiddleware.js
 │    ├── errorMiddleware.js
 │    └── uploadMiddleware.js
 │
 ├── models/
 │    ├── User.js
 │    ├── FamilyMember.js
 │    ├── HealthMetric.js
 │    ├── MoodLog.js
 │    ├── Memory.js
 │    ├── Alert.js
 │    ├── Recommendation.js
 │    └── CaregiverStatus.js
 │
 ├── routes/
 │    ├── authRoutes.js
 │    ├── dashboardRoutes.js
 │    ├── moodRoutes.js
 │    ├── memoryRoutes.js
 │    ├── healthRoutes.js
 │    ├── alertRoutes.js
 │    ├── caregiverRoutes.js
 │    └── recommendationRoutes.js
 │
 ├── services/
 │    ├── aiService.js
 │    ├── emailService.js
 │    ├── alertService.js
 │    └── analyticsService.js
 │
 ├── utils/
 │    ├── generateToken.js
 │    ├── generateOTP.js
 │    └── calculateRisk.js
 │
 ├── .env
 ├── server.js
 └── package.json
```

---

## Authentication Features

Implement complete authentication flow:

### User Registration

* Name
* Email
* Password
* Role (patient, caregiver, family member)
* Phone number
* Optional profile picture

### User Login

* Email + password login
* Password must be hashed with bcrypt
* Generate JWT token after login
* Save token in cookies or local storage

### Forgot Password

* Send OTP or reset link to email
* Allow user to reset password securely

### Protected Routes

* Only logged-in users can access dashboard APIs
* Middleware should verify JWT token
* Different roles should have different access permissions

Example:

```txt
POST /api/auth/register
POST /api/auth/login
POST /api/auth/forgot-password
POST /api/auth/reset-password
GET /api/auth/profile
PUT /api/auth/update-profile
```

---

## Database Models

### User Model

```js
{
  name: String,
  email: String,
  password: String,
  role: String,
  phone: String,
  profilePicture: String,
  emergencyContact: String,
  createdAt: Date
}
```

### Health Metrics Model

```js
{
  userId: ObjectId,
  hydration: Number,
  heartRate: Number,
  bloodPressure: String,
  sleepHours: Number,
  activityLevel: Number,
  riskLevel: String,
  recordedAt: Date
}
```

### Mood Log Model

```js
{
  userId: ObjectId,
  mood: String,
  anxietyLevel: Number,
  stressLevel: Number,
  notes: String,
  createdAt: Date
}
```

### Memory Model

```js
{
  userId: ObjectId,
  title: String,
  description: String,
  imageUrl: String,
  voiceUrl: String,
  createdAt: Date
}
```

### Alert Model

```js
{
  userId: ObjectId,
  type: String,
  priority: String,
  message: String,
  status: String,
  createdAt: Date
}
```

---

## Dashboard APIs

The dashboard should not depend on fake data.

Create real APIs for:

```txt
GET /api/dashboard/:userId
GET /api/health/:userId
POST /api/health/update
GET /api/mood/:userId
POST /api/mood/add
GET /api/memories/:userId
POST /api/memories/add
GET /api/alerts/:userId
POST /api/alerts/create
GET /api/recommendations/:userId
GET /api/caregiver/:userId
```

---

## Dashboard Response Structure

Example dashboard response:

```json
{
  "user": {
    "name": "John Doe",
    "role": "patient"
  },
  "health": {
    "heartRate": 78,
    "hydration": 82,
    "sleepHours": 7,
    "riskLevel": "low"
  },
  "mood": {
    "currentMood": "calm",
    "stressLevel": 2
  },
  "alerts": [
    {
      "message": "Hydration level is dropping",
      "priority": "medium"
    }
  ],
  "recommendations": [
    "Drink more water",
    "Take a short walk",
    "Call a family member"
  ]
}
```

---

## Real-Time Features

Use Socket.IO for:

* Live health updates
* Instant alerts
* Caregiver notifications
* Mood changes
* Reminder popups

Example:

```txt
If heart rate crosses threshold -> emit emergency alert
If hydration drops below 40 -> notify caregiver
If stress remains high for 3 days -> trigger burnout warning
```

---

## AI Features

Create an AI recommendation engine that:

* Analyzes health patterns
* Suggests wellness improvements
* Detects unusual mood changes
* Recommends reminders and routines
* Generates daily summaries

Example API:

```txt
GET /api/recommendations/:userId
```

Response:

```json
{
  "summary": "The user appears stressed and mildly dehydrated.",
  "recommendations": [
    "Drink more water",
    "Reduce screen time",
    "Take a short walk outdoors"
  ]
}
```

---

## Frontend Integration Requirements

Frontend should:

* Store JWT token after login
* Send token in Authorization header
* Use separate API calls for each dashboard section
* Show loading states for cards
* Handle API errors gracefully
* Refresh dashboard data automatically

Example frontend API usage:

```js
axios.get('/api/dashboard/123', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
```

---

## Important Rules

* Do not use fake data once backend is connected
* Use proper MVC architecture
* Keep controllers small and clean
* Move business logic into services
* Use environment variables for secrets
* Validate all inputs
* Add proper error handling
* Add role-based route protection
* Make code production-ready and scalable

The final backend should work fully with authentication, dashboard integration, file uploads, AI suggestions, alerts, and real-time caregiver notifications.
