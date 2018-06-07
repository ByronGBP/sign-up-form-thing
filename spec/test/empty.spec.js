import { Empty } from '../../src/models/empty';

describe('byron', () => {
  let empty;

  beforeEach(() => {
    empty = new Empty('Byron');
  });

  it('should be Byron', () => {
    expect(empty.name).toBeByron();
  });
});
