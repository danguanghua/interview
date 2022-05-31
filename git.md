git log 查看提交日志
切换分支
git checkout main //到主分支
将子分支合并到主分支
git merge dandan //将子分支dandan合并到主分支 main

git stash 切换分支并保存当前分支为commit的代码


git reset --soft ^head 回退最近的一次提交的commit

将已经提交的 commit，复制出新的 commit 应用到分支里

git cherry-pick ^head     将已经提交的 commit，复制出新的 commit 应用到分支里(从一个分支里复制commit， 切换分支，执行该命令)

git revert ^head 将现有的提交还原，恢复提交的内容，并生成一条还原记录。

react.memo 避免不必要的渲染

useMemo 只有在一些参数变数时，才重新渲染特定组件