import { Component, OnInit, OnDestroy } from '@angular/core';

const SEARCH_PATH_PREFIXES = ['/nde/search', '/nde/jsearch', '/nde/browse'];
const STYLE_ID = 'hide-login-snackbar-style';

function isSearchPage(): boolean {
  return SEARCH_PATH_PREFIXES.some(p => window.location.pathname.startsWith(p));
}

function updateStyle(): void {
  const existing = document.getElementById(STYLE_ID);
  if (isSearchPage()) {
    if (!existing) {
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = 'mat-snack-bar-container.mdc-snackbar { opacity: 0 !important; }';
      document.head.appendChild(style);
    }
  } else {
    existing?.remove();
  }
}

@Component({
  selector: 'custom-hide-login-snackbar',
  standalone: true,
  template: '',
})
export class HideLoginSnackbarComponent implements OnInit, OnDestroy {
  private origPushState!: typeof history.pushState;
  private origReplaceState!: typeof history.replaceState;

  ngOnInit(): void {
    updateStyle();

    this.origPushState = history.pushState.bind(history);
    this.origReplaceState = history.replaceState.bind(history);

    history.pushState = (...args) => { this.origPushState(...args); updateStyle(); };
    history.replaceState = (...args) => { this.origReplaceState(...args); updateStyle(); };

    window.addEventListener('popstate', updateStyle);
  }

  ngOnDestroy(): void {
    history.pushState = this.origPushState;
    history.replaceState = this.origReplaceState;
    window.removeEventListener('popstate', updateStyle);
    document.getElementById(STYLE_ID)?.remove();
  }
}