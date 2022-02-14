var findMedianSortedArrays = function(nums1, nums2) {
    // 合并数组
    const arr =[...nums1,...nums2]
    // 如果数组只有一位 直接返回该数字
    if(arr.length<=1)return arr[0]
    // 把数组按照正序排序
    arr.sort(function(a,b){return a - b})
    // 数组长度
    const len = arr.length
    // 判断数组长度奇还是偶
    // 奇数返回
    if(len%2!==0) return arr[(len-1)/2]
    // 偶数处理 截取中间的俩个数字
    const oArr = arr.slice(len/2-1,len/2+1)
    return (oArr[0]+oArr[1])/2
  };