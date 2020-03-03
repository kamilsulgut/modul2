const esprima = require('esprima');
const fs = require("fs");

class EsprimaHelper{

    static traverse (filePath, func, node) {
        if (!node){
            var code = fs.readFileSync(filePath, "utf-8");
            node = esprima.parseScript(code);
        }
        for (var key in node) { //2
            if (node.hasOwnProperty(key)) { //3
                var child = node[key];
                if (typeof child === 'object' && child !== null) { //4
                    if (Array.isArray(child)) {
                        child.forEach(function(node) { //5
                            func(node);
                            EsprimaHelper.traverse(filePath, func, node);
                        });
                    } else {
                        func(node);
                        EsprimaHelper.traverse(filePath, func, child); //6
                    }
                }
            }
        }
    }

}

module.exports = EsprimaHelper;