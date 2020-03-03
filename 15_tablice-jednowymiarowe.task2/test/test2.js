const TestResult = require("coderslab_fertestlibs/lib/TestResult");
const SingleTestResult = require("coderslab_fertestlibs/lib/SingleTestResult");
const SimpleError = require("coderslab_fertestlibs/lib/SimpleError");
const EsprimaHelper = require("coderslab_fertestlibs/lib/EsprimaHelper");
const Helper = require("coderslab_fertestlibs/lib/Helper");



const puppeteer = require("puppeteer");
const path = require("path");
const assert = require('assert');
const rewire = require('rewire');

//PREPARE
let testName = Helper.createTestName("fero", 2, __dirname);
console.log("===========");
console.log(testName);
console.log("===========");
let testResult = new TestResult(testName);
let browser;
let subTests = [];

let app = rewire("../task2.js");
let multiply = app.__get__('multiply');

/**
 * DATA
 */

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let res1 = 5040;

let arr2 = [1, 1, 1, 1];
let res2 = 1;

let arr3 = [2, 8, 3, 7];
let res3 = 336;

let arr4 = [];
let res4 = null;


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
        "Wynik " + res1 + " dla tablicy " + arr1,
        "", 1);
    subTests.push(test1);
    it(test1.testName, async () => {
        let result = multiply(arr1);
        assert.equal(res1, result);
        test1.points = 1;
    });

    let test2 = new SingleTestResult(
        "Wynik " + res2 + " dla tablicy " + arr2,
        "",
        1
    );
    subTests.push(test2);
    it(test2.testName, async () => {
        let result = multiply(arr2);
        assert.equal(res2, result);
        test2.points = 1;
    });
    let test3 = new SingleTestResult(
        "Wynik " + res3 + " dla tablicy " + arr3,
        "",
        1
    );
    subTests.push(test3);
    it(test3.testName, async () => {
        let result = multiply(arr3);
        assert.equal(res3, result);
        test3.points = 1;
    });
    let test4 = new SingleTestResult(
        "Wynik " + res4 + " dla pustej tablicy ",
        "",
        1
    );
    subTests.push(test4);
    it(test4.testName, async () => {
        let result = multiply(arr4);
        assert.equal(res4, result);
        test4.points = 1;
    });


});