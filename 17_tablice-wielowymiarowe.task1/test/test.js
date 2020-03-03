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

let app = rewire("../task1.js");
let array2D = app.__get__('array2D');

//DATA
let expectedArray = [
    ['Maria', 'Jan', 'Piotr'],
    [1, 2, 3, 4, 5, 6]
];

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
        "Stworzona tablica dwuwymiarowa z poprawnymi wartościami",
        "",
        1
    )
    subTests.push(test1);
    it(test1.testName, async () => {
        assert.deepEqual(expectedArray, array2D);
        test1.points = 1;
    });

    let test2 = new SingleTestResult(
        "Wyświetlona wartość trzeciego element z pierwszego wiersza",
        "Czy pamiętasz o prefiksie wiersza?",
        1);
    subTests.push(test2);
    it(test2.testName, async () => {
        assert(spy.calledWith("p1::Piotr"));
        test2.points=1;
    });

    let test3 = new SingleTestResult(
        "Wyświetlony piąty element z pierwszego wiersza",
        "Czy pamiętasz o prefiksie wiersza?",
        1);
    subTests.push(test3);
    it(test3.testName, async () => {
        assert(spy.calledWith("p2::undefined"));
        test3.points=1;
    });

    let test4 = new SingleTestResult(
        "Wyświetlona długość drugiego elementu z pierwszego wymiaru",
        "Czy pamiętasz o prefiksie wiersza?",
        1);
    subTests.push(test4);
    it(test4.testName, async () => {
        assert(spy.calledWith("p3::6"));
        test4.points=1;
    });

    let test5 = new SingleTestResult(
        "Wyświetlone długości kolejnych wierszy",
        "Czy pamiętasz o prefiksie wiersza?",
        2);
    subTests.push(test5);
    it(test5.testName, async () => {
        assert(spy.calledWith("p4::3"));
        assert(spy.calledWith("p4::6"));
        test5.points=2;
    });

    let test6 = new SingleTestResult(
        "Wyświetlone kolejne wartości z tablicy",
        "Czy pamiętasz o prefiksie wiersza?",
        2);
    subTests.push(test6);
    it(test6.testName, async () => {
        assert(spy.calledWith("p5::Maria"));
        assert(spy.calledWith("p5::Jan"));
        assert(spy.calledWith("p5::Piotr"));
        assert(spy.calledWith("p5::1"));
        assert(spy.calledWith("p5::2"));
        assert(spy.calledWith("p5::3"));
        assert(spy.calledWith("p5::4"));
        assert(spy.calledWith("p5::5"));
        assert(spy.calledWith("p5::6"));
        test6.points=2;
    });

});

