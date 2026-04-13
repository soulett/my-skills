const fs = require('fs');
const path = require('path');

const [, , moduleRootArg, inputArg, outputArg, baseDirArg, cssArg] = process.argv;

if (!moduleRootArg || !inputArg || !outputArg) {
  console.error(
    'Usage: node convert-md-to-pdf.js <module-root> <input.md> <output.pdf> [base-dir] [css-path]',
  );
  process.exit(1);
}

const moduleRoot = path.resolve(moduleRootArg);
const { mdToPdf } = require(path.join(moduleRoot, 'node_modules', 'md-to-pdf'));

const inputPath = path.resolve(inputArg);
const outputPath = path.resolve(outputArg);
const baseDir = path.resolve(baseDirArg || process.cwd());
const cssPath = cssArg ? path.resolve(cssArg) : path.join(__dirname, '..', 'assets', 'markdown-pdf.css');

const browserCandidates = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
];

const executablePath = browserCandidates.find((candidate) => fs.existsSync(candidate));

if (!executablePath) {
  console.error('No supported browser found. Install Edge or Chrome first.');
  process.exit(2);
}

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`);
  process.exit(3);
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });

(async () => {
  const result = await mdToPdf(
    { path: inputPath },
    {
      dest: outputPath,
      basedir: baseDir,
      stylesheet: [cssPath],
      marked_options: {
        headerIds: true,
        mangle: false,
      },
      launch_options: {
        executablePath,
        headless: true,
      },
      pdf_options: {
        format: 'A4',
        margin: '18mm 16mm 18mm 16mm',
        printBackground: true,
      },
    },
  );

  if (!result) {
    console.error('Conversion failed without output.');
    process.exit(4);
  }

  console.log(outputPath);
})().catch((error) => {
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(5);
});
