var md5 = require('md5');

class Hash {
    constructor (value) {
    this.value = value
    }
returnHash() {
    console.log(md5(this.value));
    } 
}

const hash = new Hash("secret")
hash.returnHash()