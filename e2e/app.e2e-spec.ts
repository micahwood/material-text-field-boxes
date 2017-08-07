import { TextfieldBoxPage } from './app.po';

describe('textfield-box App', () => {
  let page: TextfieldBoxPage;

  beforeEach(() => {
    page = new TextfieldBoxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
