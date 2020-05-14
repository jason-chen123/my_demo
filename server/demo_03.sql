-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2020-04-30 16:44:48
-- 服务器版本： 10.1.8-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo_03`
--

-- --------------------------------------------------------

--
-- 表的结构 `demo3_admin`
--

CREATE TABLE `demo3_admin` (
  `id` int(11) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `rights` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `demo3_admin`
--

INSERT INTO `demo3_admin` (`id`, `uname`, `upwd`, `rights`) VALUES
(1, 'a202965097', '123', 'admin'),
(2, 'ceshi', '123', 'admin'),
(3, 'ceshi02', '123', 'user'),
(4, 'ceshi03', '123', 'user');

-- --------------------------------------------------------

--
-- 表的结构 `writenews`
--

CREATE TABLE `writenews` (
  `id` int(11) NOT NULL,
  `nid` int(11) DEFAULT NULL,
  `writer` varchar(50) NOT NULL,
  `ntitle` varchar(50) DEFAULT NULL,
  `ncontent` varchar(2000) DEFAULT NULL,
  `nimg` varchar(50) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `writenews`
--

INSERT INTO `writenews` (`id`, `nid`, `writer`, `ntitle`, `ncontent`, `nimg`, `ndate`) VALUES
(9, 1, 'a202965097', '测试测试', '<p>测水水水水水水水水</p>', '', '2020-4-30'),
(10, 1, 'a202965097', '测试02', '<blockquote>		   ddd<u>ddd</u>	<span style="color: rgb(230, 0, 0);">ddd d d d d d d d d d d  d d d d d d d 五日均线障碍物出现几个人dd</span></blockquote><pre class="ql-syntax" spellcheck="false">ddddddddddddddddddddddddddsssssss\n</pre>', '', '2020-4-30'),
(12, 1, 'a202965097', 'czxczcxzc', '<p>wewqewqqqqqqq<span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">title</span>||<span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">content</span>==<span style="color: rgb(206, 145, 120);">''''</span><span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">title</span>||<span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">content</span>==<span style="color: rgb(206, 145, 120);">''''</span><span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">title</span>||<span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">content</span>==<span style="color: rgb(206, 145, 120);">''''</span><span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">title</span>||<span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">content</span>==<span style="color: rgb(206, 145, 120);">''''</span><span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">title</span>||<span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">content</span>==<span style="color: rgb(206, 145, 120);">''''</span><span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">title</span>||<span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">content</span>==<span style="color: rgb(206, 145, 120);">''''</span><span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">title</span>||<span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">content</span>==<span style="color: rgb(206, 145, 120);">''''</span><span style="color: rgb(86, 156, 214);">this</span>.<span style="color: rgb(156, 220, 254);">title</span>||<span style="co', '', '2020-4-30'),
(13, 1, 'a202965097', '标题标题表调', '<p class="ql-align-justify"><span style="color: rgb(102, 102, 102);">            支持不支持 android移动版 qq 浏览器-不支持不支持 android移动版 uc浏览器-不支持不支持 android微信内嵌网页-不支持不支持 注意：您可以在浏览器中打开 webrtc 能力测试 页面进行检测是否完整支持 webrtc。 例如公众号等浏览器环境。 由于 h.264 版权限制，华为系统的 chrome 浏览器和以 chrome webview 为</span></p>', '', '2020-4-30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `demo3_admin`
--
ALTER TABLE `demo3_admin`
  ADD PRIMARY KEY (`id`,`uname`);

--
-- Indexes for table `writenews`
--
ALTER TABLE `writenews`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `demo3_admin`
--
ALTER TABLE `demo3_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- 使用表AUTO_INCREMENT `writenews`
--
ALTER TABLE `writenews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
