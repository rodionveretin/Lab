enum States {
  s0 = 's0',
  nxtLit = 'nxtlit',
  stop = 'stop',
  error = 'error',
};

class Model {
  state: string = States.s0;
  temp: string[] = [];

  firstLit = (str: string) => {
    if ((str >= 'a' && str < 'z') || (str >= 'A' && str < 'Z')) {
      this.state = States.nxtLit;
      this.temp.push(str);
    } else {
      this.state = States.error;
    }
  }

  nxtLit = (str: string) => {
    if (str == ' ') {
      this.state = States.s0;
      console.log(this.temp.join(''));
      this.temp = [];
    } else if ((str >= 'a' && str < 'z') || (str >= 'A' && str < 'Z') || (str >= '1' && str < '9')) {
      this.state = States.nxtLit;
      this.temp.push(str);
    } else {
      this.state = States.error;
    }
  }

  error = () => {
    console.log(this.state);
  }

  getCurrent = (str: string) => {
    if (!str) {
      this.state = States.stop;
      console.log(this.state);
    } else {
      for (let i = 0; i <= str.length; i++) {
        switch (this.state) {
          case States.s0:
            this.firstLit(str[i]);
            continue;
          case States.nxtLit:
            this.nxtLit(str[i]);
            continue;
          case States.error:
            this.error();
            return;
        }
      }
      console.log(this.temp.join(''));
      console.log(States.stop);
    }
  }
}


let testString = 'Lorem ipsum dolor sit amet co!sectetur adipisicing elit';

let lexer = new Model;

lexer.getCurrent(testString);
