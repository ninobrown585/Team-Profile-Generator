const Intern = require("../job-titles/intern");
const Employee = require("../job-titles/Employee");
test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const newIntern = new Intern("Foo", 1, "test@test.com", testValue);
    expect(newIntern.officeNumber).toBe(testValue);
});
test("getRole() should return \"intern\"", () => {
    const testValue = "intern";
    const newIntern = new Intern("Foo", 1, "test@test.com", 100);
    expect(newIntern.getRole()).toBe(testValue);
});
    test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const newIntern = new Intern("Foo", 1, "test@test.com", testValue);
    expect(newIntern.getOfficeNumber()).toBe(testValue);
}); 