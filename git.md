git log 查看提交日志
切换分支

//工作区到暂存区
1.git add xxx //把xxx文件从工作区添加到暂存区
2.git add . //把工作区的所有文件添加到暂存区

//暂存区到本地仓库
1.git commit //进入新的编辑器进行编辑，推出编辑，先按Esc，再按两下大写的ZZ,vim退出就好了
2.git commit -m "xxx"  //提交更改并添加备注
3.git commit --amend //修改最近一次的提交信息，会修改commit的hash值

//从远程仓库到工作区
1.git pull <远程主机名> <远程分支名>：<本地分支名>

//本地仓库到远程仓库
git push <远程主机名> <本地分支名>：<远程分支名>

//从远程仓库到本地仓库
git fetch <远程主机名> <分支名> 获取远程仓库特定分支的更新
git fetch --all 获取远程仓库所有分支的更新

//分支
git branch xxx //新建分支，但不切换
git branch //查看本地分支
git branch -r //查看远程分支
git branch -a //查看本地和远程分支
git branch -D xxx //删除本地分支


//git解决问题场景
git rebase master//让提交记录清晰可读，把一个master分支的修改提交到当前分支上
git cherry-pick 提交的hash值 //选择某个分支的提交，合并到当前分支
git revert 提交的hash值 //回滚某次提交，同时不影响其他提交
git stash //把本地的改动暂存起来
git stash save "xxx" //执行存储时，添加备注
git stash pop //应用最近一次的修改，并删除暂存的记录
git stash app xxx //应用某个存储， 默认第一个
git stash list //查看存储
git stash clear //删除所有存储
git checkout --<文件名> //撤回工作区的修改
git reset <文件名> //对特定文件进行销毁

//远程主机
git remote //查看远程主机
git remote add <主机名> <网址> //添加远程主机
git remote rm <主机名>

git checkout main //到主分支
将子分支合并到主分支
git merge dandan //将子分支dandan合并到主分支 main

git stash 切换分支并保存当前分支为commit的代码


git reset --soft ^head 回退最近的一次提交的commit

将已经提交的 commit，复制出新的 commit 应用到分支里

git cherry-pick ^head     将已经提交的 commit，复制出新的 commit 应用到分支里(从一个分支里复制commit， 切换分支，执行该命令)

git revert ^head 将现有的提交还原，恢复提交的内容，并生成一条还原记录。

