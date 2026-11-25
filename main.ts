const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const joke = 'The CEO told my agent to eliminate human error. It gave him a CAPTCHA and a severance package.';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  const length = [...joke].length;
  if (length < 1 || length > 200 || !joke.trim()) {
    throw new Error('Entry must contain 1–200 Unicode code points and non-whitespace text.');
  }

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf8');
} catch (error) {
  console.error(`Failed to write entry to ${outputDir}:`, error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
