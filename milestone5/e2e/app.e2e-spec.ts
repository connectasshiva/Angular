import { Milestone1Page } from './app.po';

describe('milestone1 App', () => {
  let page: Milestone1Page;

  beforeEach(() => {
    page = new Milestone1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
