const fs = require('fs');

// 读取zhouyi.md文件
fs.readFile('zhouyi.md', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件出错:', err);
    return;
  }

  // 按一级标题进行分割
  const sections = data.split('\n# ');

  // 循环处理每个一级标题的内容
  sections.forEach((section, index) => {
    // 提取标题和内容
    const lines = section.split('\n');
    const title = lines[0];
    const content = lines.slice(1).join('\n');

    // 写入到单独的文件中
    const fileName = `zhouyi_${index + 1}.md`;
    fs.writeFile(fileName, `# ${title}\n\n${content}`, err => {
      if (err) {
        console.error(`写入文件 ${fileName} 出错:`, err);
      } else {
        console.log(`已创建文件: ${fileName}`);
      }
    });
  });
});
