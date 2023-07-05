---
id: lab2
title: Lab 2
sidebar_position: 2
description: Lab 2
---

# Lab 2: Creating and Using Virtual Machines

## Lab Preparation

### Purpose / Objectives of Lab 2

In this lab, you will create 3 remaining virtual machines using another virtualization program called **KVM** that will run in your c7host VM. These VMs will be used throughout the remainder of this course to learn how to administer them (installing software, managing services, networking, etc).

While you are performing this lab, it is recommended to generally note the major differences in the different installation methods, and which method you prefer to use if you were a Linux system administrator in charge of installing many Linux distributions for an organization.

**Main Objectives**

  - Installing additional Virtualization Software on your **c7host** machine (**KVM**)
  - **Create 3 separate VMs (virtual machines) using different installation methods:**

       + **centos1**: Network CentOS Installation (**Graphical**)
       + **centos2**: Network CentOS Installation (minimal install - **CLI only**)
       + **centos3**: Network CentOS Installation with Kickstart configuration file (**CLI only**)

  - Manipulate virtual machines by CLI (**virsh**)
  - Properly **backup VM images** and backup **VM configuration files**
  - Create and run **Bash Shell scripts** to automatically create a post-install report for an installed VM.

![VMWare 1a](/img/Vmware-1a.png)

At the end of lab2, your VMware Workstation application will contain **4 virtual machines** (**c7host** in your **VMware Workstation** application, and **centos1, centos2, centos3 VMs** in your **KVM** application). You will now have the option to run one virtual machine at a time, or run all machines simultaneously to learn about networking (covered in later labs)

### Minimum Required Materials

  1. **Solid State Drive**
  2. **USB key** (for backups)
  3. **Lab2 Log Book**

### Linux Command Reference

**Virtualization:**

  - [virt-manager](http://linux.die.net/man/1/virt-manager)
  - [virsh](http://linux.die.net/man/1/virsh)

**Installation Guides:**

  - [Installing & Using KVM on CentOS](http://wiki.centos.org/HowTos/KVM)
  - [Using KVM (tutorial)](http://www.dedoimedo.com/computers/kvm-intro.html)
  - [virsh command reference](https://libvirt.org/sources/virshcmdref/html-single/)

**Miscellaneous**

| [gzip , gunzip](http://linuxcommand.org/lc3_man_pages/gzip1.html) | [ip](http://man7.org/linux/man-pages/man8/ip.8.html) | [grep](http://man7.org/linux/man-pages/man1/grep.1.html) | [wc](http://man7.org/linux/man-pages/man1/wc.1.html) | [pwd](http://man7.org/linux/man-pages/man1/pwd.1.html) | [ls](http://man7.org/linux/man-pages/man1/ls.1.html) | [more](http://man7.org/linux/man-pages/man1/more.1.html) | [file](http://man7.org/linux/man-pages/man1/file.1.html) | [wget](http://man7.org/linux/man-pages/man1/wget.1.html) | [chmod](http://man7.org/linux/man-pages/man1/chmod.1.html) | [vi](http://ss64.com/vi.html) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

**Matrix Online Tutorials:**

  - Shell Scripting - Part 2 (Logic & Math Expressions): **/home/ops235/scripting-2**
  - Shell Scripting - Part 3 (Loops) **/home/ops235/scripting-3**

## Investigation 1: Setup For Nested Virtual Machines

### Part 1: Install KVM Virtualization Application

We will now install the KVM package in order to create our remaining "nested" VMs. We will also be starting several services (including iptables) and disabling the firewalld service. We will learn more about managing firewalls using iptables in lab6.

**Perform the following steps:**

  1. Log into your c7host machine. and switch to root user.
  2. perform a software update on your **c7host** VM by issuing the following command: 

```bash
yum update
```

**Yum Update Hangs**

If you experience yum update "hanging" around item 689 of over 1200 packages, issue the following commands (**in a new terminal!**):

```bash
pkill systemctl
```

```bash
yum clean all
```

```bash
yum update
```

**NOTE**: Do NOT press **<ctrl\>c** since it may cause your machine to cause a kernel panic when you restart your machine.

  3. As root, install the virtualization software by issuing the command:

```bash
yum install qemu-kvm qemu-img virt-manager libvirt libvirt-python \
libvirt-client virt-install virt-viewer bridge-utils
```

**About KVM**

There are actually several key programs installed for virtualization using KVM:

  - **kvm/qemu** - the hypervisor and other hardware emulation systems.
  - A system service named **libvirtd** that manages the VMs.
  - A graphical tool for managing virtual machines (**virt-manager**) and the **virsh** command-line tool.

  4. **Restart your c7host virtual machine**. If you fail to do this, you may experience virtualization network problems.
  5. Start the virtualization service: 

```bash
systemctl start libvirtd
```

   - **NOTE**: The most recent variants of CentOS and Fedora are using a service called **firewalld** that replaces **iptables**, however the _iptables_ service is still in relatively common usage and knowing how to use it also works with firewalld. In this course we will concentrate on _iptables_.

  6. To disable and remove firewalld, issue the following commands:

```bash
systemctl disable firewalld
```

```bash
systemctl stop firewalld
```

```bash
yum remove firewalld
```

  7. To install and enable the IPTables services, issue the following commands:

```bash
yum install iptables-services
```

```bash
systemctl enable iptables
```

```bash
systemctl start iptables
```

**Run virt-manager as a regular user, not as root:** Otherwise all your virtual machines will be owned by root and you won't be able to use them as a regular user.

  8. Start the graphical tool by selecting the menu options **Applications>System Tools>Virtual Machine Manager** or by typing the command `virt-manager`
  9. You will be learning in the next investigation to perform several different types of CentOS Linux installs.

### Part 2: Configure VMware Workstation for Nested VMs

Although we are using VMware Workstation to run our c7host VM, we will now install and configure another virtualization package called KVM in order to install the remaining VMs for this course. Since we are "nesting" VMs (i.e. running a VM inside another VM) we need to configure our c7host's Linux boot-up parameters in order to allow these VMs to run efficiently.

**Perform the following steps:**

  1. In a terminal as the root user, edit the file called: **/boot/efi/EFI/centos/grub.cfg**

        - **If this file doesn't exist, double-check your UEFI settings in VMWare Workstation for c7host. If BIOS is selected, you MUST redo Lab 1.**

  2. Search for the **first occurrence** of the Linux Kernel boot command. Do not make the following changes on more than one entry!
  3. Insert the boot option: **kvm-intel.nested=1** at the end of the Linux kernel boot options.

**About the reference settings shown below**

  - Only **ONE** of these settings might be applicable.
  - Enter **JUST** the text highlighted in **BOLD** as your kernel version, root, and LVM settings might vary slightly.

linuxefi /vmlinuz-3.10.0-1062.1.2.el7.x86_64 root=/dev/mapper/centos_c7host-root ro crashkernel=auto rd.lvm.lv=centos_c7host/root rd.lvm.lv=centos_c7host/swap rhgb quiet LANG=en_CA.UTF-8 **kvm-intel.nested=1** initrdefi /initramfs-3.10.0-1062.1.2.el7.x86_64.img

OR

linuxefi /boot/vmlinuz-3.10.0-1062.el7.x86_64 root=/dev/mapper/centos_c7host-root ro crashkernel=auto rd.lvm.lv=centos_c7host/root rd.lvm.lv=centos_c7host/swap rhgb quiet LANG=en_CA.UTF-8 **kvm-intel.nested=1** initrdefi /boot/initramfs-3.10.0-1062.el7.x86_64.img

  4. Save your editing changes, close the virtual machine application, and **reboot** your c7host VM.
  5. If you configured your c7host VM for nested VMs, then you should get the output `Y` when you issue the following command:

```bash
cat /sys/module/kvm_intel/parameters/nested
```

   - For **AMD** processors, check the /sys/module/**kvm_amd**/parameters/nested file.
   - And if kvm_intel directory doesn't exist, double-check your **Processors =\> Virtualization Engine (Intel VT-x/EPT...)** settings in VMWare Workstation.

**Answer the INVESTIGATION 1 observations / questions in your lab log book.**

## Investigation 2: Install Nested Virtual Machines (KVM)

**Keep the root password the same for Host and VMs**

In order to simplify running the lab checking scripts in future labs, using the same root password for ALL machines (c7host and virtual machines). Also use the same username and passwords for all of your machines (c7host and virtual machines).

### Part 1: Installing VM from a Network (Graphical)

**VM Details:**

  - **VM Name (and hostname)**: centos1
  - **Boot media**: Network installation
  - **CentOS Full Network Install URL**:

       + Seneca Lab: https://mirror.senecacollege.ca/centos/7/os/x86_64/
       + Home: http://mirror.netflash.net/centos/7/os/x86_64/

  - **VM Image Pathname**: /var/lib/libvirt/images/centos1.qcow2
  - **Memory**: 2048MB
  - **Disk space**: 15GB
  - **CPUs**: 2

**Perform the following steps:**

  1. Launch the _KVM virtual machine manager_ by clicking **Applications -\> System Tools -\> Virtual Machine Manager**.
  2. When prompted, enter your **root** password.
  3. Click the **create a new VM icon** located near the top left-corner of the application window.
  4. Select the **Network Install** option and click **Forward**.
  5. Enter (copy and paste) the URL located at the top of this section (depending whether you are at Seneca College or not) and click **Forward**.
  6. Set RAM size to 2048 MB, then click **Forward**.
  7. Set Hard Disk size to 15GB and click **Forward**.
  8. Enter the name: **centos1**, AND then select the option: **Customize configuration before install**, and click **Finish**.
  9. Another dialog will appear. Click **CPUs** (or "processors") and on right-side under Configuration select **Copy Host CPU Configuration**, click **Apply**, and then click **Begin Installation** at the top left-hand side.
  10. During the install, select **Gnome Desktop** (software selection). For partitioning, select **I will configure partitions** settings, click done, then select **Click here to create them automatically**. Set the / partition for **ext4** file-system type, and click **Done**.
  11. Set the correct **Date and Time Zone**, and then click on **Network and Hostname**. The network should be turned **ON**. For hostname, enter: **centos1** and then click **Done**.

![KVM Warning](/img/Kvm-warning.jpg)

You may see this warning when creating your first VM inside CentOS. Select ***Don't ask me about these directories again*** and click ***Yes***.

  12. Complete the installation. Login to your regular user account, switch to the root user with **su -**, and perform a **yum update** for the centos1 VM (reboot if required). Make certain to adjust your screen-saver settings if desired.

**Use same root password / regular username / regular user passwords for c7host and ALL VMs**

To simplify the lab checking process make certain that you use the identical root password, regular username, and regular username password for VMs that you create in this labs as you did for c7host machine in lab1.

  13. Repeat the steps as you did in the previous investigation [(Investigation1 Part 1)](#part-1-install-kvm-virtualization-application) to **stop and disable firewalld, install iptables-services, start and enable iptables** for this newly-created VM.
  14. Repeat the steps as you did with c7host post-install to **disable SELinux** and perform a **yum update**.
  15. Issue the following command to obtain the IPADDR for your centos1 VM to record in your lab2 logbook: 

```bash
ifconfig
```

  16. Record the time taken to install, and compare this to the time taken by the previous installations in your lab2 logbook.

### Part 2: Installing from a Network (Minimal install - CLI)

**VM Details:**

  - **VM Name (and hostname)**: centos2
  - **Boot media**: Network installation
  - **CentOS Full Network Install URL**:

       + Seneca Lab: https://mirror.senecacollege.ca/centos/7/os/x86_64/
       + Home: http://mirror.netflash.net/centos/7/os/x86_64/

  - **VM Image Pathname**: /var/lib/libvirt/images/centos2.qcow2
  - **Memory**: 2048MB
  - **Disk space**: 20GB
  - **CPUs**: 1

**Perform the following steps:**

  1. Create the VM (called **centos2**) as you did with the _centos1_ machine.
  2. Make certain to enter the name: **centos2**, AND then select the option: **Customize configuration before install**, and select **Copy Host CPU Configuration**, click **Apply**, and then click **Begin Installation**.
  3. When selecting the install options for centos2, do the same operation that you did in centos1 (but with **Minimal Install** software selection instead), but after **automatically creating the partitions**, reduce the size of the root logical volume to **8 GiB** and add a logical volume with a size of **2 GiB** (mount point: **/home**, name: **home**, and make certain root and /home logical volumes have **ext4** file system).

  4. Complete the installation. Login to your regular user account.
  5. Repeat the steps as you did in the previous investigation [(Investigation1 Part 1)](#part-1-install-kvm-virtualization-application) to **stop and disable firewalld, install iptables-services, start and enable iptables** for this newly-created VM.
  6. Repeat the steps as you did with c7host post-install to **disable SELinux** (using the command 'vi' instead of 'vim') and perform a **yum update**.
  7. The ifconfig command is not available in centos2. Issue the following command to obtain and record your centos2 IPADDR in your lab2 logbook: 

```bash
ip address
```

  8. Record the time taken to install, and compare this to the time taken by the previous installations in your lab2 logbook.

### Part 3: Installing from a Network using a Kickstart File

**VM Details:**

  - **VM Name (and hostname)**: centos3
  - **Boot media**: Network installation
  - **CentOS 7 Full Install Network URL:**

       + Seneca Lab: https://mirror.senecacollege.ca/centos/7/os/x86_64/
       + Home: http://mirror.netflash.net/centos/7/os/x86_64/

  - **Kickstart File URL (Kernel options):**

       + Seneca Lab: `ks=https://ict.senecacollege.ca/~ops235/labs/centos7-kickstart.cfg`
       + Home: `ks=https://ict.senecacollege.ca/~ops235/labs/centos7-kickstart-ext.cfg`

  - **VM Image Pathname**: /var/lib/libvirt/images/centos3.qcow2
  - **Memory**: 2048MB (**IMPORTANT** Do not use less than 2048MB during installation.)
  - **Disk space**: 15GB
  - **CPUs**: 2

**Include ks= in the URL options field!:** When using a kickstart file, make sure you include the ***ks=*** portion of the link. If done correctly, you should not be able to select partitions or any other settings.

**Perform the following steps:**

  1. Create the VM (called **centos3**)
  2. During the install, copy the network URL, then click the **URL options** to expand the **kernel options** input textbox. Type the following in the kernel options textbox:

        - Seneca Lab: `ks=https://ict.senecacollege.ca/~ops235/labs/centos7-kickstart.cfg`
        - Home: `ks=https://ict.senecacollege.ca/~ops235/labs/centos7-kickstart-ext.cfg`

  3. Then click the **forward** button to proceed. Make certain to select the correct Memory Size and Disk Space size shown in the VM Details above
  4. Make certain to enter the name: **centos3**, AND then select the option: **Customize configuration before install**, and select **Copy Host CPU Configuration**, click **Apply**, and then click **Begin Installation**.
  5. Observe the installation. How is it different from booting from a downloaded image?
  6. Record the time taken to install, and compare this to the time taken by the previous installations.

        - If during the installation, you see the message at the bottom **Pane is Dead**, click the **Virtual Machine** menu at the top, select **Shut Down -\> Force Off, right-click** on **centos3** in the _virtual manager_ window and select **Delete**. Redo the VM setup for a new instance of the _centos3_ VM.

  7. What happens when the installation is finished?
  8. **In a web browser**, click the kickstart (KS) link above. This link is a text file. Read through it to find the following information (pay attention to lines starting with #) and record it in your Lab Logbook:

        - **Regular-user account name**
        - **Regular-user account password**
        - **Root Password**

  9. Boot the virtual machine and log in (use the user ID and password information from the previous step to gain access to this VM).
  10. Compare the experience to the first time you booted the other virtual machines.
  11. Repeat the steps as you did in the previous investigation [(Investigation1 Part 1)](#part-1-install-kvm-virtualization-application) to **stop and disable firewalld, install iptables-services, start and enable iptables** for this newly-created VM.
  12. Repeat the steps as you did with c7host post-install to **disable SELinux** and perform a **yum update**.
  13. The ifconfig command may not be available in centos3. Issue the following command to obtain and record your centos2 IPADDR in your lab2 logbook: `ip address`
  14. Remember that centos3 is text-based interface only (no graphics). To recover from a blank screen, press a key (like the SPACE key) to return to the screen display.
  15. Record the time taken to install, and compare this to the time taken by the previous installations in your lab2 logbook.

**Answer the INVESTIGATION 2 observations / questions in your lab log book.**

## Investigation 3: Managing Virtual Machines (KVM)

### Part 1: Backing Up Virtual Machines

There are two general processes in order to back up your images:

  1. **Compressing your images** (also recommended to backup up to external storage USB Key) using the **gzip** command.
  2. **Backup the VM xml configuration file** (preferably to USB key) using **virsh** shell command to add VM to virtual machine manager list (in the event that the HOST machine is "wiped" and re-installed, but VM images and xml configuration files have been backed up external storage).

Taking the time to backup the image of the Operating System's file system allows the user to return to a "**restoration point**" using the **gunzip** command in case something bad occurs to the OS during a lab.

Failure to take the time to make and confirm backups can result in loss of lab work for the student!

**Perform the following steps:**

  1. Shut down your **centos1**, **centos2**, and **centos3** VMs. For _centos2_ and _centos3_, which are CLI-only, you can issue the following command as root to shutdown: `shutdown -h`. Please be patient, the VMs will shut down!
  2. In your **c7host** VM, open a new Terminal window, and **switch to the root account _inside_ the terminal**.
  3. Change to the images directory by issuing the command:

```bash
cd /var/lib/libvirt/images/
```

   - Note the size of the files in this directory. What do these files contain?

  4. Make a compressed backup of your **centos1.qcow2**, **centos2.qcow2**, and **centos3.qcow2** files to your regular user's home directory by issuing each command (one at a time):

```bash
gzip < centos1.qcow2 > ~YourRegularUsername/centos1.qcow2.backup.gz
gzip < centos2.qcow2 > ~YourRegularUsername/centos2.qcow2.backup.gz
gzip < centos3.qcow2 > ~YourRegularUsername/centos3.qcow2.backup.gz
```

   - **NOTE**: Make certain to use the redirection signs "<" and "\>" properly in the command!

**Please be patient**

It may look like the command prompt is stuck but it could take a while for gzip to compress an entire operating system. **NOTE**: Do **NOT** press `<ctrl>c` to cancel this process. If you do, your archive will become incomplete and your recovery will be corrupt.

  5. Compare the size of the compressed and original files (hint: use **ls -lh**). If file is very large (like 15GB), you didn't compress it and you need to remove that file and perform the previous step until you get it right!
  6. Start the ***centos3*** VM.
  7. **Make certain that you are in your VM and not in your main system!**
  8. Wreck only your centos3 system! Try this command inside the centos3 virtual machine: `rm -rf /*` (ignore error messages).
  9. Shut down the centos3 VM. If you tried to start the centos3 VM, it would not boot since all system files have been removed!
  10. Make certain you are in your **/var/lib/libvirt/images directory**. Restore the original image from the backup from your home directory to your **images** directory by typing this command:

```bash
gunzip < ~YourUserId/centos3.qcow2.backup.gz > centos3.qcow2
```

  11. Restart the VM. Is it working normally?
  12. You should make a copy of the XML configuration file in case you "wipe" and re-install the host machine, and want to add a restored VM backups to the virtual machine manager list. We will demonstrate using the centos3 XML configuration file, and prove that a "clone" can be added to your list.Please perform the following step:
  13. Execute the following command:

```bash
virsh dumpxml centos3 > centos3.xml
```

  14. Examine the file `centos3.xml`. What does it contain? What format is it in?

### Part 2: Restoring Virtual Machines

  1. We will now learn how to download a compressed image file and XML configuration file and add it as a VM to the Virtual Machine Manager menu.
  2. Issue the following commands:

        + `wget https://ict.senecacollege.ca/~ops235/centos4.qcow2.backup.gz`
        + `wget https://ict.senecacollege.ca/~ops235/labs/centos4.xml`

  3. Copy these files to the **/var/lib/libvirt/images** directory and decompress the qcow2 image file.
  4. Make certain your present working directory is: **/var/lib/libvirt/images**
  5. Issue the command:

```bash
virsh define centos4.xml
```

  6. What happened in the virtual manager window? To remove a VM entry in the Virtual Manager window, simply issue the command: **virsh undefine vm_name** (without the **.xml** file extension)
  7. Start up your new centos4 VM.
  8. Click on the user _OPS235_, and click the cog icon.
  9. Notice _Cinnamon_ (_Software Rendering_) is selected. The Cinnamon desktop environment has been installed on this VM. From this menu, you can select other installed desktop environments. This is how you switch between them. Write it down.

![Cinnamon 2](/img/Cinnamon-2.png)

  10. Login with the password **ops235**. Feel free to explore the new environment.
  11. Prior to your practical test, you will be required to perform a similar operation to download, unzip and run a VM image for your practical test.

**Shutting Down the Host while Virtual Machines are Running:** If you shut down your host system while virtual machines are running, they will be suspended, and will resume the next time you boot your host system.

  12. For the remainder of these labs, it is assumed that you will backup **both** the images and XML configuration files for **all** Virtual machines, when asked to backup your virtual machines. It is also highly recommended to backup these files to an external storage device (eg. USB key) in case the host machine gets "wiped" and you need to rebuild your HOST machine and then restore your Virtual Machines...
  13. Answer this question in your log book:

         - In order to fully back up a virtual machine, what information should be saved in addition to the virtual machine image?

### Part 3: Using Shell Scripts for VM Backup & Management

You will continue our use of Bash Shell scripting by first creating a Bash Shell script that will allow the Linux sysadmin to select their created VMs for backup to root's home directory. Afterwards you will download, view and run a couple Bash Shell scripts that use the virsh command to start and stop your virtual machines.

**Please check out these [Bash Shell Scripting Tips](/C-ExtraResources/bash-shell-scripting-tips.md) first before continuing with the following steps**

**Perform the following steps:**

  1. Start the **centos1** virtual machine, and stop the **centos2** and **centos3** virtual machines.
  2. Switch to the **c7host** machine, and open a shell terminal.
  3. Enter these admin commands into your **c7host** machine and note the result:

```bash
virsh list
```

```bash
virsh list --all
```

```bash
virsh list --inactive
```

  4. Now, shut-down your centos1 VM normally, and close the centos1 VM window.
  5. Switch to your terminal and issue the command: 

```bash
virsh start centos1
```

  6. Using the appropriate command check to see if your centos1 VM is now running.
  7. There are other commands that can be used (such as **suspend**, or **shutdown**). The "shutdown" command may not always work since it relies on the guest handling a particular ACPI event. Why do you think it is useful to have commands to manipulate VMs?
  8. Since this is a text-based version of Linux, you do not need to turn off the screen-saver.

**Virtual Machine Does not Shutdown from Command**

If the Virtual machine fails to shutdown from the `virsh shutdown` command, then you can go to the **Virtual Machine manager** and **halt** or **shutdown** within the VM itself, then you can click the **PowerOff** button in the VM window. You'll want to avoid a forced shutdown since those are equivalent to yanking the power cord out of the wall on a physical machine!

  9. Open a Bash shell terminal and login as root.
  10. Use a text editor (such as `vi` or `nano`) to create a Bash Shell script called: `backupVM.bash` in /root/bin directory.
  11. Enter the following text content into your text-editing session:

```bash
#!/bin/bash


# backupVM.bash
# Purpose: Creates system info report
#
# USAGE: ./report.bash
#
# Author: *** INSERT YOUR NAME ***
# Date: *** CURRENT DATE ***


if [ $PWD != "/root" ] # only runs if in root's directory
then
 echo "You must be located in /root" >&2
 exit 1
fi
```

  12. Save your editing session, but remain in the text editor.
  13. This shell script is designed particularly for your centos1, centos2, and centos3 VMS.
  14. The code displayed below will prompt the user if they wish for all VMs to be backed-up; otherwise, allow the user the option of specifying which VMs to be backed-up. Add the following code

```bash
read -p "Backup all VMs? (y|n):" answer # prompt if all VMs to be backed-up

if [ "$answer" = "y" ] # Backup all VMs if answer is yes
then
 for num in 1 2 3 # Determinant loop for 3 arguments: 1, 2, and 3
 do
  echo "Backing up VM #$num"
  gzip < /var/lib/libvirt/images/centos$num.qcow2 > /root/centos$num.qcow2.backup.gz

  echo "VM #$num BACKUP DONE"
 done

elif [ "$answer" = "n" ]
then
 read -p "Which VM should be backed up? (1/2/3): " numanswer
 until echo $numanswer | grep "^[123]$" >> /dev/null # Look for match of single digit: 1,2, or 3
 do
  read -p "Invalid Selection. Select 1, 2, or 3: " numanswer
 done
 echo "Backing up VM #$numanswer"
 gzip < /var/lib/libvirt/images/centos$numanswer.qcow2 > /root/centos$numanswer.qcow2.backup.gz

 echo "VM #$numanswer BACKUP DONE"
else
 echo "Invalid Selection... Aborting program"
 exit 2
fi
```

  15. Save, set permissions, and then run that shell script to backup centos1. Confirm that this script did backup this image to root's home directory
  16. Use the `wget` command to download, study, and run the following shell scripts on-line:

         - `https://ict.senecacollege.ca/~ops235/labs/vm-start-text.bash`
         - `https://ict.senecacollege.ca/~ops235/labs/vm-stop-text.bash`
         - `https://ict.senecacollege.ca/~ops235/labs/vm-start.bash`
         - `https://ict.senecacollege.ca/~ops235/labs/vm-stop.bash`

  17. Try to understand what these Bash Shell scripts do.
  18. You have completed lab2. Proceed to Completing The Lab, and follow the instructions for "lab sign-off".

**Answer INVESTIGATION 3 observations / questions in your lab log book.**

## Lab 2 Sign-Off (Show Instructor)

**Exclusively for Summer 2020 term, submissions are accepted only online!**

Follow the submission instructions for lab 2 on Blackboard.

**Backup ALL of your VMs!:** If you have successfully completed this lab, make a new backup of all of your virtual machines onto your USB Key.

**Perform the Following Steps:**

1. Use the **virsh start** command to launch all the VMs (**centos1**, **centos2**, and **centos3**).
2. Inside each virtual machine, run `ip a` on the command line. Open a Terminal window in centos1 to do so. You'll need the IP address of each machine for the next steps.
3. Switch to your **c7host** VM, open a terminal, login as root, and change directory to **/root/bin**.
4. Issue the Linux command:

```bash
wget https://ict.senecacollege.ca/~ops235/labs/lab2-check.bash
```

8. Give the **lab2-check.bash** file execute permissions (for the file owner).
9. Run the shell script and if any warnings, make fixes and re-run shell script until you receive "congratulations" message.
10. Arrange proof of the following on the screen:

- [x] **All VMs:**

     + All 4 VMs **created** and **running**
     + Proof of **yum updates** on ALL VMs (i.e. results from **yum update** command)

- [x] **c7host VM:**

     + Run the **lab2-check.bash** script in front of your instructor (must have all  `OK`  messages)

- [x] Lab2 logbook notes completed.


## Practice For Quizzes, Tests, Midterm & Final Exam

  1. What is the name of the CentOS installation program?
  2. What is the name of the file created by the CentOS installation program?
  3. Which type of installation works best for confirming compatibility with hardware before installation? Why?
  4. Which type of installation works best for installing large numbers of computers? Why?
  5. How can you reduce the number of software updates required immediately after installation?
  6. How do you start and stop virtual machines?
  7. How do you SSH into your virtual machines?
  8. List the steps to install a VM from:

        - Downloaded iso file
        - Network install (without kickstart file)
        - Network install (with kickstart file)

  9. What is the purpose of the virsh command?
  10. How to start and stop VMs using the virsh command?
  11. List the steps to correctly backup your VMs to a USB disk
  12. List the steps to correctly restore your VMs from a USB disk to your c7host VM.
  13. How can you prompt the user for data and store into a variable?
  14. How do you perform mathematical operations in the Bash shell and within a Bash shell script?
  15. What is the difference between a determinant loop and an in-determinant loop?
  16. Show a few examples how loops can be used to error-check when prompting the user for data.
  17. What is the purpose of the **&&** and **\|\|** symbols when used with logic?'
  18. What does the command **rpm -qi centos-release** do and why is it important?
  19. What is the difference between **rpm -q centos-release** and **uname -a**?
