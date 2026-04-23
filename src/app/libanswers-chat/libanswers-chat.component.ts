import { Component, OnInit } from '@angular/core';

// component version of: https://github.com/Miamiohlibs/primoNDE-view-customization/wiki/Embedding-LibChat-into-Primo-NDE
// original idea at: https://developers.exlibrisgroup.com/blog/embedding-springshare-libchat-widget-into-the-primo-nu/

@Component({
  selector: 'custom-libanswers-chat',
  standalone: true,
  template: '',
})
export class LibAnswersChatComponent implements OnInit {
  ngOnInit(): void {
    if (document.querySelector('script[data-libanswers-chat]')) {
      console.log('LibAnswers already injected')
      return; // already injected
    }

    const protocol = document.location.protocol === 'https:' ? 'https://' : 'http://';
    const lc = document.createElement('script');
    lc.type = 'text/javascript';
    lc.async = true;
    lc.setAttribute('data-libanswers-chat', 'true');
    lc.src =
      protocol +
      'uncw.libanswers.com/load_chat.php?hash=c29df0495cb2f734e42785dbb34e4d07ed30d46dcae5f249a035fcac5f3a4581';

    // after loaded, do a click on the button to open the window (to default it to open)
    lc.addEventListener('load', () => {
      const observer = new MutationObserver(() => {
        const btn = document.getElementById('lcs_slide_out_button-27127') as HTMLElement | null;
        if (btn) {
          btn.click();
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    });

    const s = document.getElementsByTagName('script')[0];
    s.parentNode!.insertBefore(lc, s);
  }
}
