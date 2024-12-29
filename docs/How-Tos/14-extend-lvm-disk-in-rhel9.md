---
sidebar_position: 14
---

# Steps to Increase disk of LVM in RHEL 9.

Scenario 1: Instance is created already 

1. Stop the instance ( Optional but suggested )
2. Go to storage of the instance and modify the volume to desired size.
3. Start the instance
4. Run the following command.


Increase Partition

```shell 
growpart /dev/nvme0n1 4
```

Extend the volume of home to 5G from 1G

```shell 
lvextend -r -L +5G /dev/mapper/RootVG-homeVol
```




