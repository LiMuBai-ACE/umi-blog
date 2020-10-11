/*
Navicat MySQL Data Transfer

Source Server         : 前端test
Source Server Version : 80020
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 80020
File Encoding         : 65001

Date: 2020-10-11 19:11:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article_list
-- ----------------------------
DROP TABLE IF EXISTS `article_list`;
CREATE TABLE `article_list` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `profile` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_general_ci,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `create_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of article_list
-- ----------------------------
INSERT INTO `article_list` VALUES ('4c077160-da4b-11ea-90cd-07ea8013df71', '今天是个好日子', '今天是个快乐的一天', '<p>1313131313</p>', 'a946a3c0-d58f-11ea-9280-af498b74458c', null, '2020-08-09 22:19:12');
INSERT INTO `article_list` VALUES ('85837a10-da4b-11ea-96f5-2bad61011b88', '今天是个好日子', '234123123', '<p>12312312</p>', 'a946a3c0-d58f-11ea-9280-af498b74458c', null, '2020-08-09 22:20:49');
INSERT INTO `article_list` VALUES ('d41176c0-da4e-11ea-9f4c-57859b6b2869', '今天是个好日子', '今天是个快乐的一天', '<p>111</p>', 'a946a3c0-d58f-11ea-9280-af498b74458c', null, '2020-08-09 22:44:29');
INSERT INTO `article_list` VALUES ('48bda0c0-da4f-11ea-9f4c-57859b6b2869', '今天是个好日子', '今天是个快乐的一天', '<p>flaskdjflasj</p>', 'a946a3c0-d58f-11ea-9280-af498b74458c', null, '2020-08-09 22:47:45');
INSERT INTO `article_list` VALUES ('666dc780-da54-11ea-a42a-675751cb1d37', '你是哥哥', '疯狂的撒哈拉发哈都是垃圾发电', '<p>法撒辣椒粉看看拉萨解放辣椒粉垃圾十六分放大开发</p>', 'a946a3c0-d58f-11ea-9280-af498b74458c', null, '2020-08-09 23:24:22');
INSERT INTO `article_list` VALUES ('1a3c3120-dfd2-11ea-b04b-2d5e62076aec', 'l,kafdlja', 'fafdas', '<pre data-lang=\"javascript\" class=\"lang-javascript\"><code class=\"lang-javascript\"><span style=\"color:#c586c0\">import</span> <span style=\"color:#9cdcfe\">request</span> <span style=\"color:#c586c0\">from</span> <span style=\"color:#ce9178\">&#x27;@/utils/request&#x27;</span><span style=\"color:#d4d4d4\">;</span><br/><span style=\"color:#6a9955\">// 代理需要在请求接口前 /api</span><br/><br/><span style=\"color:#6a9955\">// 用户注册</span><br/><span style=\"color:#c586c0\">export</span> <span style=\"color:#569cd6\">async</span> <span style=\"color:#569cd6\">function</span> <span style=\"color:#dcdcaa\">userRegister</span><span style=\"color:#d4d4d4\">(</span><span style=\"color:#9cdcfe\">data</span><span style=\"color:#d4d4d4\">: </span><span style=\"color:#4ec9b0\">any</span><span style=\"color:#d4d4d4\">) {</span><br/> <span style=\"color:#c586c0\">return</span> <span style=\"color:#dcdcaa\">request</span><span style=\"color:#d4d4d4\">(</span><span style=\"color:#ce9178\">&#x27;/login/register&#x27;</span><span style=\"color:#d4d4d4\">, {</span><br/> <span style=\"color:#9cdcfe\">method:</span> <span style=\"color:#ce9178\">&#x27;POST&#x27;</span><span style=\"color:#d4d4d4\">,</span><br/> <span style=\"color:#9cdcfe\">data</span><span style=\"color:#d4d4d4\">,</span><br/><span style=\"color:#d4d4d4\">  });</span><br/><span style=\"color:#d4d4d4\">}</span><br/><br/><span style=\"color:#6a9955\">// 用户登录</span><br/><span style=\"color:#c586c0\">export</span> <span style=\"color:#569cd6\">async</span> <span style=\"color:#569cd6\">function</span> <span style=\"color:#dcdcaa\">userLogin</span><span style=\"color:#d4d4d4\">(</span><span style=\"color:#9cdcfe\">data</span><span style=\"color:#d4d4d4\">: </span><span style=\"color:#4ec9b0\">any</span><span style=\"color:#d4d4d4\">) {</span><br/> <span style=\"color:#c586c0\">return</span> <span style=\"color:#dcdcaa\">request</span><span style=\"color:#d4d4d4\">(</span><span style=\"color:#ce9178\">&#x27;/login&#x27;</span><span style=\"color:#d4d4d4\">, {</span><br/> <span style=\"color:#9cdcfe\">method:</span> <span style=\"color:#ce9178\">&#x27;POST&#x27;</span><span style=\"color:#d4d4d4\">,</span><br/> <span style=\"color:#9cdcfe\">data</span><span style=\"color:#d4d4d4\">,</span><br/><span style=\"color:#d4d4d4\">  });</span><br/><span style=\"color:#d4d4d4\">}</span><br/><br/><span style=\"color:#6a9955\">// 用户推出登录</span><br/><span style=\"color:#c586c0\">export</span> <span style=\"color:#569cd6\">async</span> <span style=\"color:#569cd6\">function</span> <span style=\"color:#dcdcaa\">logout</span><span style=\"color:#d4d4d4\">() {</span><br/> <span style=\"color:#c586c0\">return</span> <span style=\"color:#dcdcaa\">request</span><span style=\"color:#d4d4d4\">(</span><span style=\"color:#ce9178\">&#x27;/login/logout&#x27;</span><span style=\"color:#d4d4d4\">, {</span><br/> <span style=\"color:#9cdcfe\">method:</span> <span style=\"color:#ce9178\">&#x27;GET&#x27;</span><span style=\"color:#d4d4d4\">,</span><br/> <span style=\"color:#6a9955\">// data,</span><br/><span style=\"color:#d4d4d4\">  });</span><br/><span style=\"color:#d4d4d4\">}</span></code></pre>', 'a946a3c0-d58f-11ea-9280-af498b74458c', null, '2020-08-16 23:06:46');
INSERT INTO `article_list` VALUES ('3db304d0-dfd2-11ea-b04b-2d5e62076aec', '一段代码', '你看看呢！', '<pre data-lang=\"javascript\" class=\"lang-javascript\"><code class=\"lang-javascript\"><span style=\"color:#c586c0\">import</span> <span style=\"color:#9cdcfe\">request</span> <span style=\"color:#c586c0\">from</span> <span style=\"color:#ce9178\">&#x27;@/utils/request&#x27;</span><span style=\"color:#d4d4d4\">;</span><br/><span style=\"color:#6a9955\">// 代理需要在请求接口前 /api</span><br/><br/><span style=\"color:#6a9955\">// 用户注册</span><br/><span style=\"color:#c586c0\">export</span> <span style=\"color:#569cd6\">async</span> <span style=\"color:#569cd6\">function</span> <span style=\"color:#dcdcaa\">userRegister</span><span style=\"color:#d4d4d4\">(</span><span style=\"color:#9cdcfe\">data</span><span style=\"color:#d4d4d4\">: </span><span style=\"color:#4ec9b0\">any</span><span style=\"color:#d4d4d4\">) {</span><br/> <span style=\"color:#c586c0\">return</span> <span style=\"color:#dcdcaa\">request</span><span style=\"color:#d4d4d4\">(</span><span style=\"color:#ce9178\">&#x27;/login/register&#x27;</span><span style=\"color:#d4d4d4\">, {</span><br/> <span style=\"color:#9cdcfe\">method:</span> <span style=\"color:#ce9178\">&#x27;POST&#x27;</span><span style=\"color:#d4d4d4\">,</span><br/> <span style=\"color:#9cdcfe\">data</span><span style=\"color:#d4d4d4\">,</span><br/><span style=\"color:#d4d4d4\">  });</span><br/><span style=\"color:#d4d4d4\">}</span><br/><br/><span style=\"color:#6a9955\">// 用户登录</span><br/><span style=\"color:#c586c0\">export</span> <span style=\"color:#569cd6\">async</span> <span style=\"color:#569cd6\">function</span> <span style=\"color:#dcdcaa\">userLogin</span><span style=\"color:#d4d4d4\">(</span><span style=\"color:#9cdcfe\">data</span><span style=\"color:#d4d4d4\">: </span><span style=\"color:#4ec9b0\">any</span><span style=\"color:#d4d4d4\">) {</span><br/> <span style=\"color:#c586c0\">return</span> <span style=\"color:#dcdcaa\">request</span><span style=\"color:#d4d4d4\">(</span><span style=\"color:#ce9178\">&#x27;/login&#x27;</span><span style=\"color:#d4d4d4\">, {</span><br/> <span style=\"color:#9cdcfe\">method:</span> <span style=\"color:#ce9178\">&#x27;POST&#x27;</span><span style=\"color:#d4d4d4\">,</span><br/> <span style=\"color:#9cdcfe\">data</span><span style=\"color:#d4d4d4\">,</span><br/><span style=\"color:#d4d4d4\">  });</span><br/><span style=\"color:#d4d4d4\">}</span><br/><br/><span style=\"color:#6a9955\">// 用户推出登录</span><br/><span style=\"color:#c586c0\">export</span> <span style=\"color:#569cd6\">async</span> <span style=\"color:#569cd6\">function</span> <span style=\"color:#dcdcaa\">logout</span><span style=\"color:#d4d4d4\">() {</span><br/> <span style=\"color:#c586c0\">return</span> <span style=\"color:#dcdcaa\">request</span><span style=\"color:#d4d4d4\">(</span><span style=\"color:#ce9178\">&#x27;/login/logout&#x27;</span><span style=\"color:#d4d4d4\">, {</span><br/> <span style=\"color:#9cdcfe\">method:</span> <span style=\"color:#ce9178\">&#x27;GET&#x27;</span><span style=\"color:#d4d4d4\">,</span><br/> <span style=\"color:#6a9955\">// data,</span><br/><span style=\"color:#d4d4d4\">  });</span><br/><span style=\"color:#d4d4d4\">}</span></code></pre>', 'a946a3c0-d58f-11ea-9280-af498b74458c', null, '2020-08-16 23:07:46');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `confirm` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3256100974,305075936&fm=26&gp=0.jpg', 'a946a3c0-d58f-11ea-9280-af498b74458c', 'qiye@admin.com', '$2b$10$ILT982h16V4QSNPzj4j1lOO0/qw2xRKep0u2I9I9QiybP4Rwz3kW6', '$2b$10$CIXePkFeL922Tjj0MhffeuXx6CKwQkGGHYGKrukYX1PTS2cqLguSG', null, null, '2020-08-03 21:45:59', null);
