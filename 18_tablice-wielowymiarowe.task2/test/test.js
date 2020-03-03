const TestResult = require("coderslab_fertestlibs/lib/TestResult");
const SingleTestResult = require("coderslab_fertestlibs/lib/SingleTestResult");
const SimpleError = require("coderslab_fertestlibs/lib/SimpleError");
const EsprimaHelper = require("coderslab_fertestlibs/lib/EsprimaHelper");
const Helper = require("coderslab_fertestlibs/lib/Helper");

const puppeteer = require("puppeteer");
const path = require("path");
const assert = require('assert');
const rewire = require('rewire');
const sinon = require("sinon");
const spy = sinon.spy(console, "log");

//PREPARE
let testName = Helper.createTestName("fero", 2, __dirname);
console.log("===========");
console.log(testName);
console.log("===========");
let testResult = new TestResult(testName);
let browser;
let subTests = [];

let app = rewire("../task2.js");
let createArray = app.__get__('createArray');


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
        "Metoda createArray tworzy tablicę",
        "",
        1
    )
    subTests.push(test1);
    it(test1.testName, async () => {
        let resultArray = createArray();
        assert(Array.isArray(resultArray));
        test1.points = 1;
     });

    let test2 = new SingleTestResult(
        "Stworzona tablica zawiera prawidłowe wartości",
        "",
        1
    )
    subTests.push(test2);
    it(test2.testName, async () => {
        let expectedArray = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12]
        ];
        let resultArray = createArray();
        assert.deepEqual(resultArray, expectedArray);
        test2.points = 1;
    });
});

