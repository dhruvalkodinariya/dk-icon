import { LitElement, html ,css} from 'lit-element';
import './mwc-icon-font';
import {styleMap} from 'lit-html/directives/style-map';
import '@material/mwc-icon';

export class DkIcon extends LitElement {
  static get styles(){
    return[
      css`
        :host {
          display: inline-flex;
        }
        mwc-icon svg {
          fill: var(--dw-icon-color);
          width: var(--dk-icon-width, 24px);
          height: var(--dk-icon-height, 24px);
        }
        mwc-icon {
          color: var(--dk-icon-color);
        }
        :host([active]) mwc-icon svg {
          fill: var(--dk-icon-color-active);
        }
        :host([active]) mwc-icon {
          color: var(--dk-icon-color-active);
        }
        :host([disabled]) mwc-icon svg {
          fill: var(--dk-icon-color-disabled);
        }
        :host([disabled]) mwc-icon {
          color: var(--dk-icon-color-disabled);
        }
      `
    ];
  }
  static get properties() {
    return {
      name: String,
      size: Number,
      disabled: { type: Boolean },
      active: { type: Boolean },
      _iconMap: { type: Object }
    };
  }
  render() {
    return html`
      <mwc-icon style=${this.size ? styleMap({ '--mdc-icon-size': `${this.size}px`}) : ''}>${ this._getIcon(this.name, this.size)}</mwc-icon>
    `;
  }

  static addIcons(icon){
    this._iconsMap = icon;
  }

  _getIcon(name, size){

    if(this.constructor._iconsMap && this.constructor._iconsMap[`${name}_${size}`]){
      return this.constructor._iconsMap[`${name}_${size}`];
    }

    if(this.constructor._iconsMap && this.constructor._iconsMap[name]){
      return this.constructor._iconsMap[name];
    }

    return name;
  }
}
customElements.define('dk-icon', DkIcon);