# Gaia Docs

Gaia is a decentralized AI infrastructure that empowers everyone to build, scale, and monetize personalized AI agents. This documentation project can be used by Gaia node operators, users, and creators.

## Quickstart

1. Fork the repository:
   - Visit the [Gaia docs repository](https://github.com/GaiaNet-AI/docs) on GitHub
   - Click the "Fork" button in the top-right corner
   - Select where you want to fork the repository (your personal account or an organization)

2. Clone your forked repository:`

   ```bash
   git clone https://github.com/YOUR-USERNAME/docs.git
   cd docs
   ```

## Running the Documentation Locally

After forking and cloning the repository:

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm start
   ```
3. Open your browser and visit `http://localhost:3000`

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

## Structure

- `docs/`: Contains all the markdown files for the documentation
- `src/`: Custom React components and pages
- `static/`: Static assets like images
- `docusaurus.config.js`: Main configuration file for Docusaurus

## Deployment

This documentation is automatically deployed to [docs.gaianet.ai](https://docs.gaianet.ai) when changes are merged into the main branch.

## 🤝 Contributing to Gaia docs

Gaia docs is an open-source project, and contributions from the community are highly valued! We believe in collaborative development to build a robust and innovative platform.

**How You Can Contribute:**

- **Reporting Issues:** If you encounter bugs, have feature requests, or find areas for improvement, please open a detailed issue on [GitHub Issues](https://github.com/GaiaNet-AI/docs/issues).
- **Submitting Pull Requests:** We welcome code contributions! If you've implemented a bug fix or a new feature, submit a pull request following our [Contribution Guidelines](https://github.com/Gaianet-AI/docs/blob/main/CONTRIBUTING.md). Please ensure your code adheres to the project's style and includes relevant tests.
- **Documentation:** Help us improve [the documentation](https://docs.gaianet.ai/intro) by clarifying existing sections, adding new guides, or translating the documentation into other languages.

- **Community Support:** Assist other builders by answering questions on GitHub issues or our [Telegram builders' Community](https://t.me/+a0bJInD5lsYxNDJl).

Please take a look at our [Code of Conduct](https://github.com/Gaianet-AI/docs/blob/main/CODE_OF_CONDUCT.md) to ensure a positive and inclusive environment for everyone.

## Need Help?

Want to talk to the community? Hop in our [Telegram](https://t.me/+a0bJInD5lsYxNDJl) and share your ideas and what you've build with Gaianet.

Find a bug? Head over to our [issue tracker](https://github.com/GaiaNet-AI/docs/issues) and we'll do our best to help. We love pull requests, too!

## 📜 License

This project is licensed under the [Apache License 2.0](https://github.com/GaiaNet-AI/docs/blob/main/LICENSE)


