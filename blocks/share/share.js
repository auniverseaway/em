import { getMetadata } from '../../scripts/ak.js';

const AVAILABLE_SERVICES = {
  bluesky: {
    title: 'Bluesky',
    href: 'https://bsky.app/intent/compose?text={{text}}',
  },
  linkedin: {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/sharing/share-offsite/?url={{href}}',
  },
  reddit: {
    title: 'Reddit',
    href: 'https://reddit.com/submit?url={{href}}&title={{title}}',
  },
};

function getServices(names) {
  const ul = document.createElement('ul');
  ul.append(...names.map((name) => {
    const service = AVAILABLE_SERVICES[name];

    const { href } = window.location;
    const text = `${document.title} ${encodeURI(href)}`;
    const description = getMetadata('description');

    const a = document.createElement('a');
    a.textContent = service.title;
    a.href = service.href
      .replace('{{text}}', text)
      .replace('{{description}}', description)
      .replace('{{href}}', href);

    const li = document.createElement('li');
    li.append(a);
    return li;
  }));
  return ul;
}

export default function init(a) {
  const { searchParams } = new URL(a.href);
  const custom = searchParams.get('services');
  const names = custom
    ? custom.split(',')
    : Object.keys(AVAILABLE_SERVICES);

  const p = document.createElement('p');
  p.className = 'share-heading';
  p.textContent = 'Share';

  const div = document.createElement('div');
  div.className = 'social-share';
  div.append(p, getServices(names));
  a.parentElement.replaceChild(div, a);
}
