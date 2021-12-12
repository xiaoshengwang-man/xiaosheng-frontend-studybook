var is_Match = function (A, B) {
  // 走到B为空说明B至少是A的一部分
  if (B == null) return true;
  // B不为空A为空false
  if (A == null) return false;
  if (A.val != B.val) return false;
  return is_Match(A.left, B.left) && is_Match(A.right, B.right);
};
var isSubStructure = function (A, B) {
  if (B == null) return false;
  if (A == null) return false;
  if (A.val == B.val && is_Match(A, B)) return true;
  return isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
