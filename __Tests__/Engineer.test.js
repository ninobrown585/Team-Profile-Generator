const Intern = require("../job-titles/engineer");
const Employee = require("../job-titles/Employee");
test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const newEngineer = new Intern("Foo", 1, "test@test.com", testValue);
    expect(newEngineer.officeNumber).toBe(testValue);
});
test("getRole() should return \"engineer\"", () => {
    const testValue = "engineer";
    const newEngineer = new Intern("Foo", 1, "test@test.com", 100);
    expect(newEngineer.getRole()).toBe(testValue);
});
    test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const newEngineer = new Intern("Foo", 1, "test@test.com", testValue);
    expect(newEngineer.getOfficeNumber()).toBe(testValue);
}); 