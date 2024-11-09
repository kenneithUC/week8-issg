const crypto = require("crypto");

const alicePrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDVArBJhZON4qc0
/ScWrBUl6OAiZOxWt+NqOx83IzswiJH9ziT2MZBBsKNVxXLChAsHkLSpUYwmVZYO
NVQMc2kOFrocTvPU/QWOPy6aoQlbvWPO06sO6ozIfJoPSh23ZpwbtsRbNWQS8okJ
b/dFYhAFc19UaNL28wGQE/JwvvMM+ric5/6AktnpmUiTcyz8zWPmEc8JooY1SN1H
Yb01m9txUzKHcyJ57L+P4XCNDTwAmTXlqmJzmuGRcli4dbmCU8XVM8zJ7Oifeec8
UNHtlhepPFZ24uu9oXYcTro0D92gxvnKkWfYQVLTB4FMd/ffs0ZnN6cPXuVhHiic
E7SUaG+DAgMBAAECggEAEngttepFnYdaDS+oHICmQse663CJx4khSFxA/CRrZO1q
jzG5JbmtcuywdObuaOxPEoRbDdVazBYesTOxinTVVpnk4EB+Ruj7etaCoXi2GYTF
6zCSQ/RVaarYJtw70GOuxH5n7yqldzkdZbqWG6eBkR9sVCLUrAHtEEOSgXElHOpV
y+YVf9moczImGyFIrR4mqKhsQWOClugCc71X0tVL36FSS3VC8bXBwn85UmcQA1iB
AdMUPOL3FDgCWKpbaSlvOtfSUervBApCZl7V6waxg+BPjYf/LoX82kG6byVqakEC
BuzEhmjShqjNex/x8b9Fw71juOWLgGukFMcjETMETQKBgQD7479AznIHOUjAqQUz
as0zsZZ3oSgiHLngb5PWpQW++A9nSsOuQaz2nZWfji8ylWOcr6l1HavrLqqW8GTd
BIuD108M9eTdJICQfrIZU+Mk43UWwHJn+ZBpxXYv24IG5D2RjYujooAminGmWDW6
S4UgT9f1SPGd7hqeiCqmUzRhVQKBgQDYfIbEJBlgShFbPEqeb/kJCsim9BPyah5B
Q3wEshk+g0HcL54/wnSQJhUiFLjZ8IksiLwzGRsi167APe57+DbW3xliM8ws9EKj
i85TmmowlC96A+baX+8bsMNhbFDFHTI+gIR++1Sxrd3oStltXmzWDvFBLkdrLQs4
bV77iyZtdwKBgQC/jggQ0a63vaGNGjxhSLQ6vq+t1DnAD1ZvzoqALkj7XIviQmIj
b8CIX3i8uRU9g4wYSSI2dVUbagbC+JfL2Lv8jE2Kjqj4X90BhcgNKNVRZUTTA5E9
bvWa6lahuG3erc4AlcL+swJ/zML2/JgHT40y8GVMHKfaMYu+ydCdYiMwbQKBgDTQ
DECFXftzllBfoQSN5H8kNlckbElTQhZB1FuA50+szcBdjYmYcr9HyxgJXh8s4woO
QXtlwIz7eRJFCY0MvLQmsRaX9FNzM16amLckkItRW1O05/iWNsrWkJOPzRSJTtyY
lbo0rjC6bcxhljFsO7js5EY2eA3Za0dUxzsucy15AoGAFR8/usIBWmGzSXRlFAKc
GY7Mi7eS400mvzDfAsCoPvUJF9paaaPcKDa2kDwbmkNX15gS32O8FhvgBJdohyN3
pHl6MEH3PsO2nAfhxpemRA76Ju65knzqmEj9RjCgdtbU8z7//gj2Ntzjw563GTmp
Aas1XIUP+a7B0fNFzPdj1UE=
-----END PRIVATE KEY-----`;
// Alice's private key (used to sign messages she sends).
const alicePrivateKey = crypto.createPrivateKey(alicePrivateKeyPem);

const bobPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAopSM1oYo3TfmZI9UZZEv
GPGv/uDEHMm5AOEe/rT+NUtwrry6+Lqpl48q5F7Z9mhA7wJB+eUEEVMJ9xDvzyeb
MSr7PaJvoUR0m+X5Zunl8+e2pyfEcTTnPKFv60K2UM1Gtp4fKsq1OXpPDfrIW9IO
CCgzSfdagunTATACyZa0A+ZxXe6IDjWc6ic+69bySoDOOUsXzmKf3/LKJkPnVKTG
w2QQgeuuFPjeLaJvtK7NIfzs4ZhLs8cH4C4jlMVwoRPCxGWy3IrM/P/Wo2Ckyyi8
8z8mxOSxN8OzA2/vPj3DVLI3AMF7pe9jdZDWohplF7zTiJkgLnuglLZxd/w/ndy3
jQIDAQAB
-----END PUBLIC KEY-----`;
// Bob's public key (shared with others, like Alice, so they can encrypt messages specifically for him).
const bobPublicKey = crypto.createPublicKey(bobPublicKeyPem);

const message = "I want some apples";
const data = Buffer.from(message);

const signature = crypto.sign("sha256", data, alicePrivateKey);
console.log("Signature:", signature.toString("hex"));

const ciphertext = crypto.publicEncrypt(bobPublicKey, data);
console.log("Message:", ciphertext.toString("hex"));