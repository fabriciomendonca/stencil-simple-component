import { newE2EPage } from '@stencil/core/testing';

describe('my-button e2e test', () => {
  let page;
  let component;
  let element;
  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<my-button text="Click ME!"></my-button>');
    component = await page.find('my-button');
    element = await page.find('button');
  });

  it('renders the component', async () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
    expect(element.textContent).toBe('Click ME!');
  });

  it('updates component text', async () => {
    component.setProperty('text', "Don't click me");
    await page.waitForChanges();
    expect(element.textContent).toBe("Don't click me");
  });

  it('disables button if component disabled property is set', async () => {
    expect(element.getAttribute('disabled')).toBeNull();
    await component.setProperty('disabled', true);
    await page.waitForChanges();
    expect(element.getAttribute('disabled')).toBe('');

    await component.setProperty('disabled', false);
    await page.waitForChanges();
    expect(element.getAttribute('disabled')).toBeNull();
  });

  xit('changes the button text after clicking it', async () => {
    await element.click();
    await page.waitForChanges();

    expect(element.textContent).toBe('Thanks for clicking me');
  });
});
