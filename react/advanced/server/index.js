const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

// Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Constants from /subscription
const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/d-8zSnrNemI:APA91bEnZXWzSZJR7Fc_LgM3s01v9mFjUdk8LLb1j2U0TCaO_JTQTjjcR-RCIoFLxXZmzs0jqCobPpKttWJMHhQA9_oTAKd5P-1f-OWqPeFtVpULTPM29x-Ogd9QASQEMz36gR-tL1SD',
    expirationTime: null,
    keys: {
        p256dh: 'BCpGhop7IA3clj0tPFlvakV1HncNoz0dJVfuBxW3sAovXa8Os42YM-M4E0lUrT8lcuUJsgsdbxA3tboWzIuUpps',
        auth: 'tQUlUB2WswyveuLQVEbKyw'
    }
}
const vapidKeys = {
    publicKey: "BJfFj_oSM5_8_gyuYsnwG4199pySE4_J_LCDwb-CP7IXnt9AtBL4ztGe5q40_RL3v0W6tMJCV11fm0lymI3i13M",
    privateKey: "KMUVwHfMNjv1iDjoPVRL193rEYED0LEUqO4P5XN0qbU"
}

webpush.setVapidDetails(
    'mailto:email@mail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

// Routes
app.get('/notification', async (req, res) => {
    const payload = JSON.stringify({ title: "Notification title", message: "Notification message" });
    try {
        await webpush.sendNotification(pushSubscription, payload);
        res.send("Notification sent!");
    } catch (error) {
        console.log(error)
    }
});

app.post('/subscription', (req, res) => {
    console.log('subscription from react app')
    console.log(req.body);
    res.sendStatus(200).json();
})

app.listen(8000, () => console.log("Server listening on port 8000"))