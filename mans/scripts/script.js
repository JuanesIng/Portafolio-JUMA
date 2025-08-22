 (function () {
      const btn = document.getElementById('contact-toggle');
      const panel = document.getElementById('contact-panel');
      if (!btn || !panel) return;

      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if (expanded) {
          panel.hidden = true;
        } else {
          panel.hidden = false;
        }
      });
    })();