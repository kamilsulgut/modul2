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
let app = require("../task4");


/**
 * DATA
 */
let emptyArray = [];
let singleElementArray = [22];
let arrayWithAscendingElements = [31, 32, 33, 34, 35];
let arrayWithHoleInAscending = [31, 32, 34, 35];
let arrayWithBiggerHoleInAscending = [31, 35];
let arrayWithDescendingElements = [100, 99, 98, 97, 96];

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
        "Zwracanie null dla pustej tablicy",
        "",
        1
    );
    subTests.push(test1);

    it(test1.testName, async () => {
        let result = app.getMissingElement(emptyArray);
        assert.deepEqual(result, null);
        test1.points = 1;
    });

    let test2 = new SingleTestResult(
        "Zwracanie null dla tablicy z pojedynczym elementem",
        "",
        1
    );
    subTests.push(test2);

    it(test2.testName, async () => {
        let result = app.getMissingElement(singleElementArray);
        assert.deepEqual(result, null);
        test2.points = 1;
    });

    let test3 = new SingleTestResult(
        "Zwracanie pozycji, po której dochodzi do 'przeskoku' o jeden",
        "",
        1
    );
    subTests.push(test3);

    it(test3.testName, async () => {
        let result = app.getMissingElement(arrayWithHoleInAscending);
        assert.deepEqual(result, 1);
        test3.points = 1;
    });

    let test4 = new SingleTestResult(
        "Zwracanie pozycji, po której dochodzi do 'przeskoku' o więcej niż jeden",
        "",
        1
    );
    subTests.push(test4);

    it(test4.testName, async () => {
        let result = app.getMissingElement(arrayWithBiggerHoleInAscending);
        assert.deepEqual(result, 0);
        test4.points = 1;
    });

    let test5 = new SingleTestResult(
        "Zwracanie pozycji, gdy zostanie przekazana tablica malejąca",
        "",
        1
    );
    subTests.push(test5);
    it(test5.testName, async () => {
        let result = app.getMissingElement(arrayWithDescendingElements);
        assert.deepEqual(result, 0);
        test5.points = 1;
    });

    let test6 = new SingleTestResult(
        "Zwracanie null gdy tablica spełnia wszystkie warunki",
        "",
        1
    );
    subTests.push(test6);

    it(test6.testName, async () => {
        let result = app.getMissingElement(arrayWithAscendingElements);
        assert.deepEqual(result, null);
        test6.points = 1;
    });


})