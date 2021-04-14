const { Employee } = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super(name, id, email)
            this.officeNum = officeNum;
        
    }

    getManagerName(){
        return this.name;
    }
    getMangID(){
        return this.id;
    }
    getMangEmail(){
        return this.email;
    }
    getMangOfficeNum(){
        return this.officeNum;
    }

}


module.exports = {
    Manager
}





