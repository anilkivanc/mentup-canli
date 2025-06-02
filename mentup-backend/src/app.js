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

const allowedOrigins = [
  "http://localhost:3000",
  "https://mentup-frontend-7u5v.onrender.com" // render link
];

// ✅ CORS
app.use(cors({
  origin: allowedOrigins, // Frontend adresleri
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
