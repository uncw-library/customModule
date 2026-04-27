import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-twilio-sms',
  standalone: true,
  imports: [],
  templateUrl: './twilio-sms.component.html',
  styleUrl: './twilio-sms.component.scss'
})
export class TwilioSMSComponent implements OnInit {

  ngOnInit(): void {
    const observer = new MutationObserver(() => this.injectButtons());
    observer.observe(document.body, { childList: true, subtree: true });
  }

  private injectButtons(): void {
    const locations = document.querySelectorAll('nde-location');
    if (!locations.length) return;

    const bookTitle = document.querySelector('.record-title a')?.textContent?.trim() ?? '';

    locations.forEach(location => {
      if (location.querySelector('[data-uncw-sms-button]')) return;

      const callNumber = location.querySelector('[data-qa="location-call-number"]')?.textContent?.trim() ?? '';
      const bookLocation = location.querySelector('.getit-library-title')?.textContent?.trim() ?? '';

      const btn = this.createSmsButton(bookTitle, bookLocation, callNumber);

      // Insert next to "Find It" if it exists, otherwise append to the accordion-header
      const findItContainer = location.querySelector('.flex-row.flex-layout-center.gap-1.height-100') as HTMLElement | null;
      if (findItContainer) {
        findItContainer.style.flexDirection = 'column';
        findItContainer.style.alignItems = 'stretch';
        findItContainer.appendChild(btn);
      } else {
        const header = location.querySelector('.accordion-header');
        if (header) header.appendChild(btn);
      }
    });
  }

  private createSmsButton(bookTitle: string, bookLocation: string, callNumber: string): HTMLButtonElement {
    const params = new URLSearchParams({
      bookTitle,
      bookLocation,
      bookCallNumber: callNumber,
    });
    const url = `https://twilio.libapps.uncw.edu/sendCallNumber?${params.toString()}`;

    const btn = document.createElement('button');
    btn.setAttribute('data-uncw-sms-button', 'true');
    btn.className = 'flex-row flex-layout-center getit-locate-button mdc-button mat-mdc-button mat-primary mat-mdc-button-base';
    btn.setAttribute('aria-label', `Send to Text: ${bookLocation} ${callNumber}`);
    btn.innerHTML = `
      <span class="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
      <mat-icon role="img" class="mat-icon notranslate primary-fill mat-icon-no-color" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%">
          <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 46v-526H160v480Zm0 0v-480 480Z"/>
        </svg>
      </mat-icon>
      <span class="mdc-button__label"><span>Send to Text</span></span>
      <span class="mat-focus-indicator"></span>
      <span class="mat-mdc-button-touch-target"></span>
    `;

    btn.addEventListener('click', () => this.openSmsModal(url));
    return btn;
  }

  private openSmsModal(url: string): void {
    const existing = document.getElementById('uncw-sms-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'uncw-sms-modal';
    overlay.style.cssText = [
      'position:fixed', 'top:0', 'left:0', 'width:100%', 'height:100%',
      'background:rgba(0,0,0,0.55)', 'z-index:9999',
      'display:flex', 'align-items:center', 'justify-content:center',
    ].join(';');

    const container = document.createElement('div');
    container.style.cssText = [
      'background:#fff', 'width:640px', 'max-width:95vw', 'height:520px',
      'border-radius:8px', 'display:flex', 'flex-direction:column',
      'overflow:hidden', 'position:relative', 'box-shadow:0 8px 32px rgba(0,0,0,0.25)',
    ].join(';');

    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = [
      'position:absolute', 'top:8px', 'right:12px', 'background:none',
      'border:none', 'font-size:28px', 'line-height:1', 'cursor:pointer',
      'color:#333', 'z-index:1', 'padding:0 4px',
    ].join(';');
    closeBtn.addEventListener('click', () => overlay.remove());

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.title = 'Send to Text';
    iframe.style.cssText = 'width:100%;height:100%;border:none;flex:1;';

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    container.appendChild(closeBtn);
    container.appendChild(iframe);
    overlay.appendChild(container);
    document.body.appendChild(overlay);
  }
}
