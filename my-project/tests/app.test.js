const request = require('supertest');
const app = require('../src/app'); // تأكد من أن المسار صحيح

describe('اختبارات وحدة للتطبيق', () => {
    it('يجب أن تعيد الصفحة الرئيسية حالة 200', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    it('يجب أن تعيد صفحة غير موجودة حالة 404', async () => {
        const response = await request(app).get('/غير-موجود');
        expect(response.status).toBe(404);
    });

    // يمكنك إضافة المزيد من الاختبارات هنا
});