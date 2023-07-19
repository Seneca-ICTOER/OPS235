---
id: lab6
title: Lab 6
sidebar_position: 6
description: Lab 6
---

# Lab 6: Virtual Networks

## Lab Preparation

### Purpose and Objectives of Lab 6

In this lab, you will learn the basics of networking by using your **Virtual Machines**. You will first set up a **virtual network** among those machines. In addition, you will learn to set up **network names** (to associate with server's IP Addresses), **associate network services with port numbers** for troubleshooting purposes, and use shell scripts with arrays to store network configuration data.

![My Network](/img/My-network.png)

Setting up networks is an essential operation for a system administrator. Maintaining network connectivity and securing the network are also essential operations. In this lab, we will **configure a private virtual network using static IP addresses** (eg. wired workstation connections). We will learn how to setup a DHCP network (eg. for notebook, table and smartphones) in lab 8.

**Main Objectives**

  1. Configure a private virtual network for your **VMs** and your **c7host** machine
  2. Configure network interfaces for your Virtual Machines using both **graphical** and **command-line** utilities.
  3. Use **local hostname resolution** to resolve simple server names with their corresponding IP Addresses
  4. Use common networking utilities to associate network services with port numbers for troubleshooting purposes
  5. Use **shell scripts with arrays** to store network configuration data

### Minimum Required Materials

  - **Solid State Drive**
  - **USB key** (for backups)
  - **Lab6 Log Book**

### Linux Command Reference

**Networking Utilities**

| [ifconfig](http://man7.org/linux/man-pages/man8/ifconfig.8.html) | [ip](http://man7.org/linux/man-pages/man8/ip.8.html) | [system-config-network](http://www.serverlab.ca/tutorials/linux/administration-linux/configure-centos-6-network-settings/) | [route](http://man7.org/linux/man-pages/man8/route.8.html) | [ping](http://man7.org/linux/man-pages/man8/ping.8.html) | [arp](http://man7.org/linux/man-pages/man8/arp.8.html) | [netstat](http://man7.org/linux/man-pages/man8/netstat.8.html) |
| --- | --- | --- | --- | --- | --- | --- |

**Networking Configuration Files**

  - [Interface Configuration](https://www.centos.org/docs/5/html/Deployment_Guide-en-US/s1-networkscripts-interfaces.html)
  - [resolv.conf](https://linux.die.net/man/5/resolv.conf)

**Additional Utilities**

  - [find](http://man7.org/linux/man-pages/man1/find.1.html)
  - [tail](http://man7.org/linux/man-pages/man1/tail.1.html)
  - [cp](http://man7.org/linux/man-pages/man1/cp.1.html)

## Investigation 1: Configuring A Virtual Network

For the remainder of this course, we will focus on networking involving our VMs. This lab will focus on setting up a virtual network, connecting our VMs and c7host machine to the network, and configuring our private network to make more convenient to use, troubleshoot and protect. **Lab 7** will focus on configuring SSH and making access to the private network more secure. Finally, **lab 8** will focus on configuring mobile (as well as wired devices) via DHCP to automatically assign an IP address.

There are several reasons for creating virtual networks. The main reason is to **safely connect servers together** (i.e. to safely limit but allow the sharing of information among computer network users). This allows for a secure connection of computers yet controlling access to and monitoring (protecting) access to permitted users (discussed later in **lab7**).

### Part 1: Configuring a Private Network (Via Virtual Machine Manager)

If we are going to setup a private network, there are a number of steps to perform: First, **define a new private network in the Virtual Manager application**; and second, **configure each of our VMs to connect to this new private network**. In Part 1, we will be perform the first operation. In part 2, we will be performing the second operation for all VMS (graphical and command-line).

Before configuring our network, we want to **turn off dynamic network configuration for our Virtual Machines** by turning off the "**default**" virtual network. We will then define our private network.

![Network Config Centos](/img/Network-config-centos.png)

This diagram shows the current network configuration of your **c7host** machine in relation to your **Virtual Machines**. In this section, you will be learning to change the default network settings for both your **c7host** machine and **VMs** to belong to a **virtual network** using fixed IP Addresses.

**Perform the following steps:**

  1. Launch your **c7host VM** and start the Virtual Machine Manager.
  2. Make certain that the **centos1**, **centos2**, and **centos3** virtual machines are **powered off**.
  3. In the Virtual Machine Manager dialog box, select **Edit-> Connection Details**.
  4. In the **Connection Details** dialog box, select the **Virtual Networks** tab
  5. Click to de-select the **Autostart (on boot)** check-box options and click the **Apply** button.
  6. Stop the default network by clicking on the **stop** button at the bottom left-side of the dialog box.
  7. Click the **add** button (the button resembles a "plus sign") to add a new network configuration.
  8. Type the network name called: **network1**, and then click the **Forward** button.
  9. In the next screen, enter the **new network IP address space** called: **192.168.235.0/24**
  10. Disable the **DHCP4** check box and click the **Forward** button.
  11. Click the **Forward** button again to accept the default in the next screen.
  12. Enable Network Forwarding by Selecting **Forwarding to physical network**, the destination should be **Any physical device** and the mode should be **NAT**
  13. Proceed with changes, and click **Finish**.
  14. We will now reconfigure each of our VMs to use our new virtual network **network1**

         1. Let's start with our **centos1 VM**. Double-click on your **centos1** VM, but instead of running the VM, click on the **view** menu, and select: **Details**

         - (Note: the Virtual Machine window will appear - do not start virtual machine)

         2. In the **left pane** of the Virtual Machine window, select **NIC**: and note that this NIC is on the "default" virtual network
         3. Change it to **Virtual Network network1: NAT** (i.e. the network that you just created) and click the **Apply** button.


## Part 2: Configuring Network For centos1 VM

In this section, we will be using a graphical tool to connect our **centos1** VM to our private network.

![New Network Dialog](/img/New_network_dialog.png)

Although the private network has been setup via the **Virtual Machine Manager**, each virtual machine requires to change its own network setting individually (either **graphically** or by **command line**).

**Perform the following steps:**

  1. On your **c7host** machine, run **ifconfig** and make note of the IP address assigned to the **virbr1** (i.e. "Virtual Bridge) interface. This will be the default gateway and DNS server for your VMs.
  2. Select the **Console** view (instead of Details), start your **centos1** VM and login.
  3. Within your **centos1 VM**, click **Applications** menu, then select **System Tools**, and then **Settings**.
  4. In the _Settings_ Dialog Box, click on the **Network** icon.
  5. For the **Wired** connection, click the **settings** button (The icon appears as a gear located at the bottom right-hand corner of the dialog box).
  6. Select the **IPv4** tab. Change Address from _Automatic_ (_DHCP_) to **Manual**.
  7. In the Addresses section, enter the following information:

        + IP Address: **192.168.235.11**
        + Subnet Mask: **255.255.255.0**
        + Default Gateway: The IP address of **virbr1** on your centos host.

  8. Click on the **DNS' _field and add The IP address_ (virbr1** on your centos host) as the primary DNS server.
  9. When finished, check your settings, and then click the **Apply** button.
  10. Open a terminal and issue the **ifconfig** command to confirm the IP ADDRESS settings change.
  11. Verify that **centos1VM** is now connected to the private network by issuing the following command from your **c7host** machine:

```bash
ping 192.168.235.11
```

### Part 3: Configuring VM Network Setup via Command Line (centos2 and centos3)

The centos2 and centos3 VMs are **text-based only** systems, thus we cannot use a graphical tool to configure centos3 to connect to our private network. Therefore we will learn how to perform this task by using command-line tools.

![Network Scripts](/img/Network-scripts.png)

Although you can use the **ifconfig** command to temporarily create a static IP address connection to a network, you need to add the network settings in the **/etc/sysconfig/network-scripts** directory to automatically connect to the network upon Linux system boot-up.

**Perform the following steps:**

1. Configure your **centos3** VM (in the **View -> Details** menu of Virtual Machine Manager) to configure the NIC interface to **network1**, click **Apply**, and switch your centos3 VM view from _details_ to **console**.
2. Start your **centos3** VM, login, and **su** to **root**.
3. Use the command called: **ifconfig** to list active interfaces, you should see one with a name of **eth0** or a similar name.

      + NOTE: If the **ifconfig** command is NOT available in your centos3 vm, issue the command: `yum install net-tools`

4. To configure your card with a static address use the following command:

```bash
ifconfig eth0 192.168.235.13 netmask 255.255.255.0
```

5. To configure a default gateway for that interface enter the command:

```bash
route add default gw 192.168.235.1
```

6. To configure a DNS server for this VM, edit the file /etc/resolv.conf. Change the nameserver line to read:

```bash
nameserver 192.168.235.1
```

7. Confirm your settings work by doing the following (you might need to do the steps **3** and **4** a few times before it works; keep checking with the commands below and wait a bit before each attempt): `ifconfig`, `route -n`, `ping` (other VM's IP address), and `ssh` ( to your Seneca's Matrix account to test your DNS)
8. Restart the **centos3** VM, or just wait a few minutes.
9. Login and test your configuration again. What happened?
10. While we can configure network settings from the command line those settings are not persistent. To configure persistent network configurations we need to edit the configuration files.
11. Change to the **/etc/sysconfig/network-scripts** directory
12. List the contents of this directory. You should see 2 different types of files, network config scripts and network configuration files.
13. Look for the configuration file for your original interface, it should be named **ifcfg-eth0**
14. Edit the new file for your interface and give it the following settings (or create a brand new file, might be easier than editing the old one):

```bash
DEVICE=eth0
IPADDR=192.168.235.13
NETMASK=255.255.255.0
GATEWAY=192.168.235.1
HWADDR=xx:xx:xx:xx:xx:xx <-- # Use YOUR centos3 VM's MAC ADDRESS!!!
DNS1=192.168.235.1
BOOTPROTO=static
ONBOOT=yes
NM_CONTROLLED=yes
IPV6INIT=no
```

**Keep consistent with Quotation or no Quotation:** You have the option to either place quotation marks around the values, or no to use quotation at all. Regardless of the method you chose, KEEP CONSISTENT. For example, if beginning value with a double-quote, end value with a double-quote. If beginning value without a double-quote, do not end with any quotation.

![New Network Config](/img/New-network-config.png)

This diagram should show the newer network configuration of your **c7host** machine in relation to your **Virtual Machines**.

15. Save the file and then restart the network connection by issuing the commands:

```bash
ifdown eth0
```

```bash
ifup eth0
```

16. Verify your configuration as you did before.
17. Restart the **centos3** VM.
18. Use the **ifconfig** and **ping** commands to verify your network connection to other VMs.
19. Login and attempt to **ssh** to your matrix account to verify the settings.

       + We need to also configure your centos2 VM for a persistent network connection as well:

20. Configure the centos2 VM (in the **View -> Details** menu of Virtual Machine Manager) to configure the NIC interface to **network1**, click **Apply**, and switch your centos2 VM view from details to **console**.
21. Start your **centos2** VM, login, and **su** to **root**.
22. Issue the command: `ip address` and write down the **MAC address** for your eth0 network interface.
23. Edit the **/etc/sysconfig/network-scripts/ifcfg-eth0** file using the IPADDR: **192.168.235.12** , and the same **NETMASK**, **GATEWAY**, **DNS1** and **MAC address** information for you centos2 VM (i.e. recorded previously).
24. Save changes, re-issue the **ifdown** and **ifup** commands, and then issue the **ip address** and **ping** commands to verify that you can connect to other VMs on your network.

**Answer INVESTIGATION 1 observations / questions in your lab log book.**

## Investigation 2: Managing Your Newly-Created Network

Creating private networks are an important task, but a system administrator also needs to manage the network to make it **convenient to use**, and **troubleshoot** network connectivity problems.

This investigation will expose you to useful "tweaks" and utilities to help accomplish this task. **Lab 7** requires that you understand these concepts and have a good general understanding how to use troubleshooting utilities (like **netstat**).

### Part 1: Using /etc/hosts File for Local Hostname Resolution

After setting up a private network, it can be hard to try to remember IP addresses. In this section, we will setup your network to associate easy-to-remember server names with IP ADDRESSES.

**Hosts files vs. the Domain Name System**

On large public networks like the Internet or even large private networks we use a network service called [Domain Name System (DNS)](http://en.wikipedia.org/wiki/Domain_Name_System) to resolve the human friendly hostnames like **centos.org** to the numeric addresses used by the IP protocol. On smaller networks we can use the `/etc/hosts` on each system to resolve names to addresses.

**Perform the following steps:**

  1. Complete this investigation on **all of your VMs** and the **c7host** machine.
  2. Use the `hostname` and `ifconfig` commands on your **c7host** machine and all of your 3 VM's to gather the information needed to configure the **/etc/hosts** file on all of your Linux systems.
  3. Edit the **/etc/hosts** file for the **c7host**, **centos1**, **centos2** and **centos3** VMs. Add the following contents to the bottom of the **/etc/hosts** file:

```text
192.168.235.1 c7host
192.168.235.11 centos1
192.168.235.12 centos2
192.168.235.13 centos3
```

  4. Verify that you can now ping any VM by their hostname instead of the IPADDR.

### Part 2: Network Connectivity and Network Service Troubleshooting Utilities

Troubleshooting network problems is an extremely important and frequent task for a Linux/Unix system administrator. Since network services (such as file-server, print-servers, web-servers, and email-servers) depend on network connectivity, as Linux/Unix sysadmin must be able to quickly and effectively pin-point sources of network problems in order to resolve them.

Network service problems may not be entirely related to a "broken" network connection, but a service that is not running or not running correctly. The following table lists the most common listing of utilities to assist with detection of network connectivity or network service problems to help correct the problem.

**Common Network Troubleshooting Tools**

| **Purpose** |	**Command(s)** |
| --- | --- |
| Network Connectivity |	`ping`, `arp`, `ifconfig` |
| Network Service Status |	`netstat` |

**Perform the following steps:**

  1. Switch to your **c7host** machine.
  2. Issue the **ping** command to test connectivity to your **centos1**, **centos2**, and **centos3** VMs.
  3. Examine the contents of the ARP cache by using the command: `arp` What is the purpose of ARP?
  4. Check the contents of the cache again by using the command: `arp -n` What was the difference in output?
  5. Issue the following command: `netstat -at` This command will list all active TCP ports. Note the state of your ports.

        - **TCP** is a connection oriented protocol that uses a handshaking mechanism to establish a connection. Those ports that show a state of LISTEN are waiting for connection requests to a particular service. For example you should see the ssh service in a LISTEN state as it is waiting for connections.

  6. From one of your VM's login to your host using the **ssh** command.
  7. On your c7host VM rerun the `netstat -at` command and in addition to the **LISTEN** port it should list a 2nd entry with a state of ESTABLISHED. This shows that there is a current connection to your ssh server.
  8. Exit your ssh connection from the VM and rerun the command on the CentOS host. Instead of **ESTABLISHED** it should now show a state of **CLOSE_WAIT**. Indicating that the TCP connection is being closed.
  9. On your c7host VM, try the command: `netstat -atn` How is this output different? Without the -n option ss attempts to resolve IP addresses to host names (using /etc/hosts) and port numbers to service names (using /etc/services)
  10. Examine the **/etc/services** file and find which ports are used for the services: ssh, sftp, http
  11. Now execute the command netstat -at What is the difference between the options: -at and -au? When examining UDP ports why is there no state?

### Part 3: Using Arrays to Collect VM Network Information

We finish shell scripting by using arrays by reading and storing networking information for each VM (centos1, centos2, and centos3) to be stored in a report in your c7host machine. We will use the ssh command in order to grab the network information (one VM at a time), and store the network setup into an Associative array in our c7host machine.

If you do not entirely understand the script that you will enter, just realize that we are using these "special storage variables" in order to make this work.

**Please review the [Bash Shell Scripting Tips here](/C-ExtraResources/bash-shell-scripting-tips.md) before proceeding with this part**

**Perform the following steps:**

1. Perform this section in your **c7host** machine.
2. Open a shell terminal and login as **root**.
3. Change to the **/root/bin** directory.
4. Using a text editor, create a Bash shell script called **network-info.bash** and enter the following content below:

```bash
#!/bin/bash

# Author: *** INSERT YOUR NAME ***
# Date: *** CURRENT DATE ***
#
# Purpose: Creates system info report
#
# USAGE: ./network-info.bash [full pathname to ifcfg-eth0 file]

if [ $USER != "root" ] # only runs if logged in as root
then
 echo "You must be logged in as root." >&2
 exit 1
fi

if [ $# -ne 1 ]
then
 echo "You need to provide the full pathname to ifcfg-eth0 file" >&2
 echo "USAGE: $0 [full pathname to ifcfg-eth0 file]" >&2
 exit 0
fi
```

5. We will now use a **while** loop to read every line in the network configuration file and store into an array as a separate array element. Add the following content to your shell script editing session:

```bash
while read line
do
 network[$index]="$line"
 index=$(($index+1))
done < $1
```

6. Finally, we will **generate a web-page document**, use a loop to printout the results of the data (stored in an array) and open the web-page document in the **firefox** web-browser.

```bash
cat > /root/network-info.html <<+
<!DOCTYPE html>
<html>
 <head>
   <title>Network Information</title>
 </head>
 <body>
   <h3>Network Information for: $1</h3>
   <table cellpadding="5" cellspacing="0" border="1">
+

for((x=0; x<index; x++))
do
 echo "<tr><td>${network[$x]}</td></tr>" >> /root/network-info.html
done

cat >> /root/network-info.html <<+
  </table>
 </body>
</html>
+

/bin/firefox /root/network-info.html
```

7. Give this shell script execute permissions and run this shell script.
8. You will need to determine the full pathname of the **ifcfg-ens33** file in the /etc/sysconfig/network-scripts directory to use **as an argument** for this shell script.
9. Run the shell script. What do you notice from the report that the shell script generated?
10. Then use wget command to download another variation of the network-info.bash shell script using the awk command to separate the variables and values into separate columns: https://ict.senecacollege.ca/~ops235/labs/network-info-2.bash

**Answer INVESTIGATION 2 observations / questions in your lab log book.**

## Lab 6 Sign-Off (Show Instructor)

**Exclusively for Summer 2020 term, submissions are accepted only online!**

Follow the submission instructions for lab 6 on Blackboard.

**Time for a new backup!:** If you have successfully completed this lab, make a new backup of your virtual machines as well as your host machine.

**Perform the Following Steps:**

1. Make certain that ALL of your VMs are running.
2. Switch to your **c7host** VM.
3. Change to the **/root/bin** directory.
4. Issue the Linux command:

```bash
wget https://ict.senecacollege.ca/~ops235/labs/lab6-check.bash
```

5. Give the **lab6-check.bash** file execute permissions (for the file owner).
6. Run the shell script and if any warnings, make fixes and re-run shell script until you receive "congratulations" message.
7. Arrange proof of the following on the screen:

- [x] **centos2** VM:

     + **ssh** from **centos2** to **c7host** VM.

- [x] **c7host** machine

     + Output from running the **network-info.bash** shell script
     + Run the **lab6-check.bash** script in front of your instructor (must have all  `OK`  messages)

- [x] **Lab6** log-book filled out.

## Practice For Quizzes, Tests, Midterm & Final Exam

  1. What is a port?
  2. What command will set your IP configuration to `192.168.55.22/255.255.255.0` ?
  3. What is the difference between UDP and TCP?
  4. What port number is used for DHCP servers?
  5. What is the function of the file `/etc/hosts` ?
  6. What is the purpose of the file `/etc/sysconfig/network-scripts/ifcfg-eth0` ?
  7. What tool is used to show you a list of current TCP connections?
