const crypto = require('crypto')




export const dictToArray = (dict: object): Array<any> =>
  Object.keys(dict).map(name => dict[name])

export const print = {
  log: (text: string) => console.log('\x1b[37m%s \x1b[2m%s\x1b[0m', '>', text),
  danger: (text: string) => console.log('\x1b[31m%s \x1b[31m%s\x1b[0m', '>', text),
  tip: (text: string) => console.log('\x1b[36m%s \x1b[36m%s\x1b[0m', '>', text),
}





export const sha1 = (str) => {
  let shasum = crypto.createHash("sha1");
  return shasum.update(str, 'utf-8').digest("hex")
}


