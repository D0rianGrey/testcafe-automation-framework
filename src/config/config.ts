export const config = {
    baseUrl: 'https://www.saucedemo.com',
    credentials: {
        standardUser: {
            username: 'standard_user',
            password: 'secret_sauce'
        },
        lockedOutUser: {
            username: 'locked_out_user',
            password: 'secret_sauce'
        },
        problemUser: {
            username: 'problem_user',
            password: 'secret_sauce'
        }
    },
    timeouts: {
        elementTimeout: 10000, // 10 секунд
        pageLoadTimeout: 30000 // 30 секунд
    },
    browser: {
        headless: false,
        defaultWidth: 1920,
        defaultHeight: 1080
    },
    reporting: {
        outputDir: './reports',
        takeScreenshotOnFailure: true
    }
};