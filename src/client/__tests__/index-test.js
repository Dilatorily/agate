import index from '../';

describe('index.js', () => {
  beforeEach(() => {
    index();
  });

  it('should say Hello World', () => {
    const root = document.getElementById('root');
    expect(root).not.toBeNull();

    const h1 = root.getElementsByTagName('h1');
    expect(h1.length).toBe(1);
    expect(h1[0].innerHTML).toBe('Hello, World!');
  });
});
