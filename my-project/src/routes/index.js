export default function setRoutes(app) {
    const IndexController = require('../controllers/index').default;

    app.get('/', IndexController.index);
    app.get('/about', IndexController.about);
    app.get('/contact', IndexController.contact);
}