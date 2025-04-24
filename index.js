const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
}));

const servedJson = [
    {
        "event_id": "65029c5bdf6918136df27e51",
        "user_id": "66260c20eb130d522e604ed3",
        "qr_code": "http://91.205.173.97:8601/public/qr_images/66260c20eb130d522e604ed3.png",
        "reg_id": "231232121",
        "role": "VISITOR",
        "meeting_availability": true,
        "is_exhibitor": false,
        "is_lunch": true,
        "is_awards": false,
        "participant_type": [
            "EXHIBITOR",
            "SPEAKER",
            "AWARD_PRESENTATION",
            "JURY"
        ],
        "status": "ACTIVE",
        "contact": "9805798997",
        "name": "Pranav Bhasin",
        "email": "pranav@electrovese.com",
        "category": "Retail Consulting",
        "company_name": "Electrovese Solutions Pvt Ltd",
        "city": "",
        "country": "",
        "designation": "Director and CEO",
        "state": "",
        "image": "http://91.205.173.97:8601/public/user_images/1715077660699_image_picker_5E15CE0F-C91C-4336-B803-52E831CDFDC9-4947-000003F7BA3B0932.jpg"
    },
    {
        "event_id": "65029c5bdf6918136df27e52",
        "user_id": "66260c20eb130d522e604ed4",
        "qr_code": "http://91.205.173.97:8601/public/qr_images/66260c20eb130d522e604ed3.png",
        "reg_id": "231232122",
        "role": "VISITOR",
        "meeting_availability": true,
        "is_exhibitor": false,
        "is_lunch": true,
        "is_awards": false,
        "participant_type": [
            "EXHIBITOR",
            "SPEAKER",
            "AWARD_PRESENTATION",
            "JURY"
        ],
        "status": "ACTIVE",
        "contact": "9805798998",
        "name": "Pranav Bhasin",
        "email": "pranav@electrovese.com",
        "category": "Retail Consulting",
        "company_name": "Electrovese Solutions Pvt Ltd",
        "city": "",
        "country": "",
        "designation": "Director and CEO",
        "state": "",
        "image": "http://91.205.173.97:8601/public/user_images/1715077660699_image_picker_5E15CE0F-C91C-4336-B803-52E831CDFDC9-4947-000003F7BA3B0932.jpg"
    },
    {
        "event_id": "65029c5bdf6918136df27e53",
        "user_id": "66260c20eb130d522e604ed5",
        "qr_code": "http://91.205.173.97:8601/public/qr_images/66260c20eb130d522e604ed3.png",
        "reg_id": "23123213",
        "role": "VISITOR",
        "meeting_availability": true,
        "is_exhibitor": false,
        "is_lunch": true,
        "is_awards": false,
        "participant_type": [
            "EXHIBITOR",
            "SPEAKER",
            "AWARD_PRESENTATION",
            "JURY"
        ],
        "status": "ACTIVE",
        "contact": "9805798999",
        "name": "Pranav Bhasin",
        "email": "pranav@electrovese.com",
        "category": "Retail Consulting",
        "company_name": "Electrovese Solutions Pvt Ltd",
        "city": "",
        "country": "",
        "designation": "Director and CEO",
        "state": "",
        "image": "http://91.205.173.97:8601/public/user_images/1715077660699_image_picker_5E15CE0F-C91C-4336-B803-52E831CDFDC9-4947-000003F7BA3B0932.jpg"
    }
]

app.get('/virtubox.io/getData', (req, res) => {
    const { reg_id } = req.query;
    if (!reg_id) {
        return res.status(400).json({ error: 'reg_id is required' });
    }
    const user = servedJson.find(u => u.reg_id === reg_id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});


app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
