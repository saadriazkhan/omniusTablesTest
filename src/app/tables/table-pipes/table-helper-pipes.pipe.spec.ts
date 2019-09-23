import { tableHeaderItemPipe } from './table-helper-pipes.pipe';

describe('tableHeaderItemPipe', () => {
  it('create an instance', () => {
    const pipe = new tableHeaderItemPipe();
    expect(pipe).toBeTruthy();
  });
});
import { tableValueItemPipe } from './table-helper-pipes.pipe';

describe('tableValueItemPipe', () => {
  it('create an instance', () => {
    const pipe = new tableValueItemPipe();
    expect(pipe).toBeTruthy();
  });
});
