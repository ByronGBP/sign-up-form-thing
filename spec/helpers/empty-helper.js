beforeEach(() => {
  const toBeByron = () => {
    return {
      compare: (actual) => {
        return {
          pass: actual === 'Byron'
        };
      }
    };
  };

  const matchers = { toBeByron };
  jasmine.addMatchers(matchers);
});
