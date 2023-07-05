---
id: assignment2
title: Assignment 2
sidebar_position: 2
description: Assignment 2
---

# Assignment 2

## Introduction and Purpose

**Weight**: 15% of the overall grade

**Due Date**: See blackboard

**Submission**: You will be submitting your completed work through a series of screenshots on Blackboard. (See below.)

In this assignment, you will demonstrate the skills you have learned to this point by configuring two services: a **database server** and a **web server**. You will install and use a database-backed web application, **Wordpress**, to show that these services have been installed properly. You will also configure your **firewall** to further enhance the security of your computer system.

**NOTE: Do this assignment inside the centos3 virtual machine.**

**It is YOUR responsibility to backup your centos3 VM for this assignment!**

You are required to frequently backup your VM prior to exiting a work session during this assignment. Your instructor will NOT accept the fact that your hard disk crashed and lost all of your work. If you properly backed up your VM images and xml configuration files to a USB, then you can purchase a new hard-disk or wipe and recreate your hard disk and restore your VMs.

## Installing Packages

Install these packages using _yum_

- **httpd** - this is the Apache web server software.
- **php** - this is the PHP server software, which allows Apache to run more complex websites.
- **php-mysql** - this is a PHP extension that allows PHP to use a MySQL server.

Install the **mysql-server** (MySQL database server) package

**NOTE**: This package may not be in the main repository. There a couple of options:

- **Preferred method**: Use an alternative package (for example: **mariadb** and **mariadb-server**)
- Download a "zipped tar-ball" from a website (google-search), decompress, and compile

## Configuring Apache

1. Start the httpd service using **systemctl**.
2. Ensure that the httpd service starts automatically during boot.
3. Confirm that you can connect to your web server using a web browser -- both from centos3 (you can test using **lynx**) as well as from the host. You should see the Apache Test Page.
4. If you can't connect to it from outside the machine - perhaps your firewall is blocking access to the web server.

## Configuring MySQL

1. Start the MySQL service (mysqld or mariadb) using **systemctl**.
2. Ensure that the mysqld/mariadb service starts automatically during boot.
3. You may get messages after starting the MySQL service for the first time. Do not ignore these messages, it will tell you how to set a password and take other basic steps to secure the the MySQL server. Follow those instructions to set a password, recording the detail of what you do for later use.

      - If you do not see any messages, research how you can secure the MySQL installation and set the MySQL-root password.
      - Read those messages carefully, you are setting up a production MySQL server and there shouldn't be any "test" databases or anonymous users or users without a password.

4. Set your MySQL root password to your Seneca e-mail username (without the _\@myseneca.ca_ part).
5. This following part is challenging so take your time and read the instructions to make sure you do it properly, we have to set up a dedicated user and database for wordpress:

      1. **NOTE: If you decide to download the wordpress package during this section, please use the 5.0.x version here (use wget)**: https://wordpress.org/wordpress-5.0.7.tar.gz
      2. Start by looking at https://wordpress.org/support/article/creating-database-for-wordpress/#using-the-mysql-client where you will find instructions for the setup.
      3. You will need to run those commands in a centos3 terminal.
      4. Your adminusername is root
      5. Your databasename is myblog
      6. Your wordpressusername is your Seneca username
      7. The password should also be your Seneca username
      8. Your hostname is localhost

## Installing and Configuring Wordpress

Wordpress (like most web applications) is not available in the Fedora repositories, it must be downloaded and installed manually.

1. **Download the latest 5.0.x version of wordpress to your centos3 VM here (use wget)**: https://wordpress.org/wordpress-5.0.7.tar.gz
2. Extract it into **/var/www/html**
3. Now we need to allow Apache to modify the wordpress installation. To do this use **chown** and **chgrp** with **-R** option to make the owner and group of every file and directory inside wordpress "apache".
4. Check your work so far by pointing your web browser to http://centos3/wordpress/ where you will get an error starting with "There doesn't seem to be a wp-config.php file"
5. Copy the wp-config-sample.php file to wp-config.php and edit the new file:

      - Change the DB_NAME, DB_USER, DB_PASSWORD to the appropriate values. **(Do not use the root account for your database connection! Marks will be deducted.)**

6. Now go back to [http://centos3/wordpress/](http://centos3/wordpress/) - you should see a Wordpress Welcome/Setup page.

      - Set the title to Your Name's Blog. For example for me it would be "OPS235 Professor's Blog"
      - Set the password to your learn ID.
      - Set the email to your Seneca email address.
      - Click "Install Wordpress", you should see a "Success!" message.

## Write-up

Write a blog post on your new blog explaining:

- What is Apache, PHP, MySQL, and Wordpress.
- What problems (minor and major) you ran into during the installation and how you solved them.

Write a second post on your blog including for example:

- Are you ready for the exam or not.
- List the material you are strong on.
- List the material you are worried about.
- List any questions or topics you would like me to address during exam review.

**Make your posts look professional. That means use good english, headings, bullet or numbered lists, etc.**

## Submitting Your Assignment

**Due date**: Check with your professor for the due dates on this assignment and how they choose to mark it. Assignments submitted after the due date will receive a grade of 0, but must still be completed satisfactorily in order to pass the course.

## Online Submission Requirements

Open one or more terminals in c7host, SSH to centos3 from those terminals, and screenshot the following:

- **asg2-01-rpms.png**: List of additional RPMs installed for the assignment
- **asg2-02-apache.png**: Status of the _httpd_ service
- **asg2-03-mysql1.png**: Status of the _mysql_ service
- **asg2-04-mysql2.png**: MySQL output of the chained command: `show databases; use mysql; select User,Password from user; use myblog; show tables;`
- **asg2-05-wordpress.png**: Output of command: `ls -la /var/www/html/wordpress/`
- **asg2-06-wpconfig.png**: Output of command: `head -30 /var/www/html/wordpress/wp-config.php`
- **asg2-07-firefox.png**: Open a Firefox window to: [http://centos3/wordpress/](http://centos3/wordpress/)
- **asg2-08-iptables.png**: Output of command: `iptables -L -vn --line-numbers`
- **asg2-09-blogpost1.png**: Your first blog post in Firefox
- **asg2-10-blogpost2.png**: Your second blog post in Firefox

Create a tarball named **asg2.tar.gz** containing all the images above and submit it on Blackboard.

## Rubric

| Task	| Maximum mark	| Actual mark |
| --- | --- | --- |
| Correct packages installed	| 1	|  |
| Apache set up and running	| 2	|  |
| MySQL set up correctly	| 3	|  |
| Wordpress extracted correctly	| 1	|  |
| Wordpress set up correctly	| 2	|  |
| Wordpress showing in Firefox	| 1	|  |
| Blog accessed using local hostname resolution	| 2	|  |
| iptables rules configured correctly	| 2	|  |
| First blog post	| 1	|  |
| Second blog post	| 1	|  |
| Submitted correctly	| 4	|  |
| **Total**	| **20**	|  |
