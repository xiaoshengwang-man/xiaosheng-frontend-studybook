function quick_sort_v1(arr, l, r) {
  if (l >= r) return;
  let x = l;
  let y = r;
  let base = arr[l];
  while (x < y) {
    while (x < y && base <= arr[y]) y--;
    if (x < y) arr[x++] = arr[y]
    while (x < y && base > arr[x]) x++;
    if (x < y) arr[y--] = arr[x]
  }
  arr[x] = base;
  quick_sort_v1(arr, l, x - 1)
  quick_sort_v1(arr, y + 1, r)
  return
}

let arr = [3, 1, 4, 5, 9, 10];
quick_sort_v1(arr, 0, 5);
console.log(arr);