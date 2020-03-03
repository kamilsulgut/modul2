const TestResult = require("coderslab_fertestlibs/lib/TestResult");
const SingleTestResult = require("coderslab_fertestlibs/lib/SingleTestResult");
const SimpleError = require("coderslab_fertestlibs/lib/SimpleError");
const EsprimaHelper = require("coderslab_fertestlibs/lib/EsprimaHelper");
const Helper = require("coderslab_fertestlibs/lib/Helper");



const puppeteer = require("puppeteer");
const path = require("path");
const assert = require('assert');


//PREPARE
let testName = Helper.createTestName("fero",2, __dirname);
console.log("===========");
console.log(testName);
console.log("===========");let testResult = new TestResult(testName);
let browser;
let subTests = [];

let app = require("../task1");

describe("", () => {

    before(async () => {
        // browser = await puppeteer.launch({
        //     args: ["--no-sandbox", "--disable-setuid-sandbox"]
        // });
        //
        // const context = await browser.createIncognitoBrowserContext();
        // let page = await context.newPage();
        // let filePath = path.join(__dirname, "../zadanie01.html");
        // await page.goto(`file://${filePath}`);
    });

    after(async () => {
        // await browser.close();
        subTests.forEach(t => testResult.addTest(t));
        testResult.send();
    });


    let test1 = new SingleTestResult(
        'Oblicza wynik potęgowania',
        '',
        1
    );
    subTests.push(test1);
    it(test1.testName, async () => {
        let result = app.calculator(2, 3, '^');
        assert.equal(8, result);
        test1.points = 1;
    });

    let test2 = new SingleTestResult(
        'Oblicza wynik pierwiastkowania',
        '',
        1
    );
    subTests.push(test2);
    it(test2.testName, async () => {
        let result = app.calculator(8, 3, 'sq');
        assert.equal(2, result);
        test2.points = 1;
    });

    let test3 = new SingleTestResult(
        'Prawidłowo zaokrągla liczby',
        '',
        1
    );
    subTests.push(test3);
    it(test3.testName, async () => {
        let result = app.calculator(99.3878, 2, 'dec');
        assert.equal(99.39, result);
        test3.points = 1;
    });



});
