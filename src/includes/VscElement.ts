import {LitElement} from 'lit';

export class VscElement extends LitElement {
  private _version = '2.0.0';

  /** VSC Element version */
  get version() {
    return this._version;
  }
}
