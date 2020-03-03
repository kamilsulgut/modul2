const path = require("path");

class Helper{
    /**
     * creates test name based on task directory name
     * @param testCurrentDirectory = always give __dirname
     */
    static createTestName (courseType, moduleNumber, testCurrentDirectory){
        let parent = path.resolve(testCurrentDirectory+"../../");
        let parentDirectory = parent.substr(parent.lastIndexOf("/")+1,parent.length);
        if(parentDirectory === "solution"){
            parent = path.resolve(testCurrentDirectory+"../../../");
            parentDirectory = parent.substr(parent.lastIndexOf("/")+1,parent.length);
        }
        return courseType+".module"+moduleNumber+"."+parentDirectory;
    }
}

module.exports = Helper;