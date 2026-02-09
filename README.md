# 🎬 QuickShow

> **Your ultimate destination for seamless movie discovery and booking.**

Check Out here: https://quickshow-movie-tickets.vercel.app/

**QuickShow** is a modern, full-stack web application aimed at providing users with a fast and intuitive way to browse movies, check details, and make bookings. Built with the latest web technologies, it ensures a premium user experience with top-tier performance.

---

## 🚀 Features

-   **🎥 Comprehensive Movie Database**: Powered by TMDB to fetch real-time movie data.
-   **🔐 Secure Authentication**: Seamless sign-up and login experience using **Clerk**.
-   **💳 Secure Payments**: Integrated **Stripe** payment gateway for safe transactions.
-   **⚡ Real-time Updates**: Event-driven architecture using **Inngest**.
-   **📱 Fully Responsive**: crafted with **Tailwind CSS v4** for a stunning mobile-first design.
-   **📧 Email Notifications**: Automatic email updates via **Nodemailer**.
-   **🖼️ Media Optimization**: Efficient image and media handling with **Cloudinary**.

---

## 🛠️ Tech Stack

### Frontend
-   **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Routing**: [React Router v7](https://reactrouter.com/)
-   **Auth**: [Clerk](https://clerk.com/)
-   **State/API**: [Axios](https://axios-http.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)

### Backend
-   **Runtime**: [Node.js](https://nodejs.org/)
-   **Framework**: [Express.js v5](https://expressjs.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
-   **Payments**: [Stripe](https://stripe.com/)
-   **Background Jobs**: [Inngest](https://www.inngest.com/)

---

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
Make sure you have the following installed:
-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [MongoDB](https://www.mongodb.com/) (Local or Atlas)
-   [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Kartik-Raut-12/QuickShow.git
    cd QuickShow
    ```

2.  **Install Client Dependencies**
    ```bash
    cd client
    npm install
    ```

3.  **Install Server Dependencies**
    ```bash
    cd ../server
    npm install
    ```

### Environment Configuration

We have provided `.env.example` files in both directories. You need to create your own `.env` files.

1.  **Client (.env)**
    Navigate to `client/` and create a `.env` file:
    ```env
    VITE_BASE_URL=http://localhost:3000
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
    VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
    VITE_CURRENCY=$
    ```

2.  **Server (.env)**
    Navigate to `server/` and create a `.env` file:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    CLERK_PUBLISHABLE_KEY=your_clerk_key
    CLERK_SECRET_KEY=your_clerk_secret
    STRIPE_SECRET_KEY=your_stripe_secret
    INNGEST_SIGNING_KEY=your_inngest_key
    # Add other keys from .env.example
    ```

### Running the Application

1.  **Start the Server** (Terminal 1)
    ```bash
    cd server
    npm run server
    ```
    > Server runs on `http://localhost:3000`

2.  **Start the Client** (Terminal 2)
    ```bash
    cd client
    npm run dev
    ```
    > Client runs on `http://localhost:5173`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Kartik-Raut-12">Kartik Raut</a></sub>
</div>
