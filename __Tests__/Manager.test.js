const Manager = require("../job-titles/manager");
const Employee = require("../job-titles/employee");
test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const newManager = new Manager("Foo", 1, "test@test.com", testValue);
  expect(newManager.officeNumber).toBe(testValue);
});
test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const newManager = new Manager("Foo", 1, "test@test.com", 100);
  expect(newManager.getRole()).toBe(testValue);
});
test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const newManager = new Manager("Foo", 1, "test@test.com", testValue);
  expect(newManager.getOfficeNumber()).toBe(testValue);
}); 