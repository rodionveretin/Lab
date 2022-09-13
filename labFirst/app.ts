enum States {
  s0 = 's0',
  nxtLit = 'nxtlit',
  stop = 'stop',
  error = 'error',
};

class Model {
  private state: string = States.s0;
  private temp: string[] = [];
  getCurrent = (str: string) => {
    if (!str) {
      this.state = States.stop;
      return this.state;
    } else {
      for (let i = 0; i <= str.length; i++) {
        if (this.state == States.s0) {
          if (str[i] == ' ') {
            continue;
          } else if ((str[i] >= 'a' && str[i] < 'z') || (str[i] >= 'A' && str[i] < 'Z')) {
            this.state = States.nxtLit;
            this.temp.push(str[i]);
            continue;
          } else {
            this.state = States.error; 
            continue;
          }
        } else if (this.state == States.nxtLit) {
          if (str[i] == ' ') {
            this.state = States.s0;
            console.log(this.temp.join(''));
            this.temp = [];
            continue;
          } else if ((str[i] >= 'a' && str[i] < 'z') || (str[i] >= 'A' && str[i] < 'Z') || (str[i] >= '1' && str[i] < '9')) {
            this.state = States.nxtLit;
            this.temp.push(str[i]);
            continue;
          } else {
            this.state = States.error;
            continue;
          }      
        } else if (this.state == States.error) {
          if (str[i] == ' ') {
            console.log(this.state);
            this.state = States.s0;
            this.temp = [];
            continue;
          } else {
            continue;
          }
        }
      }
    }
    return States.stop;
  } 
}

let testString = 'Lorem ips{um dolor sit amet';

let lexer = new Model;

console.log(lexer.getCurrent(testString));