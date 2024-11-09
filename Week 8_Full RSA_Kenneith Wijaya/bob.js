const crypto = require("crypto");

const bobPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCilIzWhijdN+Zk
j1RlkS8Y8a/+4MQcybkA4R7+tP41S3CuvLr4uqmXjyrkXtn2aEDvAkH55QQRUwn3
EO/PJ5sxKvs9om+hRHSb5flm6eXz57anJ8RxNOc8oW/rQrZQzUa2nh8qyrU5ek8N
+shb0g4IKDNJ91qC6dMBMALJlrQD5nFd7ogONZzqJz7r1vJKgM45SxfOYp/f8som
Q+dUpMbDZBCB664U+N4tom+0rs0h/OzhmEuzxwfgLiOUxXChE8LEZbLcisz8/9aj
YKTLKLzzPybE5LE3w7MDb+8+PcNUsjcAwXul72N1kNaiGmUXvNOImSAue6CUtnF3
/D+d3LeNAgMBAAECggEABooLECXdRuiUr77EGkG4rzwpZAsOWEoU0uA7KuuEvggG
xEB7FL4NTDdJ9l2KTsrqsbJZjP+VJk08vV9FBgQFzfh4moYKD2Z9ejfJzEXkJedQ
BXEoCZWjJ2Em60OHqcBX88hwYHw+xc0RmPJZVLgiMFnNllAIp/NXtViFBC63luCB
hj739IE8KuZUb2b0xGBDMlv+dj2y5Oe9WHU9jsK7XOhR85gpR6zs7QpXbogm/byn
Xhow75RGHTxAnncvTs5r1ImqMyNxvucrAu+bsPMrjTxrvUPJQN3ZnflG8v2evdjz
CcSq7YJ9NdwcPvuZVi4aJ4wEJJXxVvW4mFiy0F2y0QKBgQDYU2j8Oyw66/HzCZzz
TYE4J09GBksxbpLRbaCkwZsVBiwVy7ZlIejexVgjnE9V7V1TsQYDmaUZ+XZe+osD
LnF4dWFrtGVlaWhau5p6Kyhbpjv1MupW+ycQTLmIqIFSYiAXcfG+0+2PhjH3FCXJ
qoa4zLcGR9irqZMIbY6owQ+e2wKBgQDAZcN8uauyZIViopO3L8mheDqr4hptzS+V
QSCKDWCBNzprw5lstE4YFBBeqCVvpCXmnZRRQNyeHm1j/6MkOPkNCCuiwdHMWZ8R
Qs88DUV6gwMZUlC8dKNjBa3DyoMrEztottoomlGWhfe5kqHVIq4bvTnsx769R69N
Qj3jrPhLtwKBgEL1BlDUC+us7jW4qwDP44g6+pmFBy8kt4LlOMzmNBc80tZoOGtz
JH4XfSGAlznUf4eRCniAzQ6OHWpmiDKS5IJRarcInj3Wc3tqB/V6eEJt4K8TdF85
26x64w5+gZC7WI2JMjdLp4M+GScN8GhMROjcTGZARLtVgHIiXv6yyx/zAoGBAKl4
+jljU1pQMS4xBuzVq0YQIZ5GDAGsO729IGx6XAd2Hn/OS9b0+9U51zGJ62/rp3b8
Vyk7eRnOs4ziIVJG3RodmFJFaAgY6YTK1MCQ8CJ6RMCJQZS/KSyQU/+i4ueOiUYz
yvb49+UfHJbaErMrWTIV/HAVgm44NrJXJyzlr9EBAoGBAKhLSe4E0+w92aLqp+s/
oJ5g9JtDP20OPf37Zw9Dq3Trz9q3xQ7Lh/PMGeW+MslL5iHcOMNSzehqMU0mTcBA
ZPhd7lqHB4RlHVtC/MelSVPHnMG/VCyw2mnpoplxidEaVOkQ9g8kCdhIOm1rKE/l
LJ7Bwvs/DV6I2xcZi0JrOTvc
-----END PRIVATE KEY-----`;
// Bob's private key (used to decrypt messages only he can read).
const bobPrivateKey = crypto.createPrivateKey(bobPrivateKeyPem);

const alicePublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1QKwSYWTjeKnNP0nFqwV
JejgImTsVrfjajsfNyM7MIiR/c4k9jGQQbCjVcVywoQLB5C0qVGMJlWWDjVUDHNp
Dha6HE7z1P0Fjj8umqEJW71jztOrDuqMyHyaD0odt2acG7bEWzVkEvKJCW/3RWIQ
BXNfVGjS9vMBkBPycL7zDPq4nOf+gJLZ6ZlIk3Ms/M1j5hHPCaKGNUjdR2G9NZvb
cVMyh3Mieey/j+FwjQ08AJk15apic5rhkXJYuHW5glPF1TPMyezon3nnPFDR7ZYX
qTxWduLrvaF2HE66NA/doMb5ypFn2EFS0weBTHf337NGZzenD17lYR4onBO0lGhv
gwIDAQAB
-----END PUBLIC KEY-----`;
// Alice's public key (shared with others so they can verify her signature).
const alicePublicKey = crypto.createPublicKey(alicePublicKeyPem);

// Ciphertext and signature from Alice (sender)
const ciphertextHex = "573face5bc326975bdf409b39e302a9b044f6aa3ff955fc46be90e6237f731cf5eb59f1291a7ad6ff04b1c7f501c7a79ab43c54eb790d64ea81875bd5719343d9d150454002a32105b812da39018d26410a86457fb7205c6dbefb688a6640e69843d5a0ae2ba939a2b7883b0ad958b8ee1e835bca049738d845b56d7124433bf7fcf0946df2dfb3b2c8ddb6b678b578c462971ae1d6278cd526ac4cbad6439e6b853c5b4a79298f9d5e9d83657a80490e9d357775e6a1ce5568e5d489871838c44760e8d2be361f20aa1ef311ad996ebd6a7d78078f267d31e64be621800f59bae3000c27ba817437c2333bc51b144ef88ce06ad6320abd31c9e847eb3c4c085";
const ciphertext = Buffer.from(ciphertextHex, "hex");

const signatureHex = "38d5a130404222935e3145bf34c06569deaad2895ed6a7e9912020376fb5e00cde660a19cc1a5069e23eb448ef0e53ac12e85d6f5298e15de50eabbc511a4e1ce46ea0e03ae76eaf27d4c9adccd4563886358b3ecedb04566ac992c3a5c7df84eac576d43577cd94666546edd530339d421019e8d5698d391b1e5a9adc32a475ab53ad910e1709c3d273e0e1b8c907348bf34865a9660bb0dec4c3bbbab5978e5099e842001b064d23320422b196a26cb9e4b1206be62d906baad48d34ec1ab951eacb6bf79c2ff4d5bffdde1ba0a846218e1f00550012851b252d3d1fc5017d3b882d9267a93728a33bbd7289d4b791cf11d41ccfdb22a218342ae99c64ee55";
const signature = Buffer.from(signatureHex, "hex");

// Decrypting message
const recoveredPlaintext = crypto.privateDecrypt(bobPrivateKey, ciphertext);
const message = recoveredPlaintext.toString("utf8");

// Bob Verifying signature
const data = Buffer.from(message);
const isValid = crypto.verify("sha256", data, alicePublicKey, signature);

// Results
console.log("Signature Verification:", isValid);
console.log("Message:", message);