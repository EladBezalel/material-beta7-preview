import { NgUpDemoPage } from './app.po';

describe('ng-up-demo App', () => {
  let page: NgUpDemoPage;

  beforeEach(() => {
    page = new NgUpDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
