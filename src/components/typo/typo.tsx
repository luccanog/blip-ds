import { Component, h, Prop } from '@stencil/core';

export type FontSize = 'fs-10' | 'fs-12' | 'fs-14' | 'fs-16' | 'fs-20' | 'fs-24' | 'fs-32' | 'fs-40';

export type FontLineHeight = 'none' | 'small' | 'simple' | 'plus' | 'double';

export type Bold = 'regular' | 'semi-bold' | 'bold' | 'extra-bold';

export type Tag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';

@Component({
  tag: 'bds-typo',
  styleUrl: 'typo.scss',
  shadow: true,
})
export class Typo {
  /**
   * Variant. Entered as one of the font size variant. Can be one of:
   * 'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';
   */
  @Prop() variant?: FontSize = 'fs-16';

  /**
   * Line Height. Entered as one of the line hieght. Can be one of:
   * 'none', 'small', 'simple', 'plus', 'double'
   */
  @Prop() lineHeight?: FontLineHeight = null;

  /**
   * Bold. Entered as one of the bold. Can be one of:
   * 'regular', 'semi-bold', 'bold', 'extra-bold';
   */
  @Prop() bold?: Bold = null;

  /**
   * Added font style italic
   */
  @Prop() italic?: boolean = false;

  /**
   * Added style no wrap
   */
  @Prop() noWrap?: boolean = false;

  /**
   * Tranform text in paragraph
   */
  @Prop() paragraph?: boolean = false;

  /**
   * If true, adds default margin values
   */
  @Prop() margin?: boolean = true;

  /**
   * Define element tag, must be used for acessibilty
   */
  @Prop() tag?: Tag = 'p';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  render(): HTMLElement {
    const Element = this.tag;

    return (
      <Element
        class={{
          typo: true,
          [`typo__variant--${this.variant}`]: true,
          [`typo__margin--${this.variant}`]: this.margin,
          'typo--no-wrap': this.noWrap,
          'typo--paragraph': this.paragraph,
          'typo--italic': this.italic,
          [`typo__line-height--${this.lineHeight}`]: !!this.lineHeight,
          [`typo__bold--${this.bold}`]: !!this.bold,
        }}
        part="bds-typo__text"
        data-test={this.dataTest}
      >
        <slot></slot>
      </Element>
    );
  }
}
