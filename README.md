# SkySuite: Hotel Booking Platform

SkySuite is a dynamic and user-friendly hotel booking platform, designed to simplify the process of finding, comparing, and reserving accommodations. With advanced features, secure booking options, and a seamless user experience, SkySuite is the ultimate tool for travelers and hoteliers alike.


## Key Features

### User Features
- **Search and Filtering**  
  - Advanced filters for location, price, amenities, and availability.  
  - Dynamic listings updated in real time based on user preferences.

- **Room Details and Reviews**  
  - Detailed descriptions, high-quality images, and customer reviews for each property.  

- **Secure Booking System**  
  - User-friendly booking process.

- **User Authentication**  
  - Secure login and signup using email or social accounts.  
  - JWT-based session management for enhanced security.

- **Interactive Maps**  
  - Integrated with Google Maps for precise property locations and easy navigation.


### Technical Features
- **Built with Modern Tools**  
  - **Frameworks:** Next.js 14 and React for a high-performance, scalable architecture.  
  - **Styling:** Tailwind CSS for responsive and efficient design.  
  - **Database:** MongoDB for scalable data storage.

- **Performance Optimization**  
  - Server-side rendering (SSR) for faster load times and improved SEO.  
  - Lazy loading for images and components to enhance page performance.

- **Mobile-Friendly Design**  
  - Fully responsive and optimized for all screen sizes.

## Technologies Used
- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:** Next.js API Routes
- **Database:** MongoDB  
- **Authentication:** JWT for secure sessions  

## Setup Instructions

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rirefat/skysuite.git
   cd skysuite
    ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3. Configure environment variables: Create a .env file in the project root and add the following with your keys:
    ```env
    NEXT_PUBLIC_ROOT_PAGE=
    MONGODB_CONNECTION_STRING=
    AUTH_SECRET=
    AUTH_GOOGLE_ID=
    AUTH_GOOGLE_SECRET=
    AUTH_FACEBOOK_ID=
    AUTH_FACEBOOK_SECRET=
    ```
4. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
5. Open the app in your browser at `http://localhost:3000`.


### Special Note:
Default Login Credential:
- email: general-user@gmail.com
- password: 12345