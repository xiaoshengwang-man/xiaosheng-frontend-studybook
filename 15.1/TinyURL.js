const randomBaseStr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getRandomStr(num = 6) {
  let str = ''
  for(let i = 0; i < num; i++) {
    str += randomBaseStr[parseInt(Math.random() * randomBaseStr.length)];
  }
  return str;
}
const shortUrlMap = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
let result = getRandomStr();
  if(shortUrlMap.has(result)) {
    result = getRandomStr();
  }
  shortUrlMap.set(result, longUrl);
    return `http://tinyurl.com/${result}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
const short = shortUrl.slice(-6);
  return shortUrlMap.get(short);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */