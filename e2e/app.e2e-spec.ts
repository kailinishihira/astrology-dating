import { AstrologyDatingPage } from './app.po';

describe('astrology-dating App', () => {
  let page: AstrologyDatingPage;

  beforeEach(() => {
    page = new AstrologyDatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
