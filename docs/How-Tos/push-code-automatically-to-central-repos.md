---
sidebar_position: 5
---

# How to Push Code Automatic to all repos

Though it is unethical practice, yet we want to push the code to save some time, We can take this approach.

In this video I have explained how to push the code to multiple repositories at a time.

<iframe width="708" height="531" src="https://www.youtube.com/embed/OhRMNpY0Q88" title="How to push code automatically" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this video we have written a shell script, The content of the script is given below.

```shell
#!/bin/bash

for dir in `find . -type d -name .git | sed -e 's|/.git||'`; do
	 echo "-------- $dir --------"
	 cd $dir
	 git pull
	 git add -A
	 git commit -m "updating $dir"
	 git push
   git push --tags
	 cd -

done
```

# Additional Video Links

### How to connect to an EC2 server from Windows Desktop Using Putty.

<iframe width="708" height="398" src="https://www.youtube.com/embed/qc4TaYMKf0c" title="Connect to EC2 Instance Using Putty" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Best Options that Makes Putty more Productive.

<iframe width="708" height="531" src="https://www.youtube.com/embed/PGpKq6lWyB4" title="Advanced Putty Configuration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


