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
        "Poprawnie zmodyfikowana definicja metody getNumber",
        "Metoda ma być zapisana za pomocą funkcji strzałkowej",
        1
    );
    subTests.push(test1);

    it(test1.testName, async () => {
        isArrowFunction(test1, "getNumber")
    })

    let test2 = new SingleTestResult(
        "Poprawnie zmodyfikowana definicja metody sumTwo",
        "Metoda ma być zapisana za pomocą funkcji strzałkowej",
        1
    );
    subTests.push(test2);

    it(test2.testName, async () => {
        isArrowFunction(test2, "sumTwo")
    })

    let test3 = new SingleTestResult(
        "Poprawnie zmodyfikowana definicja metody printArray",
        "Metoda ma być zapisana za pomocą funkcji strzałkowej",
        1
    );
    subTests.push(test3);

    it(test3.testName, async () => {
        isArrowFunction(test3, "printArray")
    })

});





function isArrowFunction(simpleTestObj, methodName){
    let isArrowFunction = false;
    try {
        EsprimaHelper.traverse(
            __dirname + "/../task1.js",
            (node) => {
                if (node.id && node.id.name && node.id.name === methodName && node.init.type === "ArrowFunctionExpression") {
                    isArrowFunction = true;
                }
            }
        );

        if(isArrowFunction) {
            simpleTestObj.points = 1;
        }else {
            throw new SimpleError();
        }


    } catch (e) {
        throw new SimpleError(simpleTestObj.errorMessage);
    }
}