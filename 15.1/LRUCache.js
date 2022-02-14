var LRUCache = function (capacity) {
  // JS的哈希表结构本身具备LRU性质，即当delete(key)再set(key,val)
  // 则哈希表中key对应的位置被挪到尾部
  this.max = capacity
  this.cache = new Map()
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  const cache = this.cache
  if (cache.has(key)) {
      const value = cache.get(key)
      cache.delete(key)
      cache.set(key, value)
      return value
  } else {
      return -1
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  const cache = this.cache
  if (cache.has(key)) cache.delete(key)
  if (cache.size === this.max) cache.delete(cache.keys().next().value)
  cache.set(key, value)
};