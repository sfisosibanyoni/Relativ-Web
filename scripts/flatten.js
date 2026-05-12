import { cpSync, mkdirSync } from 'fs';
import { join } from 'path';

const dist = 'dist';

const routes = [
  'case-study',
  'strategy',
  'design-creative',
  'ai-solutions',
  'marketing-comms',
  'privacy-policy',
  'terms-of-service',
];

for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  cpSync(join(dist, 'index.html'), join(dir, 'index.html'));
  console.log(`  ✓ ${route}/index.html`);
}

console.log(`\nFlattened ${routes.length} routes into ${dist}/`);
