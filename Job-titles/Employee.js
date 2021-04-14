class Employee {
    constructor(name, id, email){
        this.name= name;
        this.id = id;
        this.email = email;
        
    };

    getEmpName(){
        return this.name;
    }
    getPosition(){
        return 'Employee';
    }
    getEmpID(){
        return this.id;
    }
    getEmpEmail(){
        return this.email;
    }

   
};

module.exports = {
    Employee
}