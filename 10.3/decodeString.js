var decodeString = function(s) {
  // 从右往左遍历字符串
  for (let i = s.length - 1, j; i >= 0; i--) {
      // 遇到数字，通过i，j判断数字是几
      if (!isNaN(Number(s[i]))) {
          for (j = i; j >= 0; j--) {
              // 确认数字是几
              if (isNaN(Number(s[j - 1]))){
                  let num = Number(s.substring(j, i + 1))
                  let l = i + 1, r = i + 3
                  // 开始找右括号
                  while (r < s.length) {
                      if (s[r] === ']') {
                          // 解码当前括号的字符，并拼到字符串s上
                          let str = s.substring(l + 1, r).repeat(num)
                          s = s.substring(0, j) + str + s.substring(r + 1)
                          break
                      } else {
                          r++
                      }
                  }
                  break
              }
          }
          i = j
      }
  }
}