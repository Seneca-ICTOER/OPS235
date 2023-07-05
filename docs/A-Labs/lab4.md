---
id: lab4
title: Lab 4
sidebar_position: 4
description: Lab 4
---

# Lab 4: Users, Groups and Services

## Lab Preparation

### Purpose / Objectives of Lab 4

There are many other tasks that a Linux system administrator must perform other than installing Linux and installing software.

User account management is a very important operation that a Linux sysadmin does on an continual basis. The sysadmin not only needs to add or remove user accounts by issuing commands, but may need to automate user account creations a large number (batch) of potential employees. There are many features with the Linux command to create new users including: specification of a home directory, type of shell used, name, password and time-limit (referred to as "aging") for a new user account. Removing user accounts also have options such as removing the user account but keeping the home directory for reference or evidence of "wrong-doing"

Another important operation for a Linux sysadmin is to manage services (eg. starting, restarting, stopping, disabling, enabling system services). Many students may think that the following topic is small and "not a big deal". Those students may say, "**How hard is running and stopping services**?"

The process may not be hard, but knowing how to stop, start, restart and check the status of services is absolutely critical to a Linux server. **Aside from learning to trouble-shoot problems** by checking the status of running services, **understanding how to manage services is critical to help protect a Linux server from penetration** (this term is referred to as "**Hardening a system**"). Sometimes it is "what we don't know" that can harm us. One key element in hardening a computer system is to disable non essential networkng services to allow IDSs (**Intrusion Detection Systems**) to focus on a narrower range of policy violations. A Debian-based penetration testing distribution called Kali (formerly referred to as "BackTrack") allows sysadmins and security professionals to identify vulnerabilities in their computer systems, and thus improve (harden) their systems against penetration. Learning to monitor the status, enable and disable networking services underlies the **Backtrack** motto: "***The quieter you are, then more you will hear...***"

**Main Objectives:**

  - Administer (**add, remove, modify**) **users** on a Linux system.
  - Save time while adding new users using a template of **start-up files**.
  - Create and manage **groups** on a Linux system.
  - **Start, Restart and Stop services** on a Linux system.
  - **Enable and Disable services** on a Linux system.
  - Display the **status of running services** on a Linux system.
  - Create a Bash shell script to **generate multiple user accounts** from a text user database file

### Minimum Required Materials

  - **Solid State Drive**
  - **USB key** (for backups)
  - **Lab4 Log Book**

### Linux Command Reference

**User Management**

| [useradd](https://www.systutorials.com/docs/linux/man/8-useradd/) | [userdel](https://www.systutorials.com/docs/linux/man/8-userdel/) | [usermod](https://www.systutorials.com/docs/linux/man/8-usermod/) | [groupadd](https://www.systutorials.com/docs/linux/man/8-groupadd/) | [groupdel](https://www.systutorials.com/docs/linux/man/8-groupdel/) | [chage](http://www.agr.unideb.hu/~agocs/informatics/11_e_unix/unixhelp/unixhelp.ed.ac.uk/CGI/man-cgied74.html?chage) |
| --- | --- | --- | --- | --- | --- |

**Managing Services**

  - [systemctl](http://www.dsm.fordham.edu/cgi-bin/man-cgi.pl?topic=systemctl)

**Miscellaneous**

| [/etc/passwd](http://man7.org/linux/man-pages/man5/passwd.5.html) | [/etc/group](http://man7.org/linux/man-pages/man5/group.5.html) | [/etc/shadow](http://man7.org/linux/man-pages/man5/shadow.5.html) | [/etc/skel](http://archive.linuxfromscratch.org/blfs-museum/1.0/BLFS-1.0/postlfs/skel.html) | [init vs systemd](http://zenit.senecac.on.ca/wiki/index.php/Init_vs_systemd) |
| --- | --- | --- | --- | --- |

## Investigation 1: User/Group Management

In your ULI101 course, you learned to change permissions for directories and files relating to user, same group members and other group members. In this course, since you are the sysadmin with root privileges, you can create or remove users and groups as well as change the ownership of directories and files! We will now learn to perform key user account management operations in this section.

### Part 1: Studying the /etc/passwd file

The /etc/passwd file is a database that stores user accounts (both system and regular users). Since we will be learning to create, modify and remove users on our Linux system, we should study this file in order to understand how those user account management commands will affect this file.

**Perform the following steps:**

  1. Launch your **c7host** and **centos1** VMs.
  2. Switch to your **centos1** VM.
  3. Open a shell terminal and login as **root**.
  4. Look at the `/etc/passwd` file.
  5. Make note of the contents of that file.
  6. Read about the file: http://man7.org/linux/man-pages/man5/passwd.5.html
  7. Make sure you know what information each field contains.
  8. Why do you think there are so many users?
  9. Look at the names of the users. What do you think these user names represent? Are they people?
  10. What is the numeric user ID (UID) of the root user?
  11. The user IDs of real users (people) are different from the user IDs of system accounts. What is the pattern?

![Passwd File](/img/Passwd-file.png)

The /etc/passwd file contains records for users (system accounts and regular-user accounts). There are several fields including: **Username**, **password link** ("x" indicates hashed password stored in /etc/shadow file only accessible by root), **user-id, primary group-id, user defined field** (eg. Full Name), **default home directory**, and **default shell**.

![User Management](https://wiki.cdot.senecacollege.ca/w/imgs/User-management.png)

Another essential responsibility for Linux system administrators is to **add**, **modify**, and **remove** user accounts.

### Part 2: Adding, Removing, and Modifying Users

In this section, we will now learn how to properly add user accounts, remove user accounts, and modify existing user account information.

**Perform the following steps:**

  1. Remain in your **centos1** VM for this section.
  2. Read the man page for the `useradd` command.
  3. Create a new user called **ops235_1** by issuing the command:

```bash
useradd ops235_1
```

  4. Issue the command: `grep ops235_1 /etc/passwd` to see if that user account was created.
  5. View the **/home** directory to view the contents. Is the user ops235_1's home directory there?

        - **NOTE**: In some versions of Linux, you may have to issue the **-m** option with the useradd command in order to create a home directory for that user.

![User Management](/img/Passwd-file.png)

  6. Issue the following command to create the user called ops235_2:

```bash
useradd -m ops235_2
```

  7. View the **/home** directory to verify that the home directory for **ops235_2** has been created. What does the -m option do for the useradd command?
  8. Issue the following command to remove the user called ops235_2: 

```bash
userdel ops235_2
```

  9. Issue the grep command with the /etc/passwd file to verify that the username ops235_2 was removed.
  10. View the contents of the **/home** directory. Was the home directory for user **ops235_2** removed?
  11. Issue the following command to remove ops235_2's home directory: 

```bash
rm -rf /home/ops235_2
```

  12. Issue the **userdel** command to remove the **ops235_1** account, but this time include the **-r option** to also remove the home directory.
  13. Issue the useradd -m command to recreate the user called: **ops235_1**.
  14. Use the **passwd** command to set the password for the user **ops235_1**.
  15. View the contents for **ops235_1**'s home directory and note the files.
  16. Create a new file in the **/etc/skel** directory with the following command: 

```bash
touch /etc/skel/foo
```

  17. Recreate the new user (with home directories automatically created) for **ops235_2**.
  18. Set the password for the user **ops235_2**.
  19. View the contents for **ops235_2's home directory** and note the files. What do you notice that is different. What do you think is the purpose of the **/etc/skel** directory?
  20. Be sure to record your observations in your lab notes.
  21. Look in the man pages for the **useradd** command. Explain the purpose of using the -e option for the _useradd_ command.
  22. Issue the following command: 

```bash
chage -E 2019-12-31 ops235_1
```

  23. Issue the following command: 

```bash
usermod -c "New Name" ops235_2
```

  24. View ops235_2's account information in the **/etc/passwd** file. What do you notice is different?
  25. Issue the following command to obtain information regarding the user called ops235_1: `chage -l ops235_1`. What do you think is the purpose of the chage command and the useradd command with the **-e** option?

### Part 3: Managing Groups

In this section, we will learn how to create, remove and modify groups in our Linux VM. You learned in ULI101 how to change permissions with the **chmod** command, but you didn't have admin privileges to **create groups** to allow directory and regular file sharing. Since you now have admin privileges with your VM, you can now create groups, and add users to this group to allow file-sharing among users.

**Perform the following steps:**

  1. Make certain that you are still in your **centos1** VM.
  2. Close all application windows, and switch user accounts (within your centos1 VM) by clicking on the top right-hand side of the screen (power icon), click **your regular username**, click **switch user**, and login as "**New Name**" (i.e. ops235_2).
  3. Open a shell terminal.
  4. Create a file called **information.txt** in home directory of that user.
  5. Issue the following command: 

```bash
ls -l information.txt
```

   - Who owns that file? What primary group does that file belong to?

  6. Issue the command `su -` to login to your root account.
  7. Issue the following command to create a group called **welcome**: 

```bash
groupadd welcome
```

  8. Issue the command: 

```bash
grep welcome /etc/group
```

   - This command confirms that the group **welcome** was created.

  9. Read the man page for the `usermod` and `groupmod` commands. Which command (and which option) will allow you to set the Group ID number (**GID**) when you create a new group? Which command (and options) allow you to both append and assign users to an existing group name?
  10. Issue two separate **usermod** commands to add both **ops235_1** and **ops235_2** to the newly-created **welcome** group.
  11. Verify that both ops235_1 and ops235_2 now belong to the **welcome** group.

![Group Add](/img/Group-add.png)

When a file is created it is assigned an owner and a default (primary) group. The Linux system administrator can not only change a file's ownership, but also change the default group that file belongs to. In addition, the sysadmin can also add other users to a supplementary group that they have created via the **usermod** command. This is useful in setting "same group" permissions via the **chmod** command.

### Practical Example

Management has sent you (the Linux systadmin) that a "new" employee has been hired and will be on on probation for 3 months. As the Linux system administrator, they want you to perform the following steps:

  1. Remain in your **centos1** VM for this section.
  2. Use the **useradd** command to create a user account called: **noobie** to expire in 3 months from this date as part of the security policy of this organization (issue man useradd to determine correct option to set expiry date).
  3. Set an appropriate password for this user account.
  4. Add this newly-created user to the newly-created **welcome** group.
  5. Examine `/etc/group` to verify that you made the correct operations.
  6. Use the **usermod** command to set the full name of the user account **noobie** to "**Really Green**". Examine the result of running that command in the `/etc/passwd` file. What has changed?

        - Unfortunately, you were later informed that this "**noobie**" employee was caught stealing from the company. They want you to perform the following operations:

  7. Remove this account, but keep "noobie's" home directory for police investigation purposes.
  8. Verify that you correctly issued the correct commands.

**Answer INVESTIGATION 1 observations / questions in your lab log book.**

## Investigation 2: Managing System Services and Run-levels

### Part 1: How do we Manage System Services?

At the beginning of this lab we mentioned that running unneeded **packages can be a security risk** due to the unnecessary increase in the complexity of your system. Similarly, it is also unnecessarily hazardous, and even more so, to leave unneeded services running. In this investigation, we will learn how to **control services, and turn off those services that we think are not necessary to help reduce security risks.**

Although there is a command called: **service** that may appear to manager services on your Linux system, it is considered **deprecated** (i.e. "obsolete"). It has been replaced by using the [systemctl](http://zenit.senecac.on.ca/wiki/index.php/Init_vs_systemd#systemd_Command_Usage) command.

**Perform the following steps:**

1. Remain in your **centos1** VM for this section.
2. To verify the status of your iptables service, issue the following command:

```bash
systemctl status iptables
```

3. Use the commands you used in Lab2 to **stop** and **disable** the iptables service.
4. Issue a command to verify you **disabled** and **stopped** the iptables service.

      - **Note**: There is a major difference between stopping a service and disabling a service: If a service is stopped but enabled, the service will start upon reboot. Therefore to prevent it being started upon boot-up, the service will need to be disabled as well!

5. Issue the commands to **start** and **enable** the iptables service, and **verify** that it is started and enabled.

      - **Note**: If you performed the commands correctly, the iptables service should be running, and will automatically run upon your Linux machine start-up.

![Manage Service](/img/Manage-service.png)

It is important for a Linux system administrator to be able to start/stop, enable/disable and check the status of services on their Linux server. Students will be commonly performing these operations in their OPS335 course when configuring and troubleshooting network services.

### Part 2: How do we Manage Runlevels?

Running Linux servers in graphical mode can make the server vulnerable to penetration (i.e. a potential break-in to the server from unauthorized intruders). The X-windows framework can be vulnerable to attacks when these servers are connected to the Internet. This is why when you install **server versions** of Linux, they work in text-based mode only. Desktop versions of Linux are then installed on workstations (working in graphical mode) that connect to the **Linux server** (for security reasons since those servers are closest to the router and the Internet).

The Linux sysadmin can also change the run-level (or state) of a graphical Linux server to run in text-based mode and run the graphical mode by issuing a command when graphic mode is required. The run-level term is now deprecated in Fedora, and will likely be deprecated in RHEL/CentOS at some point as well, but for now this is what the industry is using.

![Grub 2_1](/img/Grub2_1.png)

The purpose of **Linux servers** are to run network-based services (i.e. they "**serve**" the users that operating in that Linux/Unix system). It is common that these Linux servers are separated (for security purposes) and they are **run in Command-Line mode only**. Running these Linux/Unix servers in **Graphics Mode will make them more vulnerable to penetration from hackers, etc**. Therefore, it is common that the Linux servers are CLI only, but the Workstations that connect to them within the network are GUI. Therefore, it is important that a Linux/Unix system administrator understand to switch to these different "run-levels".

**Perform the following steps:**

1. Remain in your **centos1** VM for this section.
2. Issue the following Linux command:

```bash
runlevel
```

   - **Note**: You should see two separate characters (like N 5). The number on the right is the current run-level 5 (which is graphical mode). The number or character on the left if the previous run level (which is N which means there was no previous run level since it was a "new" install).

3. You can use the **init** command to change the current run-level. See a list of runlevels [here](https://www.centos.org/docs/5/html/5.2/Installation_Guide/s2-init-boot-shutdown-rl.html).
4. Issue the **init** command to change the current run-level in **centos1** to **3** by issuing the following command:

```bash
init 3
```

5. What did you notice?
6. Issue the following Linux command:

```bash
startx
```

   - What happens? Why would you want to make a graphical Linux system run in text-based mode?

7. Log-off your graphical system. You should return to your CLI shell prompt and change to root user. You should notice at this point that the command **startx** did not reset your run-level.
8. Reissue the **init** command to change the current run-level back to **5**

      - Did it work?

9. Issue the runlevel command to verify that the run-level is set to **5** (i.e. Graphical). You should notice a **3 followed by a 5**. That is to indicate that the **current** run-level is 5, but previously, it was set to 3.

**Answer INVESTIGATION 2 observations / questions in your lab log book.**

## Investigation 3: Creating Users Via Shell Scripts

**Before proceeding with Investigation 3, please review the [Bash Shell Scripting Tips here](/C-ExtraResources/bash-shell-scripting-tips.md)**

### Using getopts Function & case statement

We will now use shell scripting to help automate the task for a Linux adminstrator to create regular user accounts.

**Perform the following steps:**

1. You will be using your **c7host** machine for this section.
2. Open a shell terminal, and login as root.
3. Change to the **/root/bin** directory.
4. Download, study, and run the following shell script. Issue the command:

```bash
wget https://ict.senecacollege.ca/~ops235/labs/user-create.bash
```

5. Try to understand what these Bash Shell scripts do, and then run the script as root to create just one user called **test**. After running the shell script, view the contents of the **/home** directory to confirm.

Although the **zenity** command is a "user-friendly" way to run shell scripts, Linux administrators usually create shell scripts that resemble common Linux commands. In this lab, you will learn to create a shell script using the getopts function to make your shell script behave more like actual Linux commands (including the use of options). Refer to the notes section on the right-hand-side for reference about the **case** statement and the **getopts** function.

6. Open a Bash shell terminal and login as root.
7. Change to the **/root/bin** directory.
8. Use the wget command to download the input file called user-data.txt by issuing the command:

```bash
wget https://ict.senecacollege.ca/~ops235/labs/user-data.txt
```

9. View the contents on the user-data.txt file to confirm there are 3 fields (username, fullname, and e-mail address)which are separated by the colon (:) symbol.
10. Use a text editor (such as `vi` or `nano`) to create a Bash Shell script called: `createUsers.bash` in the /root/bin directory.
11. Enter the following text content into your text-editing session:

```bash
#!/bin/bash

# createUsers.bash
# Purpose: Generates a batch of user accounts (user data stored in a text file)
#
# USAGE: /root/createUsers.bash [-i {input-path}]
#
# Author: *** INSERT YOUR NAME ***
# Date: *** CURRENT DATE ***

# Make certain user is logged in as root
if [ $USER != "root" ]
then
   echo "Note: You are required to run this program as root."
   exit 1
fi

if [ "$#" -eq 0 ] # if no arguments after command
then
 echo "You must enter an argument" >&2
 echo "USAGE: $0 [-i {input-path}]" >&2
 exit 2
fi
```

12. Save your editing session, but remain in the text editor.
13. The code displayed below uses the getopt function set the input file pathname or check for invalid options or missing option text. Add the following code

```bash
outputFlag="n"
while getopts i: name
do
 case $name in
   i) inputFile=$OPTARG ;;
   :) echo "Error: You need text after options requiring text"
       exit 1 ;;
   \?) echo "Error: Incorrect option"
        exit 1 ;;
 esac
done
```

14. Save your editing session, but remain in the text editor.
15. The code displayed below uses logic to exit the script if the input file does not exist. Command substitution is used to store each line of the input file as a positional parameter. There is one subtle problem here: The full names of the users contain spaces which can create havoc when trying to set each line as a separate positional parameter. In this case the sed command is used to convert spaces to plus signs (+), which will be converted back later. Finally, a **for** loop is used to create each account (**useradd**) and mail the user their account information (**mail**). Add the following code:

```bash
if [ ! -f $inputFile ]
then
  echo "The file pathname \"$inputFile\" is empty or does not exist" >&2
  exit 2
fi

set $(sed 's/ /+/g' $inputFile) # temporarily convert spaces to + for storing lines as positional parameters

for x
do
    userPassWd=$(date | md5sum | cut -d" " -f1)
    useradd -m -c "$(echo $x | cut -d":" -f2 | sed 's/+/ /g')" -p $userPassWd $(echo $x | cut -d":" -f1)
    mail -s "Server Account Information" $(echo $x | cut -d":" -f3) <<+
    Here is your server account information:
    servername: myserver.senecac.on.ca
    username: $(echo $x | cut -d":" -f1)
    password: $userPassWd
    Regards,
    IT Department
+
done

echo -e "\n\nAccounts have been created\n\n"
exit 0
```

16. Save, set permissions, and then run that shell script for the input text file **user-data.txt**. Did it work? Try running the script without an argument - What did it do?
17. You have completed lab4. Proceed to Completing The Lab, and follow the instructions for "lab sign-off".

**Answer INVESTIGATION 3 observations / questions in your lab log book.**

## Lab 4 Sign-Off (Show Instructor)

**Exclusively for Summer 2020 term, submissions are accepted only online!**

Follow the submission instructions for lab 4 on Blackboard.

**Time for a new backup!:** If you have successfully completed this lab, make a new backup of your virtual machines as well as your host machine.

**Perform the Following Steps:**

1. Make certain that your **c7host**, **centos1** and **centos2** VMs are running.
2. Switch to your **c7host** VM.
3. Open a shell terminal, **su -** into root, and change to the **/root/bin** directory.
4. Issue the Linux command: 

```bash
wget https://ict.senecacollege.ca/~ops235/labs/lab4-check.bash
```

5. Give the **lab4-check.bash** file execute permissions (for the file owner).
6. Run the shell script and if any warnings, make fixes and re-run shell script until you receive "congratulations" message.
7. Arrange proof of the following on the screen:

- [x] **centos1** VM:

     + Demonstrate that this VM 's current run-level is set to **5**.

- [x] **c7host** machine

     + Run the **lab4-check.bash** script in front of your instructor (must have all  `OK`  messages)

- [x] **Lab4 log-book** filled out.

## Practice For Quizzes, Tests, Midterm & Final Exam

1. Describe all of the field in `/etc/passwd`
2. What is the command to create a user? What option to create a home directory for that user?
3. What is the command to change the full name of an already-created user?
4. What is the command to delete a user account? What option allows for the user's home directory to be removed as well?
5. What is the command to create a group? What is the command (or steps) to include a user in a newly-created group?
6. What is the purpose of `/etc/shadow`?
7. What is the purpose of `/etc/skel`?
8. What does the term run-level mean?
9. How to set the run-level of a Linux system to text-based only? How to set to graphical mode?
10. What is the command to view the status of running services?
11. What is the command to start a service (like httpd, or sshd)?
12. What is the command to stop a service (like httpd, or sshd)?
13. What is the difference between **starting** a service and **enabling** a service?
14. Can a service be stopped and started by issuing just one command?
15. What is the purpose of the **case** statement in shell scripting?
16. What is the purpose of the **getopts** function in shell scripting?
17. What type of shell script would be best to automatically create 1200 user accounts (which a list of use
