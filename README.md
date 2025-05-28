# Heartland Roofing Solution

A comprehensive web application for Heartland Roofing, a roofing company serving the Midwest. This platform provides an elegant, modern interface for customers to learn about services, view completed projects, request quotes, and contact the company.

## Features

### Customer-Facing Features

- **Responsive Website** - Fully responsive design that works across desktop, tablet, and mobile devices
- **Service Information** - Detailed pages for all service offerings including:
  - Residential Roofing
  - Commercial Roofing
  - Roof Repair
  - Storm Damage Repair
  - Gutter Installation
  - Siding Installation
- **Online Quote Requests** - Customers can submit detailed quote requests through an online form
- **Contact Form** - Easy-to-use contact form for general inquiries
- **Project Gallery** - Showcase of completed projects with high-quality images
- **Testimonials** - Customer reviews and testimonials
- **FAQ Section** - Answers to frequently asked questions
- **24/7 Emergency Service** - Clearly displayed emergency contact information

### Administrative Features

- **Quote Request Management** - Backend system to manage and respond to incoming quote requests
- **Contact Form Submission Management** - System to track and respond to contact form submissions
- **API Endpoints** - RESTful API for handling form submissions and data retrieval
- **Database Integration** - PostgreSQL database with Drizzle ORM for data management

## Technology Stack

- **Frontend**:
  - React with TypeScript
  - Tailwind CSS for styling
  - Framer Motion for animations
  - Radix UI components
  - React Query for data fetching
  - Wouter for routing

- **Backend**:
  - Node.js with Express
  - TypeScript
  - PostgreSQL database
  - Drizzle ORM
  - Zod for validation

- **Development & Build Tools**:
  - Vite for frontend development and building
  - ESBuild for server bundling
  - TypeScript for type safety
  - Drizzle Kit for database migrations

## Getting Started

### Prerequisites

- Node.js 16+
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your environment variables (DATABASE_URL)
4. Run the development server:
   ```
   npm run dev
   ```

### Building for Production

```
npm run build
npm run start
```

## License

MIT 