const push = require('web-push');

let vapidkeys = {
    publicKey: 'BPDkpu94JBfU8g1gj9d6zbrTQtf_TL9uCFh8iO_xmQy_QCGGMNucyPW16PlGzgm7Z9jnvui4qG4WsVv8DO33FPk',
    privateKey: 'mwxDPEVsQmz0CrI5MQig80JZaM7xhbVkysBiOLNNitI'
  }

push.setVapidDetails('mailto:238773@ust-global.com', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {};
push.sendNotification(sub, 'test message')
