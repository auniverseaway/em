import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const OUT = '/home/cmillar/Sites/source/em2/stardust/_scratch';

const TARGETS = [
  { slug: 'commarts', url: 'https://www.commarts.com/' },
  { slug: 'mindsparkle', url: 'https://mindsparklemag.com/' },
];

async function extract(browser, { slug, url }) {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
  });
  const page = await ctx.newPage();
  console.log(`[${slug}] loading ${url}`);
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  } catch (e) {
    console.log(`[${slug}] networkidle failed, falling back to load`);
    await page.goto(url, { waitUntil: 'load', timeout: 45000 });
  }
  await page.waitForTimeout(1500);

  await page.screenshot({ path: join(OUT, `${slug}-hero.png`), clip: { x: 0, y: 0, width: 1440, height: 900 } });
  await page.screenshot({ path: join(OUT, `${slug}-full.png`), fullPage: true });

  const data = await page.evaluate(() => {
    const cssVars = {};
    const rootStyle = getComputedStyle(document.documentElement);
    for (let i = 0; i < rootStyle.length; i++) {
      const name = rootStyle[i];
      if (name.startsWith('--')) cssVars[name] = rootStyle.getPropertyValue(name).trim();
    }
    const bodyStyle = getComputedStyle(document.body);

    const fams = new Set();
    document.querySelectorAll('body, body *').forEach((el) => {
      const f = getComputedStyle(el).fontFamily;
      if (f) fams.add(f);
    });

    const headings = [];
    document.querySelectorAll('h1, h2, h3').forEach((el, i) => {
      if (i >= 12) return;
      const cs = getComputedStyle(el);
      const text = (el.innerText || '').trim().slice(0, 120);
      if (!text) return;
      headings.push({
        tag: el.tagName,
        text,
        fontFamily: cs.fontFamily,
        fontWeight: cs.fontWeight,
        fontStyle: cs.fontStyle,
        fontSize: cs.fontSize,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        color: cs.color,
        textTransform: cs.textTransform,
      });
    });

    const paragraphs = [];
    document.querySelectorAll('p').forEach((el, i) => {
      if (paragraphs.length >= 3) return;
      const t = (el.innerText || '').trim();
      if (!t || t.length < 20) return;
      const cs = getComputedStyle(el);
      paragraphs.push({
        text: t.slice(0, 240),
        fontFamily: cs.fontFamily,
        fontWeight: cs.fontWeight,
        fontSize: cs.fontSize,
        lineHeight: cs.lineHeight,
        color: cs.color,
        opacity: cs.opacity,
      });
    });

    const italics = [];
    document.querySelectorAll('em, i, [class*="italic" i]').forEach((el, i) => {
      if (italics.length >= 5) return;
      const t = (el.innerText || '').trim();
      if (!t) return;
      const cs = getComputedStyle(el);
      italics.push({
        tag: el.tagName,
        text: t.slice(0, 80),
        fontFamily: cs.fontFamily,
        fontStyle: cs.fontStyle,
        fontWeight: cs.fontWeight,
      });
    });

    const ctas = [];
    document.querySelectorAll('a[class*="button" i], button, a[class*="cta" i], a[class*="btn" i]').forEach((el) => {
      if (ctas.length >= 8) return;
      const t = (el.innerText || '').trim();
      if (!t || t.length > 40) return;
      const cs = getComputedStyle(el);
      ctas.push({
        text: t,
        bg: cs.backgroundColor,
        color: cs.color,
        borderRadius: cs.borderRadius,
        padding: cs.padding,
        border: cs.border,
        fontFamily: cs.fontFamily,
        fontWeight: cs.fontWeight,
        textTransform: cs.textTransform,
        letterSpacing: cs.letterSpacing,
      });
    });

    const surfaces = new Set();
    document.querySelectorAll('section, header, main > div, footer, [class*="hero" i]').forEach((el) => {
      const cs = getComputedStyle(el);
      const bg = cs.backgroundColor;
      if (bg && !bg.includes('rgba(0, 0, 0, 0)')) surfaces.add(bg);
    });

    const heroCopy = [];
    document.querySelectorAll('h1, h2, [class*="hero" i] p, [class*="hero" i] h1, [class*="hero" i] h2').forEach((el) => {
      if (heroCopy.length >= 6) return;
      const t = (el.innerText || '').trim();
      if (!t) return;
      heroCopy.push(t.slice(0, 200));
    });

    const meta = {};
    document.querySelectorAll('meta').forEach((m) => {
      const k = m.getAttribute('name') || m.getAttribute('property');
      if (k && ['theme-color', 'description', 'og:title', 'og:description', 'og:image', 'twitter:title'].includes(k)) {
        meta[k] = m.getAttribute('content');
      }
    });

    const logos = [];
    document.querySelectorAll('header svg, nav svg, [class*="logo" i] svg').forEach((el) => {
      if (logos.length >= 3) return;
      logos.push({ kind: 'svg', html: el.outerHTML.slice(0, 4000) });
    });
    document.querySelectorAll('header img, nav img, img[src*="logo" i], img[class*="logo" i], img[alt*="logo" i]').forEach((el) => {
      if (logos.length >= 5) return;
      logos.push({ kind: 'img', src: el.src, alt: el.alt, w: el.naturalWidth, h: el.naturalHeight });
    });

    return {
      url: location.href,
      title: document.title,
      cssVars,
      bodyStyle: {
        background: bodyStyle.backgroundColor,
        color: bodyStyle.color,
        fontFamily: bodyStyle.fontFamily,
        fontSize: bodyStyle.fontSize,
        lineHeight: bodyStyle.lineHeight,
      },
      fontFamilies: [...fams],
      headings,
      paragraphs,
      italics,
      ctas,
      surfaces: [...surfaces],
      heroCopy,
      meta,
      logos,
    };
  });

  writeFileSync(join(OUT, `${slug}.json`), JSON.stringify(data, null, 2));
  console.log(`[${slug}] wrote ${slug}.json + screenshots`);
  await ctx.close();
  return data;
}

const browser = await chromium.launch({ headless: true });
for (const t of TARGETS) {
  try { await extract(browser, t); }
  catch (e) { console.error(`[${t.slug}] failed:`, e.message); }
}
await browser.close();
console.log('done');
