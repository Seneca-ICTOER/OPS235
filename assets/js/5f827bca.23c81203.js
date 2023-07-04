"use strict";(self.webpackChunkOPS235=self.webpackChunkOPS235||[]).push([[366],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9328:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905));const o={id:"lab8",title:"Lab 8",sidebar_position:8,description:"Lab 8"},i="Lab 8: Setup and Configure a DHCP Server",s={unversionedId:"A-Labs/lab8",id:"A-Labs/lab8",title:"Lab 8",description:"Lab 8",source:"@site/docs/A-Labs/lab8.md",sourceDirName:"A-Labs",slug:"/A-Labs/lab8",permalink:"/OPS235/A-Labs/lab8",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS235/tree/main/docs/A-Labs/lab8.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"lab8",title:"Lab 8",sidebar_position:8,description:"Lab 8"},sidebar:"courseNotesSidebar",previous:{title:"Lab 7",permalink:"/OPS235/A-Labs/lab7"},next:{title:"Assignment 1",permalink:"/OPS235/B-Assignments/assignment1"}},l={},p=[{value:"Lab Preparation",id:"lab-preparation",level:2},{value:"Overview",id:"overview",level:3},{value:"Minimum Required Materials",id:"minimum-required-materials",level:3},{value:"Linux Command Reference",id:"linux-command-reference",level:3},{value:"Investigation 1: Install And Configure A DHCP Server",id:"investigation-1-install-and-configure-a-dhcp-server",level:2},{value:"Part 1: Installation of a DHCP",id:"part-1-installation-of-a-dhcp",level:3},{value:"Part 2: Configuring the DHCP Server",id:"part-2-configuring-the-dhcp-server",level:3},{value:"Part 3: Configuring DHCP Server for Static IP Addresses",id:"part-3-configuring-dhcp-server-for-static-ip-addresses",level:3},{value:"Part 4: How do I test my dhcpd service on my virtual network?",id:"part-4-how-do-i-test-my-dhcpd-service-on-my-virtual-network",level:3},{value:"Investigation 2: Obtaining Lease and Lease Permanent IP Address Information",id:"investigation-2-obtaining-lease-and-lease-permanent-ip-address-information",level:2},{value:"Part 1: Obtaining Leased Address Infomation",id:"part-1-obtaining-leased-address-infomation",level:3},{value:"Part 2: Configuring DHCP server to Continually Lease Same IP Address",id:"part-2-configuring-dhcp-server-to-continually-lease-same-ip-address",level:3},{value:"Lab 8 Sign-Off (Show Instructor)",id:"lab-8-sign-off-show-instructor",level:2},{value:"Practice For Quizzes, Tests, Midterm, and Final Exam",id:"practice-for-quizzes-tests-midterm-and-final-exam",level:2}],m={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lab-8-setup-and-configure-a-dhcp-server"},"Lab 8: Setup and Configure a DHCP Server"),(0,r.kt)("h2",{id:"lab-preparation"},"Lab Preparation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DO NOT START THIS LAB BEFORE SUCCESSFULLY SUBMITTING LABS 1-7: This lab will change some system values that make previous lab checks fail. For best results, confirm with your professor before proceeding.")),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"There are different ways in which computers can be networked together. Some computer networks (such as computer labs) configure their workstations for ",(0,r.kt)("strong",{parentName:"p"},"static IP addresses for security and to provide other interesting features such as WOL")," (Wake Up on Lan) which allows a signal from a computer system to remotely start all or specified workstations within the lab."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DHCP Pic",src:a(343).Z,width:"585",height:"469"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hot-spots (such as cafes or airport lounges) offer the ability for users to connect to the Internet (via")," DHCP) f",(0,r.kt)("strong",{parentName:"p"},"rom their mobile devices (notebooks, netbooks, tablets, or smart phones). Finally, there are")," hybrid ",(0,r.kt)("strong",{parentName:"p"},"solutions that may offer both fixed IP address (computer workstations) and allow for wireless connections (via DHCP) to a mobile devices (like at your Seneca computer labs).")),(0,r.kt)("p",null,"In lab6, you learned to connect your VMs to a VPN using a fixed IP Address. In this final lab, you will learn to set-up a ",(0,r.kt)("strong",{parentName:"p"},"DHCP server")," to automatically assign IP Addresses upon connection requests."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Main Objectives")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To install, configure, and test Internet Systems Consortium's (",(0,r.kt)("strong",{parentName:"li"},"ISC"),"'s) DHCP Server."),(0,r.kt)("li",{parentName:"ul"},"To obtain log information from DHCP server including lease address information."),(0,r.kt)("li",{parentName:"ul"},"To lease the same IP address every-time from VM boot-up (instead of having DHCP server randomly assign IP address).")),(0,r.kt)("h3",{id:"minimum-required-materials"},"Minimum Required Materials"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Solid State Drive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"USB key")," (for backups)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lab8 Log Book"))),(0,r.kt)("h3",{id:"linux-command-reference"},"Linux Command Reference"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Networking Utilities")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://linux.die.net/man/8/dhcpd"},"dhcpd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://man7.org/linux/man-pages/man8/ifconfig.8.html"},"ifconfig"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Managing Services")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.dsm.fordham.edu/cgi-bin/man-cgi.pl?topic=systemctl"},"systemctl"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Additional Utilities")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://man7.org/linux/man-pages/man1/tail.1.html"},"tail")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://linux.die.net/man/8/chkconfig"},"chkconfig"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configuration Files")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.freebsd.org/cgi/man.cgi?query=dhcpd.conf&sektion=5&apropos=0&manpath=FreeBSD+9.0-RELEASE+and+Ports"},"dhcpd.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://linux.die.net/man/5/dhcp-options"},"dhcpd-options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://linux.die.net/man/5/dhcpd.leases"},"dhcpd.leases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.centos.org/docs/5/html/Deployment_Guide-en-US/s1-dhcp-configuring-server.html"},"Configuring a DHCP Server"))),(0,r.kt)("h2",{id:"investigation-1-install-and-configure-a-dhcp-server"},"Investigation 1: Install And Configure A DHCP Server"),(0,r.kt)("p",null,"This lab will demonstrate setting up a DHCP server. The term ",(0,r.kt)("strong",{parentName:"p"},"DHCP")," stands for ",(0,r.kt)("strong",{parentName:"p"},"Dynamic Host Configuration Protocol"),". DHCP allows computers (eg. workstations, notebooks, smart-phones) to be automatically configured so that they can communicate over a network. This automatic configuration has gained popularity over the years, especially as the need for detecting and configuring portable computer devices increases. DHCP configuration allows for various setups including: ",(0,r.kt)("strong",{parentName:"p"},"Dynamic"),", ",(0,r.kt)("strong",{parentName:"p"},"Automatic"),", and ",(0,r.kt)("strong",{parentName:"p"},"Static")," allocation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DORA",src:a(7273).Z,width:"754",height:"391"})),(0,r.kt)("p",null,"The term ",(0,r.kt)("strong",{parentName:"p"},"DORA")," best describes how DHCP Works:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Term"),(0,r.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"D"),"iscovery"),(0,r.kt)("td",{parentName:"tr",align:null},"The client broadcasts a ",(0,r.kt)("strong",{parentName:"td"},"message")," (IP lease request) on a sub-network to ",(0,r.kt)("strong",{parentName:"td"},"discover")," available DHCP servers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"O"),"ffer"),(0,r.kt)("td",{parentName:"tr",align:null},"The DHCP server receives the request from the client, ",(0,r.kt)("strong",{parentName:"td"},"reserves an IP ADDRESS")," for the client and sends a ",(0,r.kt)("strong",{parentName:"td"},"DHCPOFFER")," to the client.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"R"),"equest"),(0,r.kt)("td",{parentName:"tr",align:null},"After receiving a ",(0,r.kt)("strong",{parentName:"td"},"DHCPOFFER"),", the DHCP client broadcasts a message ",(0,r.kt)("strong",{parentName:"td"},"request for acceptance")," (",(0,r.kt)("strong",{parentName:"td"},"DHCPREQUEST"),") to all DHCP servers and, in doing so, the DHCP client notifies all DHCP servers which DHCP server this DHCP client is requesting acceptance from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"A"),"cknowledgement"),(0,r.kt)("td",{parentName:"tr",align:null},"The DHCP server identified in the ",(0,r.kt)("strong",{parentName:"td"},"DHCPREQUEST")," sends a ",(0,r.kt)("strong",{parentName:"td"},"message of acceptance to the client")," and the client then receives from that DHCP server a ",(0,r.kt)("strong",{parentName:"td"},"packet of information")," containing the lease duration and other configuration information.")))),(0,r.kt)("h3",{id:"part-1-installation-of-a-dhcp"},"Part 1: Installation of a DHCP"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"VM Backups and Yum Updates")),(0,r.kt)("p",null,"Before proceeding with this lab make certain that you have backed-up from lab7, and then perform a ",(0,r.kt)("strong",{parentName:"p"},"yum update")," on all machines (including your VMs)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Perform the following steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Launch your c7host machine and your centos3 VM.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Switch to your ",(0,r.kt)("strong",{parentName:"p"},"centos3")," VM."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The version of DHCP server that comes with CentOS is maintained and distributed by the ",(0,r.kt)("strong",{parentName:"li"},"Internet Software Consortium")," (",(0,r.kt)("a",{parentName:"li",href:"https://www.isc.org/"},"https://www.isc.org/"),"). The source package that you can download from ISC includes not only the DHCP server, but also a DHCP client and a DHCP relay agent. CentOS separates it into two RPM packages: the DHCP client package and the DHCP server package. The DHCP client package is installed by default by the workstation installation."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To check that you have ",(0,r.kt)("strong",{parentName:"p"},"dhcp")," installed, enter the command:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rpm -qa dhcp\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"If there are no files displayed, then issue the following command to install the dhcp server package:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y dhcp\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Again, enter the command to list all the files installed from the DHCP server package by issuing the command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rpm -qla dhcp\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Which file appears to be a sample (example) ",(0,r.kt)("strong",{parentName:"li"},"configuration file for dhcpd.conf"),"?"),(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("strong",{parentName:"li"},"dhcpd.conf.example")," file to the ",(0,r.kt)("strong",{parentName:"li"},"/etc/dhcp")," directory making sure it is named: ",(0,r.kt)("strong",{parentName:"li"},"/etc/dhcp/dhcpd.conf"))),(0,r.kt)("h3",{id:"part-2-configuring-the-dhcp-server"},"Part 2: Configuring the DHCP Server"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Perform the following steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remain in your ",(0,r.kt)("strong",{parentName:"p"},"centos3")," VM for this section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the following link to access the online manual page for the following DHCP items to gain an understanding:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://linux.die.net/man/8/dhcpd"},"dhcpd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.freebsd.org/cgi/man.cgi?query=dhcpd.conf&sektion=5&apropos=0&manpath=FreeBSD+9.0-RELEASE+and+Ports"},"dhcpd.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://linux.die.net/man/5/dhcp-options"},"dhcpd-options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://linux.die.net/man/5/dhcpd.leases"},"dhcpd.leases")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Study the sample ",(0,r.kt)("strong",{parentName:"p"},"dhcpd.conf")," file to see examples of how these options are used.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the contents of ",(0,r.kt)("strong",{parentName:"p"},"/etc/dhcp/dhcpd.conf")," file (see the picture) and examine the top section of the file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Be advised: "',(0,r.kt)("strong",{parentName:"p"},"option"),' definitions common to all supported networks". Change the existing global options with the newer values shown below, if the ',(0,r.kt)("strong",{parentName:"p"},"dhcpd.conf")," file is empty, add them manually:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'option domain-name "ops235.org";\noption domain-name-servers 192.168.235.1;\ndefault-lease-time 1200;\nmax-lease-time 3600;\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note"),": Any values for time are stated in seconds.")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"View your editing sessions for typos (check for missing semicolons), then save and exit your editing session.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DHCP Config",src:a(7161).Z,width:"789",height:"510"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"dhcpd.config")," file allows the Linux system administrator to customize the DCHP server. Generally in this file are ",(0,r.kt)("strong",{parentName:"p"},"global settings")," (options that apply throughout entire network) and ",(0,r.kt)("strong",{parentName:"p"},"subnet declarations")," (options that apply only to that subnet). Whenever changes are made to this file, the ",(0,r.kt)("strong",{parentName:"p"},"DCHP service needs to be restarted")," to allow new settings to take effect."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: Any errors in this file (such as typos or missing semi-colons) can cause the DHCP server not to restart!")),(0,r.kt)("h3",{id:"part-3-configuring-dhcp-server-for-static-ip-addresses"},"Part 3: Configuring DHCP Server for Static IP Addresses"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Recall Secure SSH Connection Method from Lab7")),(0,r.kt)("p",null,"Do not forget that you made ssh more secure in the previous lab. Therefore, you will need to use the same command in lab7 to securely connect to your VM."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Perform the following steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remain in your ",(0,r.kt)("strong",{parentName:"p"},"centos3")," VM for this section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("strong",{parentName:"p"},"/etc/dhcp/dhcpd.conf")," for a second time.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View this file for existing subnet declarations. Note the syntax and the directive for ",(0,r.kt)("strong",{parentName:"p"},"range")," and the option for ",(0,r.kt)("strong",{parentName:"p"},"routers")," (gateway).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, add a new subnet declaration for your virtual network:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The network address is: ",(0,r.kt)("strong",{parentName:"li"},"192.168.235.0/255.255.255.0")),(0,r.kt)("li",{parentName:"ul"},"range of host addresses should be from: ",(0,r.kt)("strong",{parentName:"li"},"51 to 60")),(0,r.kt)("li",{parentName:"ul"},"default gateway (routers) for the virtual network is: ",(0,r.kt)("strong",{parentName:"li"},"192.168.235.1")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your editing session, and exit the text editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open another terminal window (",(0,r.kt)("strong",{parentName:"p"},"Tip"),": ",(0,r.kt)("strong",{parentName:"p"},"ssh")," into your ",(0,r.kt)("strong",{parentName:"p"},"centos3")," VM from your ",(0,r.kt)("strong",{parentName:"p"},"c7host")," as ",(0,r.kt)("strong",{parentName:"p"},"root"),") and issue the following command:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tail -f /var/log/messages\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(This will show you the last lines of ",(0,r.kt)("strong",{parentName:"li"},"/var/log/messages")," continue to display new lines as they are added to the log for confirmation and troubleshooting.)")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"In your ",(0,r.kt)("strong",{parentName:"li"},"centos3")," terminal, attempt to start the ",(0,r.kt)("strong",{parentName:"li"},"dhcpd")," service."),(0,r.kt)("li",{parentName:"ol"},"You should see new lines being added to the messages file."),(0,r.kt)("li",{parentName:"ol"},"If the ",(0,r.kt)("strong",{parentName:"li"},"dhcpd")," service fails to start any error messages will be logged in the messages file. Read the errors and attempt to fix your configuration file."),(0,r.kt)("li",{parentName:"ol"},"If the ",(0,r.kt)("strong",{parentName:"li"},"dhcpd")," service starts successfully you should see success messages in the log."),(0,r.kt)("li",{parentName:"ol"},"If your ",(0,r.kt)("strong",{parentName:"li"},"dhcpd")," service starts successfully, try to generate errors by editing the configuration file and introduce an error by removing a semicolon or closing curly bracket."),(0,r.kt)("li",{parentName:"ol"},"Restart your ",(0,r.kt)("strong",{parentName:"li"},"dhcpd")," service and observe the error messages generated. This is good practice to learn how to trouble-shoot and solve dhcpd errors."),(0,r.kt)("li",{parentName:"ol"},"Make certain that you have corrected those errors, and that your dhcpd service works properly."),(0,r.kt)("li",{parentName:"ol"},"Once the dhcpd service has is running, use the ",(0,r.kt)("strong",{parentName:"li"},"systemctl")," command to see if the dhcpd service is enabled (Hint: use a pipeline command using ",(0,r.kt)("strong",{parentName:"li"},"grep")," to detect the pattern: ",(0,r.kt)("strong",{parentName:"li"},"enabled"),"). If it is not enabled, use the ",(0,r.kt)("strong",{parentName:"li"},"systemctl")," command to enable the dhcpd service so it started automatically upon boot-up.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Troubleshooting Tip:")),(0,r.kt)("p",null,"Troubleshooting produces the best results when you are methodical in your approach. Try to fix the first error mentioned before fixing subsequent errors. Often the first error may cause multiple error messages as the configuration file is parsed. When you think you have fixed the first error try to start your service and if it fails check the log again. Fix one error at a time."),(0,r.kt)("h3",{id:"part-4-how-do-i-test-my-dhcpd-service-on-my-virtual-network"},"Part 4: How do I test my dhcpd service on my virtual network?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Identifying DHCP Lease Transaction Information")),(0,r.kt)("p",null,"These messages record the DHCP lease transaction that consists of 4 broadcast packets, DISCOVER, OFFER, REQUEST and ACKNOWLEDGE. Try researching on the internet how this transaction differs from a DHCP lease renewal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Perform the following steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use your ",(0,r.kt)("strong",{parentName:"li"},"centos1")," and ",(0,r.kt)("strong",{parentName:"li"},"centos3")," VMs for this section."),(0,r.kt)("li",{parentName:"ol"},"On your ",(0,r.kt)("strong",{parentName:"li"},"centos3")," terminal window (via ssh from your c7hsot machine) make sure that the command below is running")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tail -f /var/log/messages\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On your ",(0,r.kt)("strong",{parentName:"p"},"centos1")," VM, Graphically change the configuration of ",(0,r.kt)("strong",{parentName:"p"},"eth0")," (or your interface name) to receive dynamic address configuration (i.e. via graphical application, for IVP4 tab, change ",(0,r.kt)("em",{parentName:"p"},"Address")," from ",(0,r.kt)("strong",{parentName:"p"},"Manual")," to ",(0,r.kt)("strong",{parentName:"p"},"DHCP"),", and ",(0,r.kt)("strong",{parentName:"p"},"Apply")," settings) (",(0,r.kt)("a",{parentName:"p",href:"/OPS235/A-Labs/lab6#part-2-configuring-network-for-centos1-vm"},"Refer to Lab6, Investigation1, Part2"),")."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: if you are configuring via command line, make certain to restart the network for centos1."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logout and restart your ",(0,r.kt)("strong",{parentName:"p"},"centos1")," VM.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Observe the messages that get logged from the tail -f command as your centos1 VM starts. You should see output similar to the following:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Jun 27 22:09:49 centos3 dhcpd: DHCPDISCOVER from 52:54:00:7c:85:13 via eth0\nJun 27 22:09:50 centos3 dhcpd: DHCPOFFER on 192.168.235.51 to 52:54:00:7c:85:13 (centos1) via eth0\nJun 27 22:09:50 centos3 dhcpd: DHCPREQUEST for 192.168.235.51 (192.168.235.13) from 52:54:00:7c:85:13 (centos1) via eth0\nJun 27 22:09:50 centos3 dhcpd: DHCPACK on 192.168.235.51 to 52:54:00:7c:85:13 (centos1) via eth0\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"On your ",(0,r.kt)("strong",{parentName:"li"},"centos1")," VM, open a terminal, andconfirm the IP address assignment using")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ifconfig eth0\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Has the IP Address changed? If so, how has the IP Address been assigned according to the ",(0,r.kt)("strong",{parentName:"li"},"dhcpd.conf")," file settings?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Answer INVESTIGATION 1 observations / questions in your lab log book.")),(0,r.kt)("h2",{id:"investigation-2-obtaining-lease-and-lease-permanent-ip-address-information"},"Investigation 2: Obtaining Lease and Lease Permanent IP Address Information"),(0,r.kt)("h3",{id:"part-1-obtaining-leased-address-infomation"},"Part 1: Obtaining Leased Address Infomation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose of dhcpd.leases File")),(0,r.kt)("p",null,"dhcpd records address leases in this file. If the service is restarted it reads in the file to know which addresses are currently leased and for how long."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Perform the following steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remain in your ",(0,r.kt)("strong",{parentName:"li"},"centos1")," and ",(0,r.kt)("strong",{parentName:"li"},"centos3")," VMs for this section."),(0,r.kt)("li",{parentName:"ol"},"If your ",(0,r.kt)("strong",{parentName:"li"},"centos3")," DHCP server successfully issued the proper IP address configuration values to ",(0,r.kt)("strong",{parentName:"li"},"centos1"),", check the file called: ",(0,r.kt)("strong",{parentName:"li"},"/var/lib/dhcpd/dhcpd.leases")," in your ",(0,r.kt)("strong",{parentName:"li"},"centos3")," VM. You should get the similar contents:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lease 192.168.235.51 {\n   starts 1 2016/06/28 01:07:00;\n   ends 1 2016/06/28 01:27:00;\n   cltt 1 2016/06/28 01:07:00;\n   binding state active;\n   next binding state free;\n   rewind binding state free;\n   hardware ethernet 52:54:00:ba:75:a8;\n}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the client ",(0,r.kt)("strong",{parentName:"p"},"centos1")," check the contents of the ",(0,r.kt)("strong",{parentName:"p"},"/var/lib/dhclient")," directory. The files in this directory is where the dhclient stores its record of leases."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NOTE"),": If there are no files, then in a shell as ",(0,r.kt)("strong",{parentName:"li"},"root")," in your ",(0,r.kt)("strong",{parentName:"li"},"centos1")," VM issue the command: ",(0,r.kt)("inlineCode",{parentName:"li"},"dhclient eth0")),(0,r.kt)("li",{parentName:"ul"},"Then check to see if there is file containing lease information in that directory. You should get the similar contents:")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'lease {\n   interface "eth0";\n   fixed-address 192.168.235.52;\n   option subnet-mask 255.255.255.0;\n   option routers 192.168.235.1;\n   option dhcp-lease-time 1200;\n   option dhcp-message-type 5;\n   option domain-name-servers 192.168.235.1;\n   option dhcp-server-identifier 192.168.235.13;\n   option domain-name "ops235.org";\n   renew 2 2016/06/28 02:23:06;\n   rebind 2 2016/06/28 02:31:52;\n   expire 2 2016/06/28 02:34:22;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Answer Part 1 observations / questions in your lab log book.")),(0,r.kt)("h3",{id:"part-2-configuring-dhcp-server-to-continually-lease-same-ip-address"},"Part 2: Configuring DHCP server to Continually Lease Same IP Address"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reserving IP Addresses with DHCP")),(0,r.kt)("p",null,"Even though DHCP gives out IP address dynamically, it also has the ability to reserve an IP address for a certain computer. In this sense it's almost as if the client computer has a static IP even though it uses DHCP to get it. This is useful if you want to be able to put entries in your /etc/hosts file and not have to worry about the entry becoming invalid over time. In Linux we refer to this as supplying a fixed address to a host. Microsoft calls it a reservation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Perform the following steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remain in your ",(0,r.kt)("strong",{parentName:"p"},"centos1")," and ",(0,r.kt)("strong",{parentName:"p"},"cento3")," VMs for this section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make certain that you are located in your ",(0,r.kt)("strong",{parentName:"p"},"centos3")," virtual machine.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the dchpd.conf file and make the following changes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("strong",{parentName:"li"},"host")," declaration with the name: ",(0,r.kt)("strong",{parentName:"li"},"centos1"),' (tip: search for the key-word "',(0,r.kt)("strong",{parentName:"li"},"host"),'" in the text editor to see an example, if it is empty, do a little research on the Internet).'),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("strong",{parentName:"li"},"hardware ethernet")," option for the MAC address of the eth0 on your ",(0,r.kt)("strong",{parentName:"li"},"centos1")," VM."),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("strong",{parentName:"li"},"fixed-address")," option to the ip address: ",(0,r.kt)("strong",{parentName:"li"},"192.168.235.42")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note"),": When supplying fixed-address it is important that the address assigned is exclusive of any ranges that have been declared. Otherwise it may be possible for 2 different hosts to receive the same address."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the dhcpd service and test the address assignment by releasing your current address on ",(0,r.kt)("strong",{parentName:"p"},"centos1")," and then requesting a new address. Use the following commands on ",(0,r.kt)("strong",{parentName:"p"},"centos1"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ifdown eth0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ifup eth0\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Confirm that you received the fixed address you were supposed to.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Answer INVESTIGATION 2 observations / questions in your lab log book.")),(0,r.kt)("h2",{id:"lab-8-sign-off-show-instructor"},"Lab 8 Sign-Off (Show Instructor)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exclusively for Summer 2020 term, submissions are accepted only online!")),(0,r.kt)("p",null,"Follow the submission instructions for lab 8 on Blackboard."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time for a new backup!")),(0,r.kt)("p",null,"If you have successfully completed this lab, make a new backup of your virtual machines as well as your host machine."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Perform the Following Steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make certain ALL of your ",(0,r.kt)("strong",{parentName:"li"},"centos1")," and ",(0,r.kt)("strong",{parentName:"li"},"centos3")," VMs are running."),(0,r.kt)("li",{parentName:"ol"},"Switch to your ",(0,r.kt)("strong",{parentName:"li"},"c7host")," VM and ",(0,r.kt)("strong",{parentName:"li"},"su -")," into root."),(0,r.kt)("li",{parentName:"ol"},"Change to the ",(0,r.kt)("strong",{parentName:"li"},"/root/bin")," directory."),(0,r.kt)("li",{parentName:"ol"},"Issue the Linux command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://ict.senecacollege.ca/~ops235/labs/lab8-check.bash\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Give the ",(0,r.kt)("strong",{parentName:"li"},"lab8-check.bash")," file execute permissions (for the file owner)."),(0,r.kt)("li",{parentName:"ol"},'Run the shell script and if any warnings, make fixes and re-run shell script until you receive "congratulations" message.'),(0,r.kt)("li",{parentName:"ol"},"Arrange proof of the following on the screen:")),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("strong",{parentName:"p"},"centos1")," VM:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ip address show")," shows IP address ",(0,r.kt)("strong",{parentName:"li"},"192.168.235.42")),(0,r.kt)("li",{parentName:"ul"},"DHCP client lease file"))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("strong",{parentName:"p"},"centos3")," VM:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DHCP server log file showing a lease occuring"),(0,r.kt)("li",{parentName:"ul"},"DHCP server configuration file showing subnet and host declaration"),(0,r.kt)("li",{parentName:"ul"},"DHCP server lease file"))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("strong",{parentName:"p"},"Lab8")," log-book filled out."))),(0,r.kt)("h2",{id:"practice-for-quizzes-tests-midterm-and-final-exam"},"Practice For Quizzes, Tests, Midterm, and Final Exam"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What protocol and port does dhcp use?"),(0,r.kt)("li",{parentName:"ol"},"What file is used to configure dhcpd?"),(0,r.kt)("li",{parentName:"ol"},"Can a dhcp server also be a dhcp client?"),(0,r.kt)("li",{parentName:"ol"},"What is the difference between max-lease-time and default-lease-time?"),(0,r.kt)("li",{parentName:"ol"},"What unit of measurement does default-lease-time require?"),(0,r.kt)("li",{parentName:"ol"},"What dhcp option is used for configuring a default gateway?"),(0,r.kt)("li",{parentName:"ol"},"What is the parameter range in the DHCP server configuration file used for?"),(0,r.kt)("li",{parentName:"ol"},"What is the purpose of a dhcp relay agent?"),(0,r.kt)("li",{parentName:"ol"},"Why might a dhcp relay agent be required?")))}c.isMDXComponent=!0},7161:function(e,t,a){t.Z=a.p+"assets/images/Dhcp-config-bcc68e5ad6191311657e6a0c2be814e5.png"},343:function(e,t,a){t.Z=a.p+"assets/images/Dhcp-pic-a50a5e1b51324c506011084bccdf7fe2.png"},7273:function(e,t,a){t.Z=a.p+"assets/images/Dora-67a1e54f9f13a472b7173ed2b1ac73b9.png"}}]);