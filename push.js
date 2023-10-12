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

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/ctofNQLNVrQ:APA91bHzGYSoebPcRgO5ZLygm33K-5JKfEKqBCti55B90Upx_RXh8-fHuFsJVb23YBX5ebfIYOnDpktWohPmNrM9mrJs8tZVNmlZKAHyYlTv9KEwp0JKAW76Jqo7RNECRBKDdmvdrZil","expirationTime":null,"keys":{"p256dh":"BOyEO1kkQCENCR-W6i6hVkTT-enz1WRohZ7DD_isWpb72-_nD2D-dsxMa5iE5UH0gCNygwzkV-hFfyo4vu3dn8Q","auth":"QP37DiavF0o6RmH6UqRgbA"}}
push.sendNotification(sub, "test message");
