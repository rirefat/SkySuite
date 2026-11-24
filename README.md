# 🏨 SkySuite — Full-Stack Hotel Booking Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0--rc-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.10-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Auth.js](https://img.shields.io/badge/Auth.js-v5_Beta-purple?style=for-the-badge&logo=auth0)](https://authjs.dev/)

**SkySuite** is a modern, high-performance hotel reservation platform built with an **industry-grade Layered Architecture** on top of **Next.js 15 (App Router)**, **React 19**, and **MongoDB**. Designed to streamline the travel booking experience, SkySuite enables guests to effortlessly discover accommodations, check live room availability, book stays with automated pricing calculations, leave property reviews, and track reservations through a dedicated user dashboard.

---

## 🌟 Core Features

### 🔍 1. Smart Hotel Discovery & Search
- **Destination Search**: Search properties across popular destinations (Paris, Puglia, Catania, Calvi, Palermo, Frejus) or browse all locations globally.
- **Stay Dates Selection**: Intuitive check-in and check-out date selectors with validation preventing invalid departure dates.
- **Dynamic URL Synchronization**: Search state synchronizes with URL query parameters for seamless bookmarking and sharing.

### 🎛️ 2. Multi-Criteria Filtering & Sorting
- **Star Category Filtering**: Filter hotels across 1 to 5-star ratings simultaneously.
- **Batch Amenities Filtering**: Filter properties offering Wi-Fi, Swimming Pools, Taxi Services, and Tour Guides, powered by optimized batch MongoDB queries.
- **Price Sorting**: Sort property listings dynamically by average nightly rate (Low to High or High to Low).

### 🛡️ 3. Mathematical Booking Collision Protection
- **Interval Overlap Verification**: Rigorous date collision algorithm (`startA < endB && endA > startB`) that detects any overlapping reservation window.
- **Live Vacancy Badges**: Real-time visual feedback displaying `Reserved ‼️` and disabling checkout when dates collide with an existing booking.

### 💳 4. Booking & Checkout Engine
- **Automated Pricing**: Automatically computes per-night rate averages `(highRate + lowRate) / 2` multiplied by the calculated duration of stay.
- **Simulated Payment Gateway**: Secure checkout form capturing guest details, dates, and card credentials with feedback and redirection.
- **Server-Side Validation**: Backend validation ensuring properties cannot be double-booked during concurrent requests.

### 📝 5. Live Reviews & Ratings System
- **Guest Feedback**: Displays verified guest reviews with star ratings and timestamps.
- **Instant Review Submission**: Authenticated guests can submit ratings (1 to 5 stars) and textual reviews, immediately persisted via Next.js Server Actions with on-demand cache revalidation.
- **Dynamic Rating Summaries**: Automated weighted average score calculation (e.g., *Very Good*, *Average*, *Poor*).

### 📊 6. User Bookings Dashboard
- **Upcoming Reservations**: Displays confirmed future bookings with check-in/check-out dates, city, and total cost breakdown.
- **Past Bookings History**: Archive of previous completed stays.
- **Route Guard Protection**: Protected route ensuring unauthenticated visitors are redirected to the sign-in screen.

### 👤 7. User Profile Management
- **Profile Overview**: Displays user avatar, verified account badge, and contact details.
- **Live Profile Editing**: In-place profile updates (such as name modification) with optimistic updates powered by Server Actions.

### 🔐 8. Authentication & Authorization
- **Multi-Provider Sign-In**: Supports Credentials (email/password) as well as **Google** and **Facebook OAuth**.
- **Cryptographic Security**: Passwords hashed with `bcryptjs` using 10 salt rounds.
- **JWT Session Strategy**: Stateless, secure sessions with `NextAuth.js v5 (Auth.js)`.

---

## 🏗️ System Architecture

SkySuite implements a **Layered Clean Architecture** that enforces clear separation between presentation, business logic, and persistence:

```
┌────────────────────────────────────────────────────────┐
│                   Presentation Layer                   │
│   Next.js 15 App Router (Server & Client Components)   │
│         app/(auth)  •  app/(home)  •  components/      │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│              Controller & Action Layer                 │
│      Next.js Server Actions (actions/index.js)         │
│          API Route Handlers (app/api/auth/*)           │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│              Business Logic Service Layer              │
│       hotel.service.js      •    booking.service.js    │
│       user.service.js       •    review.service.js     │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                Data Access & Modeling                  │
│       Mongoose Models (database/models/*)              │
│       Cached Connection Pool (database/service/mongo)  │
│       Native Mongo Client (database/lib/mongoClient)   │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                    MongoDB Cluster                     │
└────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technologies Used

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15.0.3](https://nextjs.org/) | App Router, Server Components (RSC), Route Handlers, Server Actions |
| **Frontend** | [React 19 RC](https://react.dev/) | Component architecture, client-side hooks, Suspense |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Responsive, modern utility-first UI styling |
| **Database** | [MongoDB](https://www.mongodb.com/) & [Mongoose 8](https://mongoosejs.com/) | Document database with schema enforcement & connection pooling |
| **Auth** | [Auth.js v5 Beta](https://authjs.dev/) | NextAuth.js v5 with JWT session strategy & MongoDB adapter |
| **Security** | [bcryptjs](https://www.npmjs.com/package/bcryptjs) | Industry-standard password hashing |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | Feather, Material, and FontAwesome icons |

---

## 📂 Project Structure

```
SkySuite/
├── actions/                  # Server Actions (Mutations, reviews, profile)
├── app/                      # Next.js 15 App Router
│   ├── (auth)/               # Auth route group (login, registration)
│   ├── (home)/               # Main application route group
│   │   ├── about/            # About Us page
│   │   ├── bookings/         # User reservations dashboard (Protected)
│   │   ├── contact/          # Contact Us page
│   │   ├── hotels/           # Hotel listings & search results
│   │   │   └── [id]/         # Hotel details, gallery, reviews
│   │   │       └── payment/  # Reservation payment & checkout (Protected)
│   │   ├── user/[id]/        # User profile page
│   │   ├── error.js          # Route group error boundary
│   │   └── not-found.js      # 404 page handler
│   ├── api/                  # API endpoints (auth, payment, register)
│   ├── globals.css           # Global Tailwind CSS definitions
│   └── loading.js            # Global loading spinner
├── components/               # Modular UI Components
│   ├── auth/                 # LoginForm, RegistrationForm, SocialLogins
│   ├── bookings/             # BookingCard, PastBookings, UpcomingBookings
│   ├── filter/               # AmenitiesFilter, Filter, HotelSort, StarCategoryFilter
│   ├── hotel/                # HotelCard, HotelList, HotelReviewsRatings
│   │   └── details/          # Gallery, Overview, Reviews, ReviewForm, Summary
│   ├── payment/              # PaymentForm
│   ├── search/               # Search component
│   └── user/                 # UserInfo, UserProfileCard
├── database/
│   ├── lib/                  # Native MongoDB client for NextAuth
│   ├── models/               # Mongoose schemas (Hotels, Users, Bookings, Reviews)
│   └── service/              # Cached Mongoose connection pool
├── services/                 # Business logic service layer
│   ├── hotel.service.js      # Hotel queries, filtering & pricing
│   ├── booking.service.js    # Overlap collision detection & booking creation
│   ├── user.service.js       # User retrieval & profile mutations
│   └── review.service.js     # Reviews & ratings aggregation
├── utils/                    # Utility helpers (date intervals, ID mappers)
├── auth.js                   # NextAuth v5 configuration
└── next.config.mjs           # Next.js configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** `v18.17+` (v20+ recommended)
- **npm**, **yarn**, or **pnpm**
- **MongoDB** instance (Local or MongoDB Atlas cluster)

### 1. Clone the Repository
```bash
git clone https://github.com/rirefat/skysuite.git
cd skysuite
```

### 2. Install Dependencies
```bash
npm install --legacy-peer-deps
# or
yarn install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory by copying the `.env.example` template:

```bash
cp .env.example .env
```

Fill in your configuration credentials:
```env
# Application URL
NEXT_PUBLIC_ROOT_PAGE=http://localhost:3000

# Database
MONGODB_CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster0.mongodb.net/skysuite?retryWrites=true&w=majority

# NextAuth Secret (Generate via `openssl rand -base64 32`)
AUTH_SECRET=your_auth_secret_at_least_32_characters_long

# OAuth Providers (Optional for local testing)
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
AUTH_FACEBOOK_ID=your_facebook_app_id
AUTH_FACEBOOK_SECRET=your_facebook_app_secret
```

### 4. Run the Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 🔑 Default Credentials (Demo)

For quick demonstration and testing:
- **Email:** `general-user@gmail.com`
- **Password:** `12345`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
