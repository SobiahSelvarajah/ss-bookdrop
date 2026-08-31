# 📚 BookDrop

BookDrop is a full-stack book recommendation subscription service designed to make discovering your next read easier and enjoyable.

Users choose their favourite genre and subscribe with their email address to receive personalised weekly book recommendations directly in their inbox.

The project focuses on creating a polished, low-friction subscription experience while demonstrating form validation, database persistence, transactional email and responsive UI development.



## 🔗 Live Demo

**[View BookDrop Live](https://ss-bookdrop.vercel.app)**



## ✨ Features

- Fully responsive landing page across mobile, tablet and desktop
- Genre-based book subscription signup
- Client and server-side form validation
- Persistent subscriber storage using MySQL
- Duplicate subscription handling
- Transactional confirmation emails
- Loading, validation and success states
- Animated testimonial carousel
- Responsive desktop and mobile navigation
- Smooth anchor navigation across routes
- Accessible form feedback and dialog interactions 
- Dark, editorial-inspired responsive interface



## 🛠 Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React

### Forms & Validation

- React Hook Form
- Zod

### Backend & Database

- Next.js Server Actions
- Prisma ORM
- MySQL
- Railway

### Email

- Resend



## ⚙️ How It Works

1. User enters their email address and selects their favourite genre.
2. React Hook Form and Zod validate the submitted data.
3. A Next.js Server Action performs server-side validation.
4. The subscription is persisted to a MySQL database using Prisma.
5. Duplicate email addresses are handled through the database constraint and returned to the user as form feedback.
6. After a successful subscription, Resend sends a confirmation email.
7. The interface displays a success state confirming the subscription.



## 💡 Technical Decisions

### Server-side validation

Even though the form is validated in the browser for immediate feedback, subscription data is validated again on the server before being written to the database.

### Duplicate subscription handling

Email addresses are uniquely constrained in the database. Prisma errors are handled by the Server Action and converted into user-friendly form feedback.

### Email failure handling

Confirmation email delivery is handled separately from subscription creation. If the database write succeeds but the email provider fails, the subscription remains successful rather than asking the user to submit again which potentially could trigger a confusing duplicate-subscription flow.

### Reusable components

Shared UI and branding elements are separated into reusable components to keep the interface consistent across the application.



## 🚀 Getting Started

Clone the repository and install the dependencies: 

```bash
npm install
```

Create a `.env` file in the project root and provide the required environment variables:

```env
DATABASE_URL="your_database_connection_string"
RESEND_API_KEY="your_resend_api_key"
```

Then start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.



## 📦 Production Build

To create an optimised production build:

```bash
npm run build
```

Then run the production server with:

```bash 
npm start
```



## 🔐 Environment Variables

BookDrop requires the following environment variables:

|     Variable     |                   Purpose                 |
|   ------------   |        ---------------------------        |
|  `DATABASE_URL`  |  Connection string for the MySQL database |
| `RESEND_API_KEY` | API key used to send transactional emails |

> **Warning:** Environment variables should never be committed to source control.



## 📱 Responsive Design

BookDrop was designed and tested across mobile, tablet and desktop layouts. Components adapt across breakpoints to maintain readable typography, accessible controls and consistent spacing.



## 📌 Project Status 

BookDrop is a feature-complete and deployed on Vercel.



## 📄 Licence

This project is licenced under the MIT Licence.