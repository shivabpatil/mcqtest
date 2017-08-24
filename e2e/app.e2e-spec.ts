import { MCQtestPage } from './app.po';

describe('mcqtest App', () => {
  let page: MCQtestPage;

  beforeEach(() => {
    page = new MCQtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
