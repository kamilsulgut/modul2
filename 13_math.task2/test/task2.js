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

let app = require("../task2");

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
        'Prawidłowo losuje liczby całkowite z zakresu 1 do 1',
        '',
        1
    );
    subTests.push(test1);
    it(test1.testName, async () => {
        let result = app.randomNumber(1, 1);
        assert.ok(1, result);
        test1.points = 1;
    });

    let test2 = new SingleTestResult(
        'Prawidłowo losuje liczby całkowite z zakresu 1 do 10',
        '',
        1
    );
    subTests.push(test2);
    it(test2.testName, async () => {
        let result = app.randomNumber(1, 10);
        assert.ok( result >= 1 && result <= 10);
        test2.points = 1;
    });


    let test3 = new SingleTestResult(
        'Prawidłowo losuje liczby całkowite z zakresu 10 do 11',
        '',
        1
    );
    subTests.push(test3);
    it(test3.testName, async () => {
        let result = app.randomNumber(10, 11);
        assert.ok( result == 10 || result == 11);
        test3.points = 1;
    });





});
