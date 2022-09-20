var States;
(function (States) {
    States["s0"] = "s0";
    States["nxtLit"] = "nxtlit";
    States["stop"] = "stop";
    States["error"] = "error";
})(States || (States = {}));
;
var Model = /** @class */ (function () {
    function Model() {
        var _this = this;
        this.state = States.s0;
        this.temp = [];
        this.firstLit = function (str) {
            if ((str >= 'a' && str < 'z') || (str >= 'A' && str < 'Z')) {
                _this.state = States.nxtLit;
                _this.temp.push(str);
            }
            else {
                _this.state = States.error;
            }
        };
        this.nxtLit = function (str) {
            if (str == ' ') {
                _this.state = States.s0;
                console.log(_this.temp.join(''));
                _this.temp = [];
            }
            else if ((str >= 'a' && str < 'z') || (str >= 'A' && str < 'Z') || (str >= '1' && str < '9')) {
                _this.state = States.nxtLit;
                _this.temp.push(str);
            }
            else {
                _this.state = States.error;
            }
        };
        this.error = function () {
            console.log(_this.state);
        };
        this.getCurrent = function (str) {
            if (!str) {
                _this.state = States.stop;
                console.log(_this.state);
            }
            else {
                for (var i = 0; i <= str.length; i++) {
                    switch (_this.state) {
                        case States.s0:
                            _this.firstLit(str[i]);
                            continue;
                        case States.nxtLit:
                            _this.nxtLit(str[i]);
                            continue;
                        case States.error:
                            _this.error();
                            return;
                    }
                }
                console.log(_this.temp.join(''));
                console.log(States.stop);
            }
        };
    }
    return Model;
}());
var testString = 'Lorem ipsum dolor sit amet co!sectetur adipisicing elit';
var lexer = new Model;
lexer.getCurrent(testString);
