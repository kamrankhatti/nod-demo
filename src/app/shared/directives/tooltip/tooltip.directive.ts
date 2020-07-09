import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nodTooltip]'
})
export class TooltipDirective {
  @Input() delay: number;
  @Input() placement: string;
  @Input('nodTooltip') tooltipTitle: string;
  tooltip: HTMLElement;
  // Distance between host element and tooltip element
  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) { this.show(); }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) { this.hide(); }
  }

  show() {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltip, 'nod-tooltip-show');
  }

  hide() {
    this.renderer.removeClass(this.tooltip, 'nod-tooltip-show');
    window.setTimeout(() => {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }, this.delay);
  }

  create() {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle) // textNode
    );

    this.renderer.appendChild(document.body, this.tooltip);
    // this.renderer.appendChild(this.el.nativeElement, this.tooltip);

    this.renderer.addClass(this.tooltip, 'nod-tooltip');
    this.renderer.addClass(this.tooltip, `nod-tooltip-${this.placement}`);

    // delay settings
    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
  }

  setPosition() {
    // Host element size and location information
    const hostPos = this.el.nativeElement.getBoundingClientRect();

    // tooltip element size and position information
    const tooltipPos = this.tooltip.getBoundingClientRect();

    // window of scroll top
    // getBoundingClientRect method returns the relative position in the viewport.
    // If scrolling occurs, the vertical scroll coordinate value should be reflected on the top of the tooltip element..
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.placement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.placement === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    // If scrolling occurs, the vertical scroll coordinate value should be reflected on the top of the tooltip element..
    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }
}
