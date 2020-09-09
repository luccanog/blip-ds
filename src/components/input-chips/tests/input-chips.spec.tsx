import { newSpecPage } from '@stencil/core/testing';
import { InputChips } from '../input-chips';

describe('bds-input-chips', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputChips],
      html: `<bds-input-chips></bds-input-chips>`,
    });
    expect(page.root).toEqualHtml(`
      <bds-input-chips icon="" value="">
        <mock:shadow-root>
          <bds-input chips="" error-message="" icon="" label="" value="">
            <span slot="inside-input-left"></span>
            <div slot="input-right">
              <slot name="input-right"></slot>
            </div>
          </bds-input>
        </mock:shadow-root>
      </bds-input-chips>
    `);
  });
});
