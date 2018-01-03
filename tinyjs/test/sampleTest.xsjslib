describe("sample test suite", function() {

	beforeEach(function() {
	});
	
  it("add simple", function() {
   $.import("calc", "calculator");
   var calc = $.calc.calculator;
   var sum = calc.add(1, 1);
   expect(sum).toBe(2);
});
 it("sub simple", function() {
   $.import("calc", "calculator");
   var calc = $.calc.calculator;
   var sub = calc.sub(10, 5);
   expect(sub).toBe(5);
});
});