const origin = require('remote-origin-url');

class TestResult{
    constructor(taskUniqueSymbol){
        this.task = taskUniqueSymbol;
        this.maxPoints = 0;
        this.points = 0;
        this.date = Date.now();
        this.tests = []; //array of SubTestResult Objects
    }

    addTest(subTestObj){
        this.tests.push(subTestObj);
        this.maxPoints += subTestObj.maxPoints;
        this.points += subTestObj.points;
    }


    send(){
        (async()=> {
            // this.gitRemote = await origin();
            // if(this.gitRemote.indexOf("git@github.com")!=-1){
            //     this.login = this.gitRemote.replace("git@github.com:","").split("/")[0];
            // }else if(this.gitRemote.indexOf("https://github.com")!=-1){
            //     this.login = this.gitRemote.replace("https://github.com/","").split("/")[0];
            // }

            this.printResults();

            if(this.login){

                //todo::send data
                // console.log(JSON.stringify(this));

            }else{
                // console.log("Nie podpięte zdalne repozytorium.");
            }

        })();
    }

    printResults(){
        console.log("==================");
        console.log("Uzyskane punkty:");
        console.log(`${this.points} / ${this.maxPoints}`);
        console.log("==================");
    }
}

module.exports = TestResult;
