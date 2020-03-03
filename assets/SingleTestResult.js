
class SingleTestResult {
    constructor(testName, errorMessage, maxPoints) {
        this.testName = testName;
        this.errorMessage = errorMessage;
        this.maxPoints = maxPoints;
        this.points = 0;
        this.originError = null;
    }
}

module.exports = SingleTestResult;