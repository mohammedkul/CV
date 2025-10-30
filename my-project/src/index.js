// هذا الملف هو نقطة الدخول للتطبيق. يقوم بتهيئة الخادم ويستدعي إعدادات التطبيق.

const express = require('express');
const { setRoutes } = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

// إعداد الوسطاء (middleware)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// إعداد المسارات
setRoutes(app);

// بدء تشغيل الخادم
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});