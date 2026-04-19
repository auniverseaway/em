import { getMetadata, loadArea } from '../../scripts/ak.js';

async function loadAuthor() {
}

function buildArticleHero() {
  const pic = document.querySelector('picture');
  const picPara = pic.parentElement;

  const title = document.querySelector('h1');

  const bg = pic.cloneNode(true);
  bg.className = 'section-background strong-blur';

  const fg = document.createElement('div');
  fg.className = 'block-content article-hero-foreground';

  const fgMedia = document.createElement('div');
  fgMedia.className = 'article-hero-foreground-media';

  const overlay = document.createElement('div');
  overlay.className = 'article-hero-background-overlay';

  fgMedia.append(pic);
  if (picPara.children.length === 0) {
    picPara.remove();
  }

  const fgText = document.createElement('div');
  fgText.className = 'article-hero-foreground-text';

  const dateMeta = getMetadata('publish-date');
  const rawDate = new Date(dateMeta);
  const dateText = rawDate.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });

  const date = document.createElement('p');
  date.className = 'article-date';
  date.textContent = dateText;

  const author = document.createElement('a');
  author.className = 'article-author';
  author.textContent = getMetadata('author') || 'Unknown author';
  author.href = '#';
  loadAuthor(author);

  fgText.append(date, title, author);

  fg.append(fgText, fgMedia);

  const section = document.createElement('section');
  section.className = 'article-hero';
  section.append(bg, overlay, fg);

  return section;
}

function buildArticleBody(main) {
  const contents = main.querySelectorAll(':scope > *');
  const section = document.createElement('section');
  section.className = 'article-body';

  section.append(...contents);

  return section;
}

function buildArticleAside() {
  const aside = document.createElement('aside');
  aside.className = 'article-share';

  const link = document.createElement('a');
  link.href = '/tools/widgets/share.html';
  link.textContent = 'Share - All platforms';

  const section = document.createElement('div');
  section.append(link);

  aside.append(section);

  loadArea({ area: aside });

  return aside;
}

export default function init() {
  const main = document.querySelector('main');

  const hero = buildArticleHero();
  const body = buildArticleBody(main);
  const share = buildArticleAside();

  const section = document.createElement('section');
  section.className = 'article-content';
  section.append(body, share);

  const article = document.createElement('article');
  article.append(hero, section);

  main.append(article);
}
