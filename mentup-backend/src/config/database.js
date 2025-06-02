const { Sequelize } = require('sequelize');
require('dotenv').config();

const { Sequelize } = require('sequelize');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';
const connectionString = isProduction
  ? process.env.DATABASE_URL
  : process.env.LOCAL_DATABASE_URL;

// 🔽 TAM BU SATIRDA LOG AT
console.log("📡 Bağlanmaya çalışılan connection string:");
console.log(connectionString);

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: isProduction
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {},
});

module.exports = sequelize;


// --- ESKİ KODLAR ---
// const DB_HOST = isProduction ? process.env.RENDER_DB_HOST : process.env.PG_HOST;
// const DB_PORT = isProduction ? process.env.RENDER_DB_PORT : process.env.PG_PORT;
// const DB_NAME = isProduction ? process.env.RENDER_DB_DATABASE : process.env.PG_DATABASE;
// const DB_USER = isProduction ? process.env.RENDER_DB_USER : process.env.PG_USER;
// const DB_PASS = isProduction ? process.env.RENDER_DB_PASSWORD : process.env.PG_PASSWORD;
// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
//     host: DB_HOST,
//     port: DB_PORT,
//     dialect: 'postgres',
//     logging: false,
//     dialectOptions: isProduction
//         ? {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false,
//             },
//         }
//         : {},
// });
// console.log('Parola Tipi:', typeof DB_PASS);
// console.log('Parola Değeri:', DB_PASS);
// console.log(`📦 Ortam: ${isProduction ? 'PRODUCTION (Render)' : 'DEVELOPMENT (Local)'}`);
// console.log('📁 Bağlantı yapılan veritabanı:', DB_NAME);
// console.log('🔗 Host:', DB_HOST);
// sequelize.authenticate()
//     .then(() => console.log('📦 PostgreSQL bağlantısı başarılı!'))
//     .catch((err) => console.error('❌ PostgreSQL bağlantı hatası:', err));

//module.exports = sequelize;
