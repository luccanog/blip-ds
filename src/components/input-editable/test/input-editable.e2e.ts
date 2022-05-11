import { newE2EPage } from '@stencil/core/testing';

describe('input-editable', () => {
  let page;
  let typo;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<bds-input-editable
        minlength="3"
        value="Test"
        ></bds-input-editable>`,
    });
    typo = await page.find('bds-input-editable >>> bds-typo');
  });

  const clickOnEditRegion = async (): Promise<void> => {
    const divEdit = await page.find('bds-input-editable >>> .input__editable--static');
    divEdit.click();
    await page.waitForChanges();
  };

  const clickOnCancelIcon = async (): Promise<void> => {
    const errorIcon = await page.find('bds-input-editable >>> .input__editable--active__icon--error');
    errorIcon.click();
    await page.waitForChanges();
  };

  const clickOnConfirmIcon = async (): Promise<void> => {
    const checkballIcon = await page.find('bds-input-editable >>> .input__editable--active__icon--checkball');
    checkballIcon.click();
    await page.waitForChanges();
  };

  it('should hide edit icon when click on edit icon', async () => {
    await clickOnEditRegion();
    const element = await page.find('bds-input-editable >>> .input__editable--static');
    expect(element).toHaveClass('input__editable--hidden');
  });

  it('should show input and icons when click in edit icon', async () => {
    await clickOnEditRegion();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    const errorIcon = await page.find('bds-input-editable >>> .input__editable--active__icon--error');
    const checkballIcon = await page.find('bds-input-editable >>> .input__editable--active__icon--checkball');
    expect(inputElement).toBeDefined();
    expect(errorIcon).toBeDefined();
    expect(checkballIcon).toBeDefined();
  });

  it('should cancel edit when click on cancel icon', async () => {
    await clickOnEditRegion();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    await inputElement.setProperty('value', 'new value');
    await clickOnCancelIcon();
    expect(typo.innerText).toBe('Test');
  });

  it('should confirm edit when click on confirm icon', async () => {
    await clickOnEditRegion();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    await inputElement.setProperty('value', 'new value');
    await page.waitForChanges();
    await clickOnConfirmIcon();
    const typo = await page.find('bds-input-editable >>> bds-typo');
    expect(typo.innerText).toBe('new value');
  });

  it('should emit event bdsInputEditableSave edit when click on confirm icon', async () => {
    const spy = await page.spyOnEvent('bdsInputEditableSave');
    await clickOnEditRegion();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    await inputElement.setProperty('value', 'new value');
    await page.waitForChanges();
    await clickOnConfirmIcon();
    expect(spy).toHaveReceivedEventDetail({ oldValue: 'Test', value: 'new value' });
  });

  it('should enter in danger state when click on confirm icon with empty input', async () => {
    const spy = await page.spyOnEvent('bdsInputEditableSave');
    await clickOnEditRegion();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    await inputElement.setProperty('value', '');
    await page.waitForChanges();
    await clickOnConfirmIcon();
    expect(spy).not.toHaveReceivedEvent();
  });

  it('should enter in danger state when value lenght is less than minlenght and confirm icon', async () => {
    const spy = await page.spyOnEvent('bdsInputEditableSave');
    await clickOnEditRegion();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    await inputElement.setProperty('value', '12');
    await page.waitForChanges();
    await clickOnConfirmIcon();
    expect(spy).not.toHaveReceivedEvent();
  });

  it('should disable the confirm icon when the lenght is lower than necessary', async () => {
    await clickOnEditRegion();
    const inputElement = await page.find('bds-input-editable >>> bds-input');
    await inputElement.setProperty('value', '1');
    await page.waitForChanges();
    await clickOnConfirmIcon();
    const checkballIcon = await page.find('bds-input-editable >>> .input__editable--active__icon--checkball');

    expect(checkballIcon).toHaveClass('input__editable--active__icon--checkball--error');
  });
});
