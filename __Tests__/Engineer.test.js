const Intern = require("../job-titles/engineer");
const Employee = require("../job-titles/employee");
test("Can set office number via constructor argument", () => {
    const testValue = 'Farm100';
    const newEngineer = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(newEngineer.Github).toBe(testValue);
});
test("getRole() should return \"engineer\"", () => {
    const testValue = "Engineer";
    const newEngineer = new Engineer("Foo", 1, "test@test.com", 100);
    expect(newEngineer.getRole()).toBe(testValue);
});
    test("Can get office number via getOffice()", () => {
    const testValue = 'Farm100';
    const newEngineer = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(newEngineer.getGitHub()).toBe(testValue);
}); 