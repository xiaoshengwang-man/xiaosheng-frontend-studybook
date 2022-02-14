var relativeSortArray = function(arr1, arr2, r = [], h = Object.create(null)) {
  arr1.forEach(v => h[v] = (h[v] || 0) + 1)
  arr2.forEach(v => (r = r.concat(Array(h[v]).fill(v)), delete h[v]))
  return Object.keys(h).forEach(v => r = r.concat(Array(h[v]).fill(v))), r
};