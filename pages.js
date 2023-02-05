// 多页配置
module.exports = {
  // 页面名称（对应 chunk 名）
  index: {
    js: "./src/pages/index", // 页面入口js
    html: "./src/pages/index/index.html", // 页面使用的html模板
    out: "index.html", // 输出目录中的页面文件名
  },
  investments: {
    js: "./src/pages/investments", // 页面入口js
    html: "./src/pages/investments/index.html", // 页面使用的html模板
    out: "investments.html", // 输出目录中的页面文件名
  },
  talent: {
    js: "./src/pages/talent", // 页面入口js
    html: "./src/pages/talent/index.html", // 页面使用的html模板
    out: "talent.html", // 输出目录中的页面文件名
  },
  team: {
    js: "./src/pages/team", // 页面入口js
    html: "./src/pages/team/index.html", // 页面使用的html模板
    out: "team.html", // 输出目录中的页面文件名
  },
};
