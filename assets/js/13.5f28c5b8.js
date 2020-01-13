(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{222:function(t,e,s){"use strict";s.r(e);var a=s(3),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"iptables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iptables"}},[t._v("#")]),t._v(" iptables")]),t._v(" "),s("h2",{attrs:{id:"disable-firewalld"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-firewalld"}},[t._v("#")]),t._v(" Disable FirewallD")]),t._v(" "),s("p",[t._v("stop the FirewallD service:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  sudo systemctl stop firewalld\n")])])]),s("p",[t._v("Disable the FirewallD service to start automatically on system boot:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  sudo systemctl disable firewalld\n")])])]),s("p",[t._v("Mask the FirewallD service to prevent it from being started by another services:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  sudo systemctl mask --now firewalld\n")])])]),s("h2",{attrs:{id:"install-and-enable-iptables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-and-enable-iptables"}},[t._v("#")]),t._v(" Install and Enable Iptables")]),t._v(" "),s("ol",[s("li",[t._v("Run the following command to install the iptables-service package from the CentOS repositories:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  sudo yum install iptables-services\n")])])]),s("p",[t._v("Once the package is installed start the Iptables service:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  sudo systemctl start iptables\n  sudo systemctl start iptables6\n")])])]),s("p",[t._v("Enable the Iptables service to start automatically on system boot:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  sudo systemctl enable iptables\n  sudo systemctl enable iptables6\n")])])]),s("p",[t._v("Check the iptables service status with:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  sudo systemctl status iptables\n  sudo systemctl status iptables6\n")])])]),s("p",[t._v("To check the current iptables rules use the following commands:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  sudo iptables -nvL\n  sudo iptables6 -nvL\n")])])]),s("p",[t._v("By default only the SSH port 22 is open. The output should look something like this:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Output\n  Chain INPUT (policy ACCEPT 0 packets, 0 bytes)\n  pkts bytes target     prot opt in     out     source               destination         \n  5400 6736K ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            state RELATED,ESTABLISHED\n      0     0 ACCEPT     icmp --  *      *       0.0.0.0/0            0.0.0.0/0           \n      2   148 ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0           \n      3   180 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            state NEW tcp dpt:22\n      0     0 REJECT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            reject-with icmp-host-prohibited\n\n  Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)\n  pkts bytes target     prot opt in     out     source               destination         \n      0     0 REJECT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            reject-with icmp-host-prohibited\n\n  Chain OUTPUT (policy ACCEPT 4298 packets, 295K bytes)\n  pkts bytes target     prot opt in     out     source               destination     \n")])])]),s("p",[t._v("At this point, you have successfully enabled the iptables service and you can start building your firewall. The changes will persist after a reboot.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://linuxize.com/post/how-to-install-iptables-on-centos-7/#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[t._v("how to install iptables on centos 7"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://linux.die.net/man/8/iptables",target:"_blank",rel:"noopener noreferrer"}},[t._v("man page"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jb51.net/article/94839.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云linux服务器上使用iptables设置安全策略的方法"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1071312",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux服务器最最基本安全策略"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=l.exports}}]);