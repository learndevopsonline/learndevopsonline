---
sidebar_position: 13
---

# Steps to Increase disk of LVM in RHEL 9.

1. Stop the EC2 in case if you created the machine.
2. Or create a EC2 machine with higher size of lets say 30GB (Default as 20GB)
3. Run the following commands.

Increase Partition

```shell 
growpart /dev/nvme0n1 4
```

Extend the volume of home to 5G from 1G 

```shell 
lvextend -r -L +5G /dev/mapper/RootVG-homeVol
```


