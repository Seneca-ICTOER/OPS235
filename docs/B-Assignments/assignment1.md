---
id: assignment1
title: Assignment 1
sidebar_position: 1
description: Assignment 1
---

# Assignment 1

**Weight**: 15% of the overall grade

**Due Date**: Ask your professor for exact date

## Create a new virtual machine

1. It doesn't matter whether you use the CentOS Live CD,Installation DVD, or Network Install method for this.
2. The virtual machine name and the hostname for the machine must be your Seneca user ID.
3. The regular user you create during installation must also be your Seneca user ID.
4. Make sure that LVM is used for your new system.

The rest of this assignment should be done after the installation is completed successfully.

## Package Management

Research the `rpm` and `yum` commands to:

1. Verify the integrity of a package using `rpm` to see if any of its files have been altered since installation. (you will be asked to demonstrate this when your assignment is marked, it doesn't matter which package you choose)
2. Demonstrate the install, run, and removal of any rpm package. This means during the demonstration you will show the download, install, and run of any rpm-based package, after doing so show the removal of that package proving that previously installed rpm package is no longer available after removal.
3. Add the [EPEL](https://fedoraproject.org/wiki/EPEL) repository to the yum configuration.

## Alternate Software Installation

Review the `yum group*` commands and use them to:

1. Find and install the Cinnamon desktop environment. Feel free to use the power of Google.
2. Do the rest of the assignment (including the assignment submission) while running Cinnamon.

[Lab 3](/A-Labs/lab3.md) contains practice in compiling source code. It is recommended to study these procedures for compiling and installing software from source code and use them to:

1. Download and extract the source code for ISO Master.
2. Compile and install it (you will need gtk2-devel installed).
3. Now run it and have a look at the Help/About dialog box. You will have to change the contents of that box.
4. Edit the file about.c in the source you use earlier, and change "An application for editing ISO9660 images based on the bkisofs access library and the GTK2 GUI toolkit." to "An application used by YOURNAME for OPS235 Assignment 1".
5. Compile and install the application again, exactly the same way you did the first time. Your change should be simple enough that complicated bugs are unlikely.

## Install a second Linux distribution as a Virtual Machine

- Create another virtual machine.
- The virtual machine name and the hostname for the machine must be your learn user ID followed by **-mint**. For example asmith15-mint
- Install Linux Mint in the new virtual machine.

## Submission

**Due date:** When you are ready for your assignment #1 to be marked, call over your instructor. Students that do not have ALL required information for instructor to mark their assignment #1 will automatically lose 20% of their assignment mark (deducted from total assignment mark calculation). In that case you may show your submission in the second lab that week instead. Assignments submitted after that will receive a grade of 0, but must still be completed satisfactorily in order to pass the course.

**Ready to show:** open terminal windows having run the commands necessary to show all the required items in the rubric below. It is ok to switch windows and virtual machines while submitting your assignment, but you should not need to run any commands.

If you have questions about the assignment - please wait until everyone's assignment is submitted and ask your question after that.

## Rubric

| Task	| Maximum mark	| Actual mark |
| --- | --- | --- |
| New CentOS VM installed (Seneca ID)	| 1	|  |
| Correct hostname (Seneca ID)	| 1	|  |
| Using LVM (run lsblk to check)	| 1	|  |
| Add, run, and removal of a rpm package	| 1	|  |
| Adding EPEL to list of available repositories	| 1	|  |
| RPM integrity verification command	| 2	|  |
| Command to display repository information	| 2	|  |
| Using Cinnamon	| 2	|  |
| Modified ISO Master about dialog box	| 2	|  |
| Other linux installed and running	| 2	|  |
| Everything ready to show when professor comes by to look	| 2	|  |
| **Total**	| **17**	|  |
