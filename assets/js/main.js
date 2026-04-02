// 监听 DOMContentLoaded 事件，确保 HTML 文档完全解析后再执行脚本
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有的导航链接和页面区块节点
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    // 遍历每个导航链接，绑定点击事件监听器
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // 阻止 <a> 标签的默认锚点跳转行为
            event.preventDefault();

            // 提取 href 属性中的 ID (例如从 "#articles" 提取 "articles")
            const targetId = link.getAttribute('href').substring(1);

            // 状态重置：移除所有区块的 active 类名
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // 状态激活：为目标区块添加 active 类名，触发 CSS 过渡动画
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});