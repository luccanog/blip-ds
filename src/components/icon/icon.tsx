import { Component, Host, State, Prop, h, Watch } from '@stencil/core';
import { getSvgPath, getSvgContent, formatSvg } from './utils';

@Component({
  tag: 'bds-icon',
  styleUrl: 'icon.scss',
  assetsDir: 'svg',
  shadow: true
})
export class Icon {
  @State() svgContent?: string;

  /**
  * Specifies which icon to use from the built-in set of icons.
  */
  @Prop({ reflect: true }) name!: string;

  /**
  * Specifies the label to use for accessibility. Defaults to the icon name.
  */
  @Prop({ mutable: true, reflectToAttr: true }) ariaLabel?: string;

  /**
   * Icon size. Entered as one of the icon size design tokens. Can be one of: "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large".
   */
  @Prop() size?: string = 'medium';

  /**
  * Specifies the label to use for accessibility. Defaults to the icon name.
  */
  @Prop() color?: string;

  /**
  * Specifies the theme to use outline or solid icons. Defaults to outline.
  */
  @Prop({ reflect: true }) theme: 'outline' | 'solid' = 'outline';

  async connectedCallback() {
    await this.loadSvg();
  }

  @Watch('name')
  async loadSvg() {
    const url = getSvgPath(this.name, this.theme);
    const svgContent = await getSvgContent(url);
    const formatedSvg = formatSvg(svgContent, this.color);

    this.svgContent = formatedSvg;
  }

  render() {
    return (
      <Host role="img">
        <div class={{
          'bds-icon': true,
          [`bds-icon__size--${this.size}`]: true
        }}
          innerHTML={this.svgContent}></div>
      </Host>
    );
  }

}
