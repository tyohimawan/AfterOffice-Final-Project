const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.experimentalStudio = true; // Enable experimental studio feature
      // on('before:browser:launch', (browser = {}, launchOptions) => {
      //   if (browser.name === 'chrome') {
      //     launchOptions.args.push('--disable-web-security');
      //     launchOptions.args.push('--disable-site-isolation-trials');
      //   }
      //   return launchOptions;
      // });
    },
  },
});
