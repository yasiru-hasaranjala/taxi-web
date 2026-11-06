document.addEventListener("DOMContentLoaded", () => {
    const cfg = window.AppConfig;
    const $  = (id)  => document.getElementById(id);
    const $$ = (sel) => document.querySelectorAll(sel);

    // ── Utility: load image with fallback chain ───────────────
    function loadWithFallback(imgEl, urls, idx = 0) {
        if (!imgEl || idx >= urls.length) return;
        imgEl.src = urls[idx];
        imgEl.onerror = () => loadWithFallback(imgEl, urls, idx + 1);
        imgEl.onload  = () => { imgEl.style.opacity = '1'; };
        imgEl.style.opacity = '0';
        imgEl.style.transition = 'opacity 0.6s ease';
    }

    // ── 1. Brand / Meta ───────────────────────────────────────
    $('brand-name').textContent        = cfg.businessName;
    $('footer-logo').textContent       = cfg.businessName;
    $('footer-brand-name').textContent = cfg.businessName;
    $('description-text').textContent  = cfg.description;
    $('copyright-year').textContent    = cfg.footerYear;

    // ── 2. Hero Background ─────────────────────────────────────
    const hero = document.querySelector('.hero-bg');
    if (hero && cfg.heroImages && cfg.heroImages.length) {
        let heroIdx = 0;
        function tryHero() {
            if (heroIdx >= cfg.heroImages.length) return;
            const probe = new Image();
            probe.onload  = () => {
                hero.style.backgroundImage = `url('${cfg.heroImages[heroIdx]}')`;
            };
            probe.onerror = () => { heroIdx++; tryHero(); };
            probe.src = cfg.heroImages[heroIdx];
        }
        tryHero();
    }

    // ── 3. Fleet Image ────────────────────────────────────────
    $('fleet-vehicle-name').textContent = cfg.fleet.primaryVehicle;
    $('fleet-badge').textContent        = cfg.fleet.primaryVehicle;
    loadWithFallback($('fleet-img'), cfg.fleet.vehicleImages);

    const featureList = $('fleet-features-list');
    cfg.fleet.keyFeatures.forEach(f => {
        const li = document.createElement('li');
        li.textContent = f;
        featureList.appendChild(li);
    });

    // ── 4. Contact Links ──────────────────────────────────────
    const waLink = cfg.contact.whatsappLink;
    [
        'floating-whatsapp', 'hero-whatsapp-btn',
        'nav-contact-btn',   'drawer-contact-btn',
        'fleet-book-btn',    'contact-whatsapp-link'
    ].forEach(id => { if ($(id)) $(id).href = waLink; });

    $('contact-whatsapp-display').textContent = cfg.contact.phone;

    const mailto = `mailto:${cfg.contact.email}`;
    $('contact-email-link').href              = mailto;
    $('contact-email-display').textContent    = cfg.contact.email;
    $('footer-phone').textContent             = cfg.contact.phone;
    $('footer-email').textContent             = cfg.contact.email;

    // ── 5. Destination Cards ──────────────────────────────────
    const grid = $('destinations-container');
    cfg.destinations.forEach((dest, i) => {
        const card = document.createElement('a');
        card.href      = cfg.contact.whatsappLink;
        card.target    = '_blank';
        card.rel       = 'noopener noreferrer';
        card.className = 'dest-card scroll-reveal';
        card.dataset.delay = String(i * 100);

        // Create image element separately so fallback works
        const img = document.createElement('img');
        img.className = 'dest-img';
        img.alt       = `${dest.name}, Sri Lanka`;
        img.loading   = 'lazy';

        const info = document.createElement('div');
        info.className = 'dest-info';
        info.innerHTML = `
            <h4>${dest.name}</h4>
            <p>${dest.subtitle}</p>
            <span class="dest-chip">Explore →</span>`;

        card.append(img, info);
        grid.appendChild(card);

        // Load with fallback chain
        loadWithFallback(img, dest.images);
    });

    // ── 6. Sticky Header ─────────────────────────────────────
    const header = $('main-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // ── 7. Mobile Drawer ──────────────────────────────────────
    const hamburger   = $('hamburger-btn');
    const drawer      = $('mobile-drawer');
    const overlay     = $('drawer-overlay');

    const openDrawer  = () => {
        drawer.classList.add('open');
        overlay.classList.add('open');
        hamburger.classList.add('open');
        document.body.style.overflow = 'hidden';
    };
    const closeDrawer = () => {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () =>
        drawer.classList.contains('open') ? closeDrawer() : openDrawer()
    );
    overlay.addEventListener('click', closeDrawer);
    $$('.drawer-link').forEach(l => l.addEventListener('click', closeDrawer));

    // ── 8. Hero Staggered Reveal ──────────────────────────────
    $$('.reveal-item').forEach(el => {
        el.style.animationDelay = `${el.dataset.delay || 0}ms`;
    });

    // ── 9. Scroll-Reveal (IntersectionObserver) ───────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const delay = Number(entry.target.dataset.delay || 0);
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    $$('.scroll-reveal').forEach(el => observer.observe(el));

    // ── 10. Smooth Anchor Scroll ──────────────────────────────
    $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.getElementById(
                anchor.getAttribute('href').slice(1)
            );
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
