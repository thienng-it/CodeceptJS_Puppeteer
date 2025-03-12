const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  multiple: {
    // parallel: {
    //   chunks: 2,
    //   browsers: ['firefox', 'chrome']
    // },
    basic: {
      browsers: ["firefox", "chrome"]
    },
  },
  helpers: {
    Puppeteer: {
      url: 'https://www.w3schools.com',
      show: true,
      browsers: ['firefox', 'chrome']
    }
  },

  include: {
    I: './steps_file.js'
  },
  name: 'CodeCeptJS_DACK'
}