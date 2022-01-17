var pathSum = function(root, sum) {
	if (!root) return 0;
	return helper(root, sum) + pathSum(root.right, sum) + pathSum(root.left, sum);

	//以root 为根节点的时候，和为sum 的路径条数
	function helper(root, sum) {
		if (!root) return 0;
		if (root.val === sum) return 1 + helper(root.left, sum-root.val) + helper(root.right, sum-root.val);
		return helper(root.left, sum-root.val) + helper(root.right, sum-root.val);
	}

};