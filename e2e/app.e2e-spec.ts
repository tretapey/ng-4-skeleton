import { Ng4skeletonPage } from './app.po';

describe('ng4skeleton App', () => {
  let page: Ng4skeletonPage;

  beforeEach(() => {
    page = new Ng4skeletonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
