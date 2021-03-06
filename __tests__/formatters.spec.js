var converter = require('html-to-markdown');

describe('converter', () => {
  it('converts bold marks', () => {
    const result = converter.convert('this is some <b>bold</b> text')
    expect(result).toBe('this is some **bold** text')
  });

  it('converts anchors', () => {
    const result = converter.convert('this is <a href="https://google.com/">google</a>')
    expect(result).toBe('this is [google](https://google.com/)')
  })

  it('converts brs', () => {
    const result = converter.convert('line one.<br />line 2.');
    expect(result).toBe('line one.\nline 2.')
  })

})
