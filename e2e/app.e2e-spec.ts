import { SketchoffFrontendPage } from './app.po';

describe('sketchoff-frontend App', () => {
  let page: SketchoffFrontendPage;

  beforeEach(() => {
    page = new SketchoffFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
