const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const accountSettingsRouter = require('./routes/accountSettingsRoutes'); 
const authRoutes = require('./routes/authRoutes');
const chatroomRoutes = require('./routes/chatroomRoutes');
const profileRoutes = require('./routes/profileRoutes');
const applyMentorshipRoutes = require('./routes/applyMentorshipRoutes');
const adminPanelRoutes = require('./routes/adminPanelRoutes');
const userRoleRoutes = require('./routes/userRoleRoutes');
const messageRoutes = require('./routes/messageRoutes');
const availabilitySlotRoutes = require('./routes/availabilitySlotRoutes');
const appointmentsRoutes = require('./routes/appointmentsRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const mentorReviewRoutes = require('./routes/mentorReviewRoutes');
const path = require('path');

const app = express();

// --- ESKİ CORS ---
// const allowedOrigins = [
//   "http://localhost:3000",
//   "https://mentup-canli.onrender.com" // render link
// ];
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true, // Eğer cookie ya da token taşınıyorsa bu true olmalı
// }));
// app.options("*", cors());

// --- YENİ CORS ---
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.options("*", cors()); // ✅ Tüm route'lara CORS header'ı ekler

// ✅ JSON body limit artırıldı
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Route'lar
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/accountSettings', accountSettingsRouter);
app.use('/mentor', applyMentorshipRoutes);
app.use('/mentor', mentorRoutes);
app.use('/mentor/availability', availabilitySlotRoutes);
app.use('/admin', adminPanelRoutes);
app.use('/user-role', userRoleRoutes);
app.use('/appointments', appointmentsRoutes);
app.use('/reviews', mentorReviewRoutes);
app.use('/chatroom', chatroomRoutes);
app.use('/message', messageRoutes)

module.exports = app;
