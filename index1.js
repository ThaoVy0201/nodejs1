const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>hello</h1>');
});

app.get('/chao/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.send(`<h1>hello ${name} ${age} </h1>`);
});

app.get('/tinh/:tenPhepTinh/:soA/:soB', (req, res) => {
  const {tenPhepTinh, soA, soB} = req.params;
  const pt = new phepTinh(tenPhepTinh, soA, soB);
  res.send(pt.getResultString());
});
class phepTinh{
  constructor(tenPhepTinh, soA, soB){
    this.tenPhepTinh = tenPhepTinh;
    this.soA = soA;
    this.soB = soB;
  }
  getSign(){
    if(this.tenPhepTinh === "CONG") return '+' ;
    if(this.tenPhepTinh === "TRU") return '-' ;
    if(this.tenPhepTinh === "NHAN") return '*' ;
    return '/';
  }
  getResultString(){
    const { soA, soB } = this;
    const sign = this.getSign();
    const veTrai = ` ${soA} ${sign} ${soB}`;
    const result = eval(veTrai);
    return `${veTrai} = ${result}`
  }
};
// const pt = new phepTinh('NHAN', 4, 5);
// console.log(pt.getResultString());

app.listen(4000, () => console.log('Server started.'));