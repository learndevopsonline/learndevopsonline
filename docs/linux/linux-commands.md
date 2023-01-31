---
sidebar_position: 1
---

# Linux Commands 

1. List Files & Directories 

```shell 
ls 
ls -l 
ls -A 
ls -A -l 
```

2. Create Files 


```shell 
touch file.txt 
```

3. Copy Files 

```shell 
cp file.txt new-file.txt 
```

4. Rename Files 

```shell 
mv file.txt FILE.txt 
```

5. Create Directories

```shell 
mkdir demo 
```

6. Copy Directory 

```shell 
cp -r dir1 dir2 
```

7. Move files from one directory to another

```shell 
mv file dir 
```

8. Remove Directory 

```shell 
rm -rf demo 
```

9. List Content 

```shell 
cat file  
```

10. View top and end lines 

```shell 
head file 
head -n 3 file 
tail file 
tail -n 3 file 
```

11. Search for a word and print the lines 

```shell 
grep word file-name 
```

12. Filter with colum 

```shell 
awk -F , '{print $1}' file.csv 
```

13. Editor (vim)

14. Find the files 

```shell 
find / -name "passwd"
```

15. Browse and Download 

```shell 
curl -L google.com 
curl -o file.zip http://domain.com/file.zip 
curl -O http://domain.com/file.zip 
```

16. Extract files 

```shell 
tar -xf sample.tar.gz 
unzip file.zip 
```

17. Check process running 

```shell 
ps -ef 
ps -ef | grep nginx 
```

18. User Management 

```shell 
useradd demo 
```

19. Package Management 

```shell 
yum install nginx -y 
yum list all | grep nginx 
```

20. Service Management 

```shell 
systemctl start nginx 
systemctl enable nginx 
systemclt restart nginx 
```

21. Permissiong Management 

```shell 
chmod u+x file.txt 
chown demo:demo file.txt 
chown demo:demo dir1 -R 
```

