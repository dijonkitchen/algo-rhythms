/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.cache = []
  this.dictionary = {}
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const index = this.cache.indexOf(key)
  if (index !== -1) {
    this.cache.splice(index, 1)
    this.cache.push(key)
    return this.dictionary[key]
  } else {
    return -1
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const index = this.cache.indexOf(key)
  if (index !== -1) {
    this.cache.splice(index, 1)
  } else if (this.cache.length === this.capacity) {
    delete this.dictionary[this.cache.shift()]
  }
  this.cache.push(key)
  this.dictionary[key] = value
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
