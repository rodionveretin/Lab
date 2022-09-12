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
        this.getCurrent = function (str) {
            if (!str) {
                _this.state = States.stop;
                return _this.state;
            }
            else {
                for (var i = 0; i <= str.length; i++) {
                    if (_this.state == States.s0) {
                        if (str[i] == ' ') {
                            continue;
                        }
                        else if ((str[i] >= 'a' && str[i] < 'z') || (str[i] >= 'A' && str[i] < 'Z')) {
                            _this.state = States.nxtLit;
                            _this.temp.push(str[i]);
                            continue;
                        }
                        else {
                            _this.state = States.error;
                            continue;
                        }
                    }
                    else if (_this.state == States.nxtLit) {
                        if (str[i] == ' ') {
                            _this.state = States.s0;
                            console.log(_this.temp.join(''));
                            _this.temp = [];
                            continue;
                        }
                        else if ((str[i] >= 'a' && str[i] < 'z') || (str[i] >= 'A' && str[i] < 'Z') || (str[i] >= '1' && str[i] < '9')) {
                            _this.state = States.nxtLit;
                            _this.temp.push(str[i]);
                            continue;
                        }
                        else {
                            _this.state = States.error;
                            continue;
                        }
                    }
                    else if (_this.state == States.error) {
                        console.log(_this.state);
                        _this.temp = [];
                        continue;
                    }
                }
            }
            return _this.state;
        };
    }
    return Model;
}());
var testString = 'Lorem ipsum dolor sit amet';
var lexer = new Model;
lexer.getCurrent(testString);
