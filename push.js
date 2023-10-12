const push = require("web-push");

let vapidkeys = {
  publicKey:
    "BPDkpu94JBfU8g1gj9d6zbrTQtf_TL9uCFh8iO_xmQy_QCGGMNucyPW16PlGzgm7Z9jnvui4qG4WsVv8DO33FPk",
  privateKey: "mwxDPEVsQmz0CrI5MQig80JZaM7xhbVkysBiOLNNitI",
};

push.setVapidDetails(
  "mailto:238773@ust-global.com",
  vapidkeys.publicKey,
  vapidkeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eceVeGqOBZc:APA91bHyOt6517f8i9SlBGrz3zbibdqLDry1qI8HVx7SSNJ0oGbRSxyIeDOQdU-5gssCaEWfN1v-7S2o7hpJThGPXuD4t_eb0AvBQlzD9EUI4Kp9qsXF0sPIAMVWeU7OGaAXtrBpCbDY",
  expirationTime: null,
  keys: {
    p256dh:
      "BDH0LnOcGm0SX_4x3yipaSuArkzbngtArEhV1Kry2olvd3zpP7OzYTglfWxpCPkMUKq5cMiJYDmxtK8ZIm6a5LI",
    auth: "HGT08KG_cVc8UgFbax5C5g",
  },
};
push.sendNotification(sub, "test message");
