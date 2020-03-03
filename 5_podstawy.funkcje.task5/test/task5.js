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

let app = require("../task5");


/**
 * DATA
 */

let singleElementArray = [22];
let array = [100, 99, 98, 97, 96, 78, 30, 20];
let validResultArrayForFive = [97, 96, 78, 30, 20];


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
        "Zwracanie pustej tablicy przy braku pierwszego parametru",
        "",
        1
    );
    subTests.push(test1);

    it(test1.testName, async () => {
        let result = app.getLastNumbers(array);
        assert.deepEqual(result, []);
        test1.points = 1;
    });

    let test2 = new SingleTestResult(
        "Zwracanie pustej tablicy gdy pierwszy parametr nie jest liczbą",
        "",
        1
    );
    subTests.push(test2);
    it(test2.testName, async () => {
        let result = app.getLastNumbers(array, array);
        assert.deepEqual(result, []);
        test2.points = 1;
    });

    let test3 = new SingleTestResult(
        "Zwracanie pustej tablicy jeżeli liczba jest większa niż długość tablicy",
        "",
        1
    );
    subTests.push(test3);
    it(test3.testName, async () => {
        let result = app.getLastNumbers(5, singleElementArray);
        assert.deepEqual(result, []);
        test3.points = 1;
    });

    let test4 = new SingleTestResult(
        "Zwracanie tablicy o prawidłowej długości",
        "",
        1
    );
    it(test4.testName, async () => {
        let result = app.getLastNumbers(5, array);
        assert.deepEqual(result, validResultArrayForFive);
        test4.points = 1;
    });


});