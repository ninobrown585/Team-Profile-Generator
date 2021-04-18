const Intern = require("../job-titles/intern");
const Employee = require("../job-titles/employee");
test("Can set school argument", () => {
    const testValue = "SMU";
    const newIntern = new Intern("Lou", 5, "Louie21@nba.com", testValue);
    expect(newIntern.school).toBe(testValue);
});

test(" should return 'Intern'", () => {
    const testValue = "Intern";
    const newIntern = new Intern("Lou", 5, "Louie21@nba.com", "SMU");
    expect(newIntern.getRole()).toBe(testValue);
});

test(" trying to return the school", () => {
    const testValue = "SMU";
    const newIntern = new Intern("Lou", 5, "Louie21@nba.com", testValue);
    expect(newIntern.getSchool()).toBe(testValue);
});