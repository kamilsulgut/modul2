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
console.log("===========");
let testResult = new TestResult(testName);
let browser;
let subTests = [];

let app = require("../task9");


/**
 * DATA
 */

let num1 = 2;
let num2 = 4;
let num3 = 3;


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
        "Sumowanie dwóch liczb z wykorzystaniem sumTwo",
        "",
        1
    );
    subTests.push(test1);

    it(test1.testName, async () => {
        let result = app.sumTwo(num1, num2);
        assert.equal(result, 6);
        test1.points = 1;
    });

    let test2 = new SingleTestResult(
        "Sumowanie trzech liczb z wykorzystaniem sumThree",
        "",
        1
    );
    subTests.push(test2);
    it(test2.testName, async () => {
        let result = app.sumThree(num1, num2, num3);
        assert.equal(result, 9);
        test2.points = 1;
    });

})
