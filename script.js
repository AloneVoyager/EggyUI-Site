// 移动端菜单切换功能
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // 菜单切换功能
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // 切换菜单图标动画
        const menuIcons = this.querySelectorAll('.menu-icon');
        if (mobileMenu.classList.contains('active')) {
            // 转换为关闭图标 (X)
            menuIcons[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            menuIcons[1].style.opacity = '0';
            menuIcons[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            // 恢复为汉堡菜单图标
            menuIcons[0].style.transform = 'rotate(0) translate(0, 0)';
            menuIcons[1].style.opacity = '1';
            menuIcons[2].style.transform = 'rotate(0) translate(0, 0)';
        }
    });
    
    // 点击移动端菜单链接后关闭菜单
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            
            // 恢复菜单图标
            const menuIcons = menuToggle.querySelectorAll('.menu-icon');
            menuIcons[0].style.transform = 'rotate(0) translate(0, 0)';
            menuIcons[1].style.opacity = '1';
            menuIcons[2].style.transform = 'rotate(0) translate(0, 0)';
        });
    });
    
    // 点击菜单外部区域关闭菜单
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target) || menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            
            // 恢复菜单图标
            const menuIcons = menuToggle.querySelectorAll('.menu-icon');
            menuIcons[0].style.transform = 'rotate(0) translate(0, 0)';
            menuIcons[1].style.opacity = '1';
            menuIcons[2].style.transform = 'rotate(0) translate(0, 0)';
        }
    });
    
    // 下载按钮点击处理
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            /*
            // 由于EggyUI-RE仍在开发中，此处模拟下载提示
            const downloadSection = document.querySelector('.download-section');
            const note = document.createElement('div');
            note.className = 'download-notice';
            note.style.cssText = `
                background-color: #FFF3CD;
                color: #856404;
                padding: 12px;
                border-radius: 6px;
                border-left: 4px solid #FFC107;
                margin-top: 15px;
                text-align: center;
            `;
            note.textContent = '⚠️ EggyUI-RE 目前处于开发阶段，安装包尚未发布。请关注项目更新或加入QQ群获取最新信息。';
            */

            if (confirm("EggyUI-RE 目前处于开发阶段，安装包尚未发布。是否访问 EggyUI-RE 仓库？")) {
                window.open("https://github.com/CN-RBL/EggyUI-RE", "_blank");
            }
            
            // 移除可能已存在的提示
            const existingNotice = document.querySelector('.download-notice');
            if (existingNotice) {
                existingNotice.remove();
            }
            
            downloadSection.appendChild(note);
            
            // 平滑滚动到下载提示
            note.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
    
    // 导航栏滚动效果
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滚动，隐藏导航栏
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动，显示导航栏
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});