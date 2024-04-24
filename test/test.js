const request = require('supertest');
const app = require('../app');

describe('Contact Us API', () => {
    it('should create a new contact entry', (done) => {
        request(app)
            .post('/contact_us')
            .send({ name: 'Aliyan', email: 'aliyan@example.com', tel: '1234567890', textarea: 'Test message' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                if (res.body.status !== 'Ok') {
                    return done(new Error('Failed to create a new contact entry'));
                }
                done();
            });
    });

    it('should return status 404 for invalid endpoint', (done) => {
        request(app)
            .get('/invalid_endpoint')
            .expect(404, done);
    });


});
