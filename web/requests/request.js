const rq = require('request-promise');
const cheerio = require('cheerio');


async function get() {
  const content = await rq('https://stackoverflow.com/questions/2496710/writing-files-in-node-js');
  console.log('Mark1');
  // console.log(content);
  return content;
}


async function print(){

  const body = await get();
  const $ = cheerio.load(body);
  console.log($('div.accepted-answer').html());
  // console.log(body);
}


print();

// console.log(Promise.resolve(content));