import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
})
export class MyButton {
  @Prop() text: string = '';
  @Prop() disabled: boolean = false;
  @Event({
    eventName: 'click-inside',
    bubbles: false,
  })
  clickInside: EventEmitter;

  constructor() {
    this.onClickInside = this.onClickInside.bind(this);
  }

  onClickInside() {
    this.clickInside.emit('Thanks for clicking me');
  }
  render() {
    return (
      <button disabled={this.disabled} onClick={this.onClickInside}>
        {this.text}
      </button>
    );
  }
}
