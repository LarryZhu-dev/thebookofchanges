import { defineConfig } from 'vitepress'
let itemsLength = 64
function getSidebar() {
  let items: {}[] = [{
    text: '《周易》是什么？',
    link: '/what.md'
  }]
  for (let i = 1; i <= itemsLength; i++) {
    items.push({ text: `第${numberToChinese(i)}卦`, link: `/zhouyi_${i}.md` })
  }
  return items
}
function numberToChinese(number) {
  const chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const chineseUnits = ['', '十', '百', '千', '万', '亿'];

  // 将数字转换为字符串，以便于处理每一位
  const numStr = String(number);

  let result = '';
  let zeroFlag = false; // 用于标记是否需要加上“零”

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]); // 当前位的数字
    const unit = chineseUnits[numStr.length - i - 1]; // 当前位的单位

    if (digit !== 0) {
      if (zeroFlag) {
        result += chineseNumbers[0]; // 如果前一位是零，则在当前位加上“零”
        zeroFlag = false;
      }
      result += chineseNumbers[digit] == "一" && unit == "十" ? unit : chineseNumbers[digit] + unit; // 加上当前位的数字和单位
    } else {
      zeroFlag = true; // 如果当前位是零，则标记为需要加上“零”
    }
  }
  return result;
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "周易",
  description: "周易",
  base: "/thebookofchanges/",
  head: [
    ['link', { rel: 'icon', href: 'yi.svg' }] // 这里是你的 Logo 图片路径
  ],
  outDir: 'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '阅读', link: '/zhouyi_1.md' }
    ],
    logo: '/yi.svg',
    sidebar: [
      {
        text: '目录',
        // items: [
        //   { text: '第一卦', link: '/zhouyi_1.md' },
        // ]
        items: getSidebar()
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LarryZhu-dev/thebookofchanges' }
    ]
  }
})
