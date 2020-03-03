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

let app = require("../task1");


/**
 * DATA
 */

let array = [1, 2, 3, 4, 5];
let numberThatExist = 2;
let numberThatNotExist = 10;


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
        "Zwracanie true gdy szukany element istnieje w tablicy",
        "Wyszukiwanie liczby 2 w tablicy " + array,
        1
    );
    subTests.push(test1);

    it(test1.testName, async () => {
        let exist = app.getNumber(numberThatExist, array);

        assert.equal(true, exist);
        test1.points = 1;
    });

    let test2 = new SingleTestResult(
        "Zwracanie false gdy szukany element nie istnieje w tablicy",
        "Metoda powinna zwrócić false przy wyszukiwaniu liczby " + numberThatNotExist + " w tablicy " + array,
        1
    );
    subTests.push(test2);
    it(test2.testName, async () => {
        let exist = app.getNumber(numberThatNotExist, array);

        assert.equal(false, exist)
        test2.points = 1;
    })

})

