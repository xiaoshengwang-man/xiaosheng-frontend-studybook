var canFinish = function(numCourses, prerequisites) {
    let indeg = new Array(numCourses).fill(0) // 每门课程的入度
    let g = new Array(numCourses).fill().map(()=> [])  // 每门课程的前置课程
    for( const [cur, pre] of prerequisites){
        indeg[cur]++ ;
        g[cur].push(pre)
    }
    /* 统计完毕 先把入度为0 的课程学了 然后看看可以学哪些课程， */
    let q =[] 
    for( let i = 0; i< numCourses; i++){
        if(!indeg[i]){ q.push( i)}
    }
    let ans = 0 // 已学课程
    while( q.length){
        /*同样是入度为0 的节点，顺序就不是很重要 */
        let cur = q.pop()
        ans++ ;
        for( let i = 0; i< numCourses; i++){
            if(g[i].includes(cur)){ 
                indeg[i]--;
                if( indeg[i] === 0){ q.push(i)}
                }
        } 

    }
}