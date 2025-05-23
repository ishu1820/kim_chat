# Kim Chat

**Kim Chat** is a real-time chat application designed for fast, lightweight, and responsive communication—similar to WhatsApp or Discord. Built with **React**, **Node.js**, **Express**, **Socket.io**, and **MongoDB**, it supports private and group messaging, real-time updates, and modern UI/UX.

---
---



## 📌 Features

- ✅ Real-time chat using WebSockets (Socket.io)
- ✅ User authentication (login & signup)
- ✅ Private and group messaging
- ✅ Responsive UI across devices
- ✅ Scalable architecture with MongoDB for storage
- ✅ Built with a modern MERN stack

---

## 🛠️ Tech Stack

| Layer        | Technology       |
|--------------|------------------|
| Frontend     | React, Vite      |
| Backend      | Node.js, Express |
| Real-time    | Socket.io        |
| Database     | MongoDB (Mongoose) |
| Styling      | CSS Modules / Tailwind |

---
---





# 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or above)
- npm 
- MongoDB (local or cloud instance)



## 1.📂 Clone the Repository

```bash
git clone https://github.com/frustateduser/kim_chat.git
cd kim_chat
```



## 2.🔧 Backend Setup

```bash
cd kim_chat_backend
npm install
```

Create a `.env` file in the backend root:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/kimchat
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm start
```

---

## 3.🎨 Frontend Setup

```bash
cd ../kim_chat_frontend
npm install
```

Create a `.env` file in the frontend root:

```env
VITE_REACT_APP_SIGNUP_API_URL=http://localhost:3000/api/auth/signup
VITE_REACT_APP_LOGIN_API_URL=http://localhost:3000/api/auth/login
VITE_REACT_APP_PROFILE_API_URL=http://localhost:3000/api/user/profile
```

Start the backend server:

```bash
npm run dev
```

Open the app in the browser:

```
http://localhost:5173/
```

---
---


# 📁 Project Structure


```
kim_chat/
├── kim_chat_backend/
|   ├── node_modules/
|   ├── src/
|   |   ├── config/
│   |   ├── controllers/
|   |   ├── middleware/
│   |   ├── routes/
│   |   ├── models/
|   |   ├── socket/
│   |   └── server.js
|   ├── .env
|   ├── .gitignore
|   ├── package-lock.json
|   ├── package.json
|   └── README.md
|
├── kim_chat_frontend/
|   ├── node_modules/
|   ├── public/ 
|   ├── src/  
|   |   ├── api/
|   |   ├── assets/
|   |   ├── components/
|   |   ├── pages/
|   |   ├── style/
|   |   ├── index.css
|   |   └── main.jsx
|   ├── .env
|   ├── .gitignore
|   ├── eslint.config.js
|   ├── index.html
|   ├── package-lock.json
|   ├── package.json
|   ├── README.md
|   └── vite.config.js
├── .gitattribute
└── README.md

```

---
---

## 🧪 Future Enhancements

- ✅ Add message persistence and history
- ✅ Show online/offline user status
- ✅ Media and file sharing
- ✅ Read receipts & typing indicators
- ✅ Dark/light theme toggle
- ✅ Unit and integration testing
- ✅ Audio and Video Chat
- ✅ Group Chats

---

## 🧑‍💻 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Added feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

Inspired by modern chat platforms like Discord and WhatsApp. Built for learning, experimentation, and real-world deployment.

---

## 🔗 Contact

For questions or feedback, open an issue or reach out via GitHub.
