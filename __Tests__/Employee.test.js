const Employee = require("../job-titles/employee");
test("Can instantiate Employee instance", () => {
  const newEmployee = new Employee();
  expect(typeof(newEmployee)).toBe("object");
}); 
test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const newEmployee = new Employee(name);
  expect(newEmployee.name).toBe(name);
});
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const newEmployee = new Employee("Foo", testValue);
  expect(newEmployee.id).toBe(testValue);
});
test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const newEmployee = new Employee("Foo", 1, testValue);
  expect(newEmployee.email).toBe(testValue);
});
test("Can get name via getName()", () => {
  const testValue = "Alice";
  const newEmployee = new Employee(testValue);
  expect(newEmployee.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const newEmployee = new Employee("Foo", testValue);
  expect(newEmployee.getId()).toBe(testValue);
});
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const newEmployee = new Employee("Foo", 1, testValue);
  expect(newEmployee.getEmail()).toBe(testValue);
});
test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const newEmployee = new Employee("Alice", 1, "test@test.com");
  expect(newEmployee.getRole()).toBe(testValue);
});