
import { chromium, defineConfig, devices, firefox } from '@playwright/test';

module.exports = defineConfig({
  testMatches: [
    "tests/register.test.js",
    "tests/login.test.js",
    "tests/signOut.test.js",
    "tests/language.test.js",
    "tests/cart.test.js",
    "tests/search.test.js",
    "tests/filter.test.js",
    "tests/favorite.test.js",
    "tests/resetPassword.test.js",
  ],
  // use: {
  //   headless: false,
  //   screenshot: "on",
  // },
  projects: [
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'], 
        headless: false
      },
    },
    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     headless: false,
    //     channel: 'chrome',
    //   }
    // }
  ],
  reporter: [ 
    ["json", {
      outputFile: "jsonReports/jsonReports.json"
    }],
    ["html", {
      open: "never"
    }]
  ]
});


