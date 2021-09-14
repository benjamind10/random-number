import DATA from './data.js';

let result = [];
let data = DATA;

function getNextUniqueRecordsByNumber(no) {
  const numbers = new Set();
  result = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (!numbers.has(item.Numbers)) {
      result.push(item);
      numbers.add(item.Numbers);
    }
    if (result.length == no) {
      data = data.slice(i + 1);
      break;
    }
  }
  return result;
}
console.log('before', data);
console.log('res : ', getNextUniqueRecordsByNumber(80));
console.log('afer', data);
console.log('================');
console.log('res : ', getNextUniqueRecordsByNumber(80));
console.log('afer', data);
console.log('================');
console.log('res : ', getNextUniqueRecordsByNumber(80));
console.log('afer', data);
console.log('================');
console.log('res : ', getNextUniqueRecordsByNumber(80));
console.log('afer', data);
