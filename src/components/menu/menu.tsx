import { Component, ComponentInterface, h, State, Method, Prop, Watch } from '@stencil/core';
import { getScrollParent, positionElement } from '../../utils/position-element';

export type menuPosition = 'bottom' | 'right';

@Component({
  tag: 'bds-menu',
  styleUrl: 'menu.scss',
  shadow: true,
})
export class BdsMenu implements ComponentInterface {
  private menuElement?: HTMLElement;

  @State() refElement?: HTMLElement = null;
  @State() intoView?: HTMLElement = null;
  @State() menupositionTop?: number = 0;
  @State() menupositionLeft?: number = 0;
  /**
   * Menu. Used to link the minus with the action button.
   */
  @Prop() menu?: string = null;
  /**
   * Position. Used to position the Menu. Either on the left or on the bottom.
   */
  @Prop() position?: menuPosition = 'right';
  /**
   * Open. Used to open/close the menu.
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public open?: boolean = false;

  componentWillLoad() {
    this.refElement = document.getElementById(this.menu);
    this.intoView = getScrollParent(this.refElement);
  }

  @Method()
  async toggle() {
    this.open = !this.open;
  }

  @Watch('open')
  protected openMenu() {
    const positionValue = positionElement({
      actionElement: this.refElement,
      changedElement: this.menuElement,
      intoView: this.intoView,
    });
    this.menupositionTop = positionValue.top;
    this.menupositionLeft = positionValue.left;
  }

  render() {
    const menuPosition = {
      top: `${this.menupositionTop}px`,
      left: `${this.menupositionLeft}px`,
    };

    return (
      <div
        ref={(el) => (this.menuElement = el as HTMLElement)}
        class={{
          menu: true,
          [`menu__${this.position}`]: true,
          [`menu__open`]: this.open,
        }}
        style={menuPosition}
      >
        <slot></slot>
      </div>
    );
  }
}
