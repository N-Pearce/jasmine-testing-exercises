
it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 5000, years: 8, rate: 0.15})).toBe(89.73);
    expect(calculateMonthlyPayment({amount: 8245, years: 3, rate: 0.29})).toBe(345.51);
    expect(calculateMonthlyPayment({amount: 987600, years: 40, rate: 0.01})).toBe(2497.21);
  });
  
  
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount: 5000, years: 8, rate: 0.15}).toString()).toMatch(/^\d+\.\d\d$/);
    expect(calculateMonthlyPayment({amount: 8245, years: 3, rate: 0.29}).toString()).toMatch(/^\d+\.\d\d$/);
    expect(calculateMonthlyPayment({amount: 987600, years: 40, rate: 0.01}).toString()).toMatch(/^\d+\.\d\d$/);
  });
  
  /// etc
  