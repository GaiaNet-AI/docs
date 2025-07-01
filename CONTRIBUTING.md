# Contributing to Gaia Docs

Thank you for your interest in contributing to **Gaia Docs**! We welcome all contributions—whether you're fixing a typo, improving clarity, or adding new documentation. Let’s make Gaia better together.

## How to Contribute

### 1. Fork the Repository

- Navigate to the [Gaia Docs GitHub repo](https://github.com/GaiaNet-AI/docs)
- Click the **"Fork"** button in the upper-right corner
- Choose your personal GitHub account (or an organization)

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/docs.git
cd docs
```

### 3. Create a Feature Branch

```bash
git checkout -b my-feature-branch
```

> Use descriptive names like `fix-broken-links`, `add-node-setup-guide`, or `update-homepage`.

### 4. Make Your Changes

- Edit the relevant Markdown or React files
- Follow the existing formatting and tone

### 5. Commit Your Work

```bash
git add .
git commit -m "Clear description of your change"
```

### 6. Push to Your Fork

```bash
git push origin my-feature-branch
```

### 7. Open a Pull Request

- Go to your fork on GitHub
- Click **"Compare & pull request"**
- Provide a concise but helpful description
- Link any relevant issues or screenshots if needed

---

## Contribution Checklist

Before submitting a pull request, please ensure:

- ✅ Your changes are relevant and accurate
- ✅ Markdown is properly formatted
- ✅ No broken links or references
- ✅ You followed the existing structure and tone
- ✅ You tested the site locally with `npm start`

---

## Running Locally

After cloning the repo:

```bash
npm install
npm start
```

Visit `http://localhost:3000` to preview your changes.

---

## Troubleshooting

### Command failed: ps cax -o command...

While running `npm start` you may run into a this error. This happens because of a bug that prevents docusaurus from starting on macOS computers without a Chrome/Chromium browser installed (or haven't opened one in a while). To fix this error, you can either run the update command in the error message or open a Chrome/Chromium tab.

#### Error details

```
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                                         Update available 3.8.0 → 3.8.1

                                                               To upgrade Docusaurus packages with the latest version, run the following command:
      `npm i @docusaurus/core@latest @docusaurus/plugin-client-redirects@latest @docusaurus/plugin-google-analytics@latest @docusaurus/plugin-google-tag-manager@latest @docusaurus/preset-classic@latest
                                                                       @docusaurus/module-type-aliases@latest @docusaurus/types@latest`

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[INFO] Starting the development server...
[SUCCESS] Docusaurus website is running at: http://localhost:3000/

● Client █████████████████████████ building (10%) 0/3 entries 2/3 dependencies 0/2 modules 1 active
 node_modules/webpack-dev-server/client/index.js


[ERROR] Error: Command failed: ps cax -o command | grep -E "^(Google Chrome Canary|Google Chrome Dev|Google Chrome Beta|Google Chrome|Microsoft Edge|Brave Browser|Vivaldi|Chromium)$"

    at genericNodeError (node:internal/errors:983:15)
    at wrappedFn (node:internal/errors:537:14)
    at ChildProcess.exithandler (node:child_process:414:12)
    at ChildProcess.emit (node:events:518:28)
    at maybeClose (node:internal/child_process:1101:16)
    at Socket.<anonymous> (node:internal/child_process:456:11)
    at Socket.emit (node:events:518:28)
    at Pipe.<anonymous> (node:net:351:12) {
  code: 1,
  killed: false,
  signal: null,
  cmd: 'ps cax -o command | grep -E "^(Google Chrome Canary|Google Chrome Dev|Google Chrome Beta|Google Chrome|Microsoft Edge|Brave Browser|Vivaldi|Chromium)$"',
  stdout: '',
  stderr: ''
}
[INFO] Docusaurus version: 3.8.0
Node version: v22.16.0
```

---

## Docs Structure Overview

- `docs/` – Markdown files for core documentation
- `src/` – Custom React components
- `static/` – Images and other static assets
- `docusaurus.config.js` – Site configuration

---

## Got Questions?

- Join the conversation on [Telegram](https://t.me/+a0bJInD5lsYxNDJl)
- Found a bug? Open an issue on our [Issue Tracker](https://github.com/GaiaNet-AI/docs/issues)

---

## License

By contributing, you agree that your contributions will be licensed under the [Apache 2.0 License](https://github.com/GaiaNet-AI/docs/blob/main/LICENSE).

—--
