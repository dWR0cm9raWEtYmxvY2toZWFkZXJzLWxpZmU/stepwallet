
const nacl = require('tweetnacl')
const util = require('tweetnacl-util')
const d8 = util.decodeUTF8
const e8 = util.encodeUTF8
const d6 = util.decodeBase64
const e6 = util.encodeBase64
const Hashes = require('jshashes')
const MD5 = new Hashes.MD5

let foo = '1'
let str = MD5.hex(foo)
console.log(str)
console.log(Buffer.byteLength(str,'utf8'))
console.log(Buffer.byteLength(str,'base64'))
console.log(Buffer.byteLength(str,'hex'))

//let box = nacl.secretbox(d8('hello'), d8('imnonce'), d8('key'))
//let msg = nacl.secretbox( box, d8('imnonce'), d8('key'))

//console.log(box)
//console.log(msg)
