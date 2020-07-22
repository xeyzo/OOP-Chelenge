class Validate {
    constructor (username, password) {
    this.username = username
    this.password = password
    }
    static value() {
        return new Validate("root","root")
    }
    returnValidate(){
    if(username=="root" && password=="root")
        console.log("selamat anda berhasil login");
    else{
        console.log("gagal login coba lagi");
    }
}
}


const validate = new Validate.value()
validate.returnValidate()
