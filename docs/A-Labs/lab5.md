---
id: lab5
title: Lab 5
sidebar_position: 5
description: Lab 5
---

# Lab 5: Monitoring and Managing Hard Disk Space, Using LVM, and Scripting

## Lab Preparation

### Purpose and Objectives of Lab 5

The purpose of this lab is to demonstrate how a Linux system administrator can monitor hard disk space availability, and to manage file system size via the Logical Volume Manager (LVM) application. This lab will also demonstrate how to manually mount (i.e. connect) and unmount (disconnect) partitions to file system directories, and demonstrate how to have partitions automatically mounted to directories upon Linux system startup.

![Software](/img/Software.png)

Monitoring Disk Space can fix problems **before** they become a crisis (like running low on hard disk space). We will use LVM to easily resize Linux file-systems.

![Crontab](/img/Crontab.png)

Linux system administrators need to schedule Linux shell scripts and commands (via **crontab**) to automatically run in order to be more productive.

**Main Objectives**

  - Monitoring Disk Space with utilities such as **ssm list**, **df -h**, and **du -ah**.
  - Use the **crontab** utility to automatically schedule the execution of a shell script to "flag" low disk space.
  - Use **LVM** to **resize partitions via command-line utilities**.
  - Create, partition and format **virtual hard disks** to increase the size of file systems.
  - Manually connect and disconnect directories (mount points) to existing partitions (**mount**, **umount**).
  - Edit the **/etc/fstab** file to automatically mount partitions upon Linux server boot-up, and test the configuration prior to Linux server boot-up.

### Minimum Required Materials

  - **Solid State Drive**
  - **USB key** (for backups)
  - **Lab5 Log Book**

### Linux Command Reference

**LVM Information**

| [vgs](http://man7.org/linux/man-pages/man8/vgs.8.html) | [pvs](http://man7.org/linux/man-pages/man8/pvs.8.html) | [lvs](http://man7.org/linux/man-pages/man8/lvs.8.html) | [vgdisplay](http://man7.org/linux/man-pages/man8/vgdisplay.8.html) | [pvdisplay](http://man7.org/linux/man-pages/man8/pvdisplay.8.html) | [lvdisplay](http://man7.org/linux/man-pages/man8/lvdisplay.8.html) | [ssm](http://manpages.ubuntu.com/manpages/trusty/man8/ssm.8.html) |
| --- | --- | --- | --- | --- | --- | --- |

**LVM Management**

| [lvextend](http://man7.org/linux/man-pages/man8/lvextend.8.html) | [lvcreate](http://man7.org/linux/man-pages/man8/lvcreate.8.html) | [lvreduce](http://man7.org/linux/man-pages/man8/lvreduce.8.html) | [pvcreate](http://man7.org/linux/man-pages/man8/pvcreate.8.html) | [vgextend](http://man7.org/linux/man-pages/man8/vgextend.8.html) |
| --- | --- | --- | --- | --- |

**Miscellaneous**

| [mount](http://man7.org/linux/man-pages/man8/mount.8.html) | [umount](http://man7.org/linux/man-pages/man8/umount.8.html) | [df](http://man7.org/linux/man-pages/man1/df.1.html) | [du](http://man7.org/linux/man-pages/man1/du.1.html) | [awk](http://man7.org/linux/man-pages/man1/awk.1p.html) | [fdisk](http://tldp.org/HOWTO/Partition/fdisk_partitioning.html) | [mkfs](http://www.cyberciti.biz/faq/howto-format-create-linux-filesystem/) | [/etc/fstab](http://man7.org/linux/man-pages/man5/fstab.5.html) | [Using crontab](http://code.tutsplus.com/tutorials/scheduling-tasks-with-cron-jobs--net-8800) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Investigation 1: Monitoring Hard Disk Space

### Part 1: Hard Disk Space Utilities

Another essential duty of a Linux system administrator is to anticipate problems and take preventative measures to avoid computer system problems before they occur. An example would be to periodically monitor hard disk space in order to make adjustments before it impacts on system performance.

Therefore, we are going to learn in this section how to monitor disk space activity to help take corrective action.

![Disk Usage](/img/Disk_usage.png)

The **df** and **du** commands are useful tools for Linux system administrators to flag disk space issues and investigate their causes.

**Perform the following steps:**

  1. Launch your **c7host** and **centos2** VMs.
  2. Switch to your **centos2** machine.
  3. Open a terminal, and login as **root**.
  4. Issue the command:

```bash
df -h
```

  5. Note the disk space usage for the **/** and **/home** partitions.
  6. If a partition is running out of available space, the Linux System Administrator can reallocate space among partitions or add another disk and grow the file system. The administrator can also investigate the cause of low disk space. Two examples immediately come to mind: excessive use of space from users, and potential penetration from hackers.
  7. To investigate excessive disk usage by regular users, you can obtain a total amount of disk usage for that user by issuing the command:

```bash
du -ha . | more
```

  8. If there is a recurring space usage problem with regular users, the Linux system administrator can impose quotas (caps on disk usage). This method is not taught in this course.
  9. The methods to monitor potential penetration to a Linux system are too numerous, and are taught in other courses (for example: SEC520). One method of monitoring potential penetration is use the find command:

```bash
find -P / -size +100000k
```

  10. The next section will apply some of these tools we have discussed into a shell script and crontab entry to periodically monitor and contact the system administrator of potential disk space issues (before they become a serious problem).

### Part 2: Using crontab to Automatically Alert System Administrator of Low Hard Disk Space

This section focuses on how to automatically run shell scripts without the Linux system administrator being there to issue that shell script. It would be highly unlikely to expect a system administrator to stay up late (eg. 2 a.m.) to manually run a shell script to terminate processes or to re-boot Linux servers. Database files (tables) are used to provide instructions on how frequent shell scripts or commands can be run.

The **cron** daemon is used to refer to these shell scripts (or other commands or programs) and to run them on a pre-determined basis. The term **cron** comes from the old word **chronograph** meaning a special type of watch (actually a _stop-watch_) to help monitor and schedule routine tasks.

**Please review these [Bash Shell Scripting Tips](/C-ExtraResources/bash-shell-scripting-tips.md) before proceeding with the following steps**

**Perform the following steps:**

  1. Perform this section in your **c7host** machine
  2. Make certain you are logged in as **root**.
  3. Change to your **/root/bin** directory.
  4. Download the following shell script by issuing the following command:

```bash
wget https://ict.senecacollege.ca/~ops235/labs/monitor-disk-space.bash
```

  5. Try to understand what this script does (refer to man pages for the **awk** command), and then run the script with elevated permissions.
  6. Give execute permissions and run this shell script. This script is supposed to notify the root user by email if there are any potential partition size issues.
  7. Issue the follow command: 

```bash
mail
```

   - If you get an error, install email by issuing the command:

```bash
yum install mailx
```

   - Check to see if there are any mail messages. If there are mail messages, they do not relate to this script execution. Remove all mail messages by typing d immediately followed by a mail message number range (eg. to remove all messages. For example, if there are 5 messages, type **d1-5** and then press **ENTER** and enter **q** to exit the mail application).

  8. Edit the **monitor-disk-space.py** script, and set the `ALERT=90` value to `ALERT=10`. Then save your editing session, and re-run this script.
  9. Run the **mail** command. Do you have a mail message? Enter the mail message number to view the message. If there is a message, what is the purpose of this message?
  10. Exit from the mail command.

In order to automatically run the above-mentioned script periodically, you use the scheduler in Linux called **crontab**. The term crontab stands for **Chronograph Tables**, where a chronograph is the old term for a timepiece (the forerunner of the modern stop-watch). You can run the crontab command to schedule commands and shell script to be run in a number of different ways.

  11. Quickly view the tutorial about the [Using crontab](http://code.tutsplus.com/tutorials/scheduling-tasks-with-cron-jobs--net-8800) file to understand the purpose of this file and how to basically set up a schedule to run a shell script.
  12. Issue the following command to setup a crontab entry for root:

```bash
crontab -e
```

  13. Enter the following line in order to run at 6:00 on the first day of every month:

```bash
0 6 1 * * /root/bin/monitor-disk-space.bash #Runs first day of each month (6:00 am)
```

  14. **Save** the crontab entry.
  15. Confirm that the entry was properly saved by issuing the following command:

```bash
crontab -l
```

**Answer INVESTIGATION 1 observations / questions in your lab log book.**

## Investigation 2: Managing Hard Disk Space Using LVM

An application called **LVM** is a very useful tool for Linux system administrators to easily manage file systems, in some cases, even when the computer system is running!

**LVM (Logical Volume Management)** is used to manage hard disk drives / partitions for Linux and Unix systems. LVM provides more flexibility than just partitioning hard disks. **Volume Groups** are areas used to define **Physical Volumes** (i.e. hard disks, disk partitions, or other forms of storage devices). **Logical Volumes** are then used to relate directories (mount points) to a specific physical volume or for a "range" or "span" of physical volumes.

LVM allows more flexibility and growth potential for Linux systems (for example, having Logical volumes span multiple hard disks). CentOS uses LVM by default upon installation. Other Linux distributions may provide the capacity to install LVM.

### Part 1: Managing File System Size with Existing Hard Drive

We will now use LVM in order to grow and reduce our file system, using extra unallocated space on our existing (default) virtual hard disk for our centos2 VM.

![Ssm](/img/Ssm.png)

Graphical programs like **system-config-lvm** are **deprecated**, and no longer come bundled with Centos. There are other graphical LVM programs, but are for the KDE desktop environment as opposed to Gnome. Command-line tools such as **ssm** (System Storage Manager), **fdisk**, **mkfs**, **pvcreate**, **lvextend**, and **lvreduce** are sufficient to resize file systems when using LVM.

**Perform the following steps:**

  1. Remain in your **centos2** VM for this section.
  2. Make certain that you are logged in as **root**.
  3. Issue the command: 

```bash
ls /dev/vd*
```

   - **NOTE**: If nothing displays, issue the command: **ls /dev/sd\*** and use that device pathname **/dev/sda** instead, and notify your instructor when about to run your lab5-check.bash shell script at the end of this lab.

  4. Issue the following command to install the **ssm** command:

```bash
yum install system-storage-manager
```

  5. Issue the command: 

```bash
ssm list
```

   - Take a few moments to note the volume group, physical volume and logical volume sections of the command output.
  
  6. Compare this output from the ssm command with these other lvm commands: 

```bash
lvs
```

```bash
pvs
```

```bash
vgs
```

   - Which method do you prefer to use?

  7. Check to see if there is any remaining space on your existing hard disk. Can you see any?
  8. You can create a partition by using the fdisk command. Issue the following command:

```bash
fdisk /dev/vda
```

   - (or fdisk /dev/sda if there is no /dev/vda).

  9. At the **fdisk** prompt, issue the command: `p`. What does this do?
  10. Now issue the commands `n` (new partition), `p` (primary partition), `3` (i.e. next available partition number). When prompted for initial block, press **enter** to accept the default beginning block, and type: `+3G` at ending block (create a 3GB partition) and press **enter**.
  11. At the fdisk prompt, issue the command `p` to review the partition information.
  12. Enter the command `w` to save partition table and exit (read the WARNING message).

**You MUST reboot your centos2 VM:** You MUST now reboot your centos2 VM before proceeding!

  13. You **must restart** your centos2 VM to allow changes to take effect.
  14. Verify that you created this partition by issuing the following command: 

```bash
fdisk -l /dev/vda
```

  15. Re-issue the **ssm** command. Do you see a new /dev/vda3 partition under Physical Volumes?
  16. To add the newly created partition, you need to add it into LVM to be used. Issue the following command to add the partition into LVM:

```bash
pvcreate /dev/vda3
```

   - (or _pvcreate /dev/sda3_ ) (enter **y** to proceed - ignore warning)

**Check your VG name:** Run **vgs** to determine your Volume Group name. If it is just **centos** or **cl**, replace **centos_centos2** with **centos** or **cl** for the rest of the following commands in this lab.

  17. Issue the following command to add your new-created and formatted partition called /dev/vda3 to your volume group:

```bash
vgextend centos_centos2 /dev/vda3
```

  18. Create a new logical volume by issuing the following command:

```bash
lvcreate -L 2G -n archive centos_centos2
```

  19. Format your newly-created partition by issuing the command: 

```bash
mkfs -t ext4 /dev/centos_centos2/archive
```

  20. Issue the **ssm list** command to view the new physical volume and logical volume information.

**Pay attention to syntax:** Note that the prefixed "+" or "-" in lvextend and lvreduce will add or subtract from the current size. Omitting these prefixes will **set** the LV size to what you specified.

  21. Reduce the file-size by issuing the command: 

```bash
lvreduce -r -L -0.5G centos_centos2/archive
```

  22. Issue the **ssm list** command to verify.
  23. Increase the file-size by issuing the command: 

```bash
lvextend -r -L +1G centos_centos2/archive
```

  24. Issue the **ssm list** command to verify.

### Part 2: Adding Additional Virtual Hard Drives

What if your have noted while monitoring disk space, that you starting to run-out of space on your **home** file-system, although you **do NOT have any available space on your current hard disk**? You could obtain an additional hard-drive. We can **add a new virtual hard-drive** (which will serve as a physical volume to the volume group), and extend the **home** logical volume to make use of the new available space. Creating virtual hard drives is not only inexpensive, but a great way for students to learn now to simulate growing the size of the file system!

![Add Virtual Disk](/img/Add_virtual_disk.png)

You can add virtual hard disks for a VM by changing to the Details section for the VM (as opposed to console), click Add Hardware, fill information in the Add New Virtual Hardware dialog box and clicking Finish.

**Perform the following steps:**

  1. Remain in your **centos2** VM for this section.
  2. Run the following commands and make note of the output of the commands:

```bash
ls /dev/vd*
```

```bash
ssm list
```

```bash
df -h
```

  3. Record the size of the volume group and the amount of free space
  4. At the top of your KVM window for **centos2**, click the **view** menu and change view from **Console** to **Details**.
  5. At the bottom left-hand corner, click **Add Hardware** and add a new storage device of **2GBs**, make sure the **Bus type** is selected **using the same type as your first drive that's already there**. If your first drive is SATA, IDE, or VirtIO, select that.
  6. Click the **VM** menu again, and return to the **console** view to access your centos2 VM display.
  7. Issue the command: 

```bash
ls /dev/vd*
```

   - what has changed?

  8. Use **fdisk** (_refer to how to use in Part 1_) to create a new single **primary** partition for **/dev/vdb** that fills the _entire_ disk, save partition table (accepting default prompts would work and **type w to write your changes**!), restart your **centos2** VM.
  9. Format your new _vdb1_ partition with file type: **ext4**
  10. Now we'll make the new device a **physical volume**, add it to the **volume group** by issuing the following commands:

```bash
pvcreate /dev/vdb1
```

   - (enter **y** to proceed - ignore warning)

```bash
vgextend centos_centos2 /dev/vdb1
```

   - **NOTE**: If you experience an error message, issue the **ssm list** command, and check the **volume group name** under the "**pool**" section. If the volume group name is different than **centos_centos2**, then use that volume group name for all remaining commands that use "centos_centos2"

  11. Re-issue the **ssm list** command to see if there is any change.
  12. Issue the following command to extend the logical volume for the home file-system: 

```bash
lvextend -r centos_centos2/home --size +2G
```

  13. Record the size of the volume group and the amount of free space. What has changed and what caused those changes?
  14. Issue the **ssm list** command. Note that your home file-system is now 2GB bigger, and you have not even rebooted your machine since you used fdisk to create a partition!
  15. **Reboot** your centos2 VM
  16. Record the LVM Management commands in your lab log-book.

### Part 3: Manually & Automatically Mount Partitions

We take for granted that a file-system must be mounted (for example, the root partition) in order for a Linux system to be usable upon system start-up. We need to learn how to do this manually by editing or adding an entry in the file system table (**/etc/fstab**). This file contains entries to mount various file systems automatically upon start-up of the Linux system.

![Mount](/img/Mount.png)

The Linux system administrator also has the ability to manually **mount** (connect) and **un-mount** (disconnect) partitions in order to perform maintenance on the file system (for example, un-mounting the **/home** partition to install software and prevent users from logging in during that process).

**Perform the following steps:**

  1. Perform this part in your **centos2** VM.
  2. Issue the following command to create a mount-point (directory to connect /dev/dva3 partition to):

```bash
mkdir /archive
```

  3. Issue the following command to mount the partition:

```bash
mount -t ext4 /dev/centos_centos2/archive /archive
```

  4. Use the **ls** command to view the contents of the /archive directory. What do you see?
  5. Issue the **mount** command (without arguments) to confirm it has been mounted.
  6. Unmount the **/archive** directory by issuing the following commmand: 

```bash
umount /archive
```

  7. Issue the **mount** command (without arguments) to confirm it has been unmounted.

We will now edit the /etc/fstab file in order to have the /dev/vda3 partition automatically mounted to the /archive directory upon system boot-up

  8. View the contents of the file-system table **/etc/fstab** by issuing the following command:

```bash
cat /etc/fstab
```

  9. Issue the following command to add an entry to automatically mount the /archive directory upon bootup:

```bash
echo "/dev/centos_centos2/archive /archive ext4 defaults 1 2" >> /etc/fstab
```

  10. **Reboot** your centos2 VM so see if the /archive directory is automatically mounted.

         - **Note**: You could have also issued the command: **mount -a** to automatically mount the file-systems contained in the **/etc/fstab** file without booting the VM (good for testing before trying a reboot).

**Answer the INVESTIGATION 2 observations / questions in your lab log book.**

## Lab 5 Sign-Off (Show Instructor)

**Exclusively for Summer 2020 term, submissions are accepted only online!**

Follow the submission instructions for lab 5 on Blackboard.

**Time for a new backup!:** If you have successfully completed this lab, make a new backup of your virtual machines as well as your host machine.

**Perform the Following Steps:**

1. Make certain that your **c7host** and **centos2** VMs are running.
2. Switch to your **c7host** machine.
3. Open a shell terminal, **su -** into root, and change to the **/root/bin** directory., open a shell terminal
4. Issue the Linux command: 

```bash
wget https://ict.senecacollege.ca/~ops235/labs/lab5-check.bash
```

5. Give the **lab5-check.bash** file execute permissions (for the file owner).
6. Run the shell script and if any warnings, make fixes and re-run shell script until you receive "congratulations" message.
7. Arrange proof of the following on the screen:

- [x] **centos2** VM:

  + Output from **ssm list** command.
  + Proof that **/archive** has been mounted

- [x] **c7host** Machine:

  + Proof of creation of the shell script: **monitor-disk-space.bash**
  + Crontab entry for **root** account
  + Run the **lab5-check.bash** script in front of your instructor (must have all  `OK`  messages)

- [x] **Lab5 log-book** filled out.

## Practice For Quizzes, Tests, Midterm & Final Exam

1. What is a VG? PV? LV?
2. What is the total size of the "main" VG on your system?
3. How do you create an LV?
4. How do resize an LV?
5. How would you add the disk partition **/dev/sdb7** to your volume group "main"?
6. How would you increase the size of the root filesystem by 50 MB?
7. How can you determine if a partition has been mounted onto a system?
8. How can you unmount an existing partition from the file-system?
9. How can you temporarily mount a partition on a file-system?
10. How can you permanently mount a partition on a file-system upon boot-up?
11. What are the separate elements (fields) of the **/etc/fstab** file?
12. Describe the tools that a Linux system administrator have to monitor disk space usage.
