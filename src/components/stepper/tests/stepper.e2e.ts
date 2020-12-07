import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('bds-stepper e2e tests', () => {
  let page: E2EPage;

  it('should set active step two', async () => {
    page = await newE2EPage({
      html: `
      <bds-stepper>
        <bds-step
          id="one"
        > Step one 1
        </bds-step>
        <bds-step
          id="two"
        > Step two 2
        </bds-step>
      </bds-stepper>`,
    });

    const stepper = await page.find('bds-stepper');

    await stepper.callMethod('setActiveStep', 1);

    expect(await stepper.callMethod('getActiveStep')).toBe(1);
  });

  it('should complete step', async () => {
    page = await newE2EPage({
      html: `
      <bds-stepper>
        <bds-step
        > Step one 1
        </bds-step>
      </bds-stepper>`,
    });

    const stepper = await page.find('bds-stepper');
    const step = await page.find('bds-step');

    await stepper.callMethod('setCompletedStep', 0);

    await page.waitForChanges();

    expect(step.shadowRoot.querySelector('.step__content--completed')).toBeTruthy();
  });

  it('should reset active steps', async () => {
    page = await newE2EPage({
      html: `
      <bds-stepper>
        <bds-step
          active="true"
        > Step one 1
        </bds-step>
      </bds-stepper>`,
    });

    const stepper = await page.find('bds-stepper');
    const step = await page.find('bds-step');

    await stepper.callMethod('resetActiveSteps');

    await page.waitForChanges();

    expect(step.shadowRoot.querySelector('.step__content--active')).toBeFalsy();
  });

  it('should reset active steps', async () => {
    page = await newE2EPage({
      html: `
      <bds-stepper>
        <bds-step
          completed="true"
        > Step one 1
        </bds-step>
      </bds-stepper>`,
    });

    const stepper = await page.find('bds-stepper');
    const step = await page.find('bds-step');

    await stepper.callMethod('resetCompletedSteps');

    await page.waitForChanges();

    expect(step.shadowRoot.querySelector('.step__content--completed')).toBeFalsy();
  });
});
