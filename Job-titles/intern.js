const Employee = require("../job-titles/Employee");

class Intern extends Employee{
    constructor(name, id, email, school)
        super(name, id, email){
            this.school = school;
        }

    getPosition(){
        return 'Intern';
    }
    
    getInternSchool(){
        return this.school;
    }
    
};





module.exports = {
    Intern
};