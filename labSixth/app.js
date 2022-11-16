class HashTable {
  constructor() {
    this.table = new Array(30);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.table.length;
  }

  set(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [key, 1];
    } else {
      this.table[index][0] += ', ' + key;
      this.table[index][1] += 1;
    }
  }

  dataToArray() {
    let data = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        data.push(this.table[i][1]);
      } else {
        data.push(0);
      }
    }
    return data;
  }

  log() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`${i}: ${this.table[i][0]}  ${this.table[i][1]}`);
      } else {
        console.log(`${i}: 0`);
      }
    }
  }

  chart() {
    let data = this.dataToArray();
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i <= data.length; i++) {
      ctx.fillRect(i * 14.6, 100 - data[i], 4, data[i]);
      ctx.restore();
      ctx.font = "10px sans-serif";
      ctx.fillText(i, i * 14, 50);
    }
  }


  reset() {
    this.table = new Array(30);
  }
}

const ht = new HashTable();
const getText = document.querySelector('.get-text');

getText.addEventListener('click', () => {
  ht.reset();
  const input = document.querySelector('.input');
  const array = input.value.replace(/\s+/g, ' ').split(' ').filter((e) => e.length > 0);
  for (let word = 0; word < array.length; word++) {
    ht.set(array[word]);
  }
  ht.chart();
  ht.log();
})

