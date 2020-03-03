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

let app = rewire("../task3.js");
let addArrays = app.__get__('addArrays');

/**
 * DATA
 */

let test1Arr1 = [4,0,1,3,4];
let test1Arr2 = [1,9,6,7,8,17];
let test1Res = [5,9,7,10,12,17];

let test2Arr1 = [8,3,22];
let test2Arr2 = [1,3,2];
let test2Res = [9,6,24];


let test3Arr1 = [2,3,1,5,3,5];
let test3Arr2 = [3,1,76,1];
let test3Res = [5,4,77,6,3,5];



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
        "Suma elementów tablic ["+test1Arr1+"] i ["+test1Arr2+"]" ,
        "",
        1
    );
    subTests.push(test1);
    it( test1.testName, async () => {
        let result = addArrays(test1Arr1,test1Arr2);
        assert.deepEqual(test1Res, result);
        test1.points = 1;
    })

    let test2 = new SingleTestResult(
        "Suma elementów tablic ["+test2Arr1+"] i ["+test2Arr2+"]" ,
        "",
        1
    );
    subTests.push(test2);
    it( test2.testName, async () => {
        let result = addArrays(test2Arr1,test2Arr2);
        assert.deepEqual(test2Res, result);
        test2.points = 1;
    });

    let test3 = new SingleTestResult(
        "Suma elementów tablic ["+test3Arr1+"] i ["+test3Arr2 +"]",
        "",
        1
    );
    subTests.push(test3);
    it( test3.testName, async () => {
        let result = addArrays(test3Arr1,test3Arr2);
        assert.deepEqual(test3Res, result);
        test3.points = 1;
    });


});

