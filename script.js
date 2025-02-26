let navbarItem = document.querySelectorAll('.item')
for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].addEventListener('click', function () {
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

var typed = new Typed(".multiple-text", {
    strings: ['Global Marketer', "UX Designer", "Product Manager"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认跳转，确保自定义滚动生效
        const targetId = this.getAttribute('href'); // 获取 href 里的 id
        const targetElement = document.querySelector(targetId); // 找到对应的元素
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // 这里的 50 让滚动位置稍微上移一点，避免被导航栏挡住
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("language-toggle");

    // 语言包
    const translations = {
        en: {
            home: "Home",
            education: "Education",
            internships: "Internships",
            portfolio: "Portfolio",
            contact: "Contact",
            hello: "Hello, It's Me",
            name: "Call Me Leanne",
            intro: "And I'd like to be a",
            description: "Fluent in Mandarin, English, and Japanese, I am passionate about the intersection of aesthetics and technology.",
            downloadCV: "Download CV",
            edu_des: "From Nanjing to Shanghai, from Nishinomiya to Los Angeles, my academic journey has taken me across cultures and perspectives.",
            edu_title: "Education",
            edu_uni1: "Nanjing University",
            edu_uni2: "Shanghai Jiao Tong University",
            edu_uni3: "University of Southern California",
            edu_loc1: "Nanjing, China",
            edu_loc2: "Shanghai, China",
            edu_loc3: "Los Angeles, USA",
            edu_maj1: "Major: English",
            edu_maj2: "Major: Communication and Management",
            edu_maj3: "Major: Management and Marketing",
            edu_mon: "July - August 2024",
            edu_uni4: "Kwansei Gakuin University",
            edu_loc4: "Nishinomiya, Japan",
            edu_maj4: "Program: Summer Exchange",
            intern_des: "From consulting and new media operations to product management, I've gradually discovered my true passion and direction—where product and marketing intersect.",
            intern_des1:"Deloitte",
            intern_des2:"Dentsu",
            intern_des3:"RedNote",
            intern_des4:"BCG",
            intern_des5:"Lilith Games",
            port1:"Portfolio",
            port2:"My recent works",
            port3:"Vlog in JP",
            port4:"In August 2024, I joined Kwansei Gakuin University for a summer exchange program and created this video to capture the brightest summer of 2024.",
            port5:"Integrated Marketing Plan",
            port6:"In 2022, as team leader, I participated in the L'Oréal BrandStorm competition, developing an integrated marketing plan and video materials for Maison Margiela Fragrances, earning a spot in the national Top 100.",
            port7:"Figma UI/UX Design",
            port8:"In 2024, as the lead designer for my Product Management UX course at USC, I designed the Gamerhood app, which received high praise from the client.",
            port_d1:"Watch Video",
            port_d2:"Download PPT",
            port_d3:"View in Figma",
            con1:"Contact me",
            con2:"Call me",
            con3:"E-mail",
            con4:"Location",
            con5:"Shanghai, CHN",
            title1: "Researched macroeconomic and luxury industry trends for Richemont’s financial training program, analyzing the impact of China’s common prosperity policy.",
            title2: "Managed social media operations for six fashion brands, including NET-A-PORTER and ZEGNA, by tracking brand performance across platforms through volume index analysis, producing eight weekly and four monthly reports, and conducting competitive analysis on social media advertising campaigns.",
            title3: "Planned and executed bi-weekly content campaigns, boosting brand exposure with a 20% influencer penetration rate. Built relationships with 100+ top influencers, optimizing content to increase GMV by 13%. Led user research to enhance the 'Click to Buy' feature and leveraged data analysis to refine content strategy.",
            title4: "Researched waterproof materials in construction, analyzing 100+ data points and translating 17 pages of Japanese standards. Mapped Amazon’s core business growth strategies and key milestones, synthesizing client insights to inform project solutions.",
            title5: "Led 5+ web acquisition projects from planning to launch, aligning marketing needs, coordinating with engineering, and ensuring 100% successful delivery. Optimized workflows, improving on-time delivery by 30%.",
            portfolio_video: "https://player.bilibili.com/player.html?bvid=BV1m3PsejE5q&autoplay=0"
        },
        zh: {
            home: "主页",
            education: "教育经历",
            internships: "实习经历",
            portfolio: "我的作品",
            contact: "联系方式",
            hello: "Hi😝你好",
            name: "我是冯奕涵，你可以叫我Leanne",
            intro: "我有志成为",
            description: "我掌握三门语言：中文、英语和日语，并致力于发掘跨文化美学与科技相碰撞的奇妙火花。",
            downloadCV: "下载简历",
            edu_des: "从南京到上海，从日本西宫到美国洛杉矶，我的教育轨迹带我领略了不同的文化与视角下的风景。",
            edu_title: "教育经历",
            edu_uni1: "南京大学",
            edu_uni2: "上海交通大学",
            edu_uni3: "南加州大学",
            edu_loc1: "中国 南京",
            edu_loc2: "中国 上海",
            edu_loc3: "美国 洛杉矶",
            edu_maj1: "英语",
            edu_maj2: "文化产业管理",
            edu_maj3: "管理学与市场营销",
            edu_mon: "2024年7月-8月",
            edu_uni4: "关西学院大学",
            edu_loc4: "日本 西宫",
            edu_maj4: "暑期交换项目",

            intern_des: "我的实习轨迹沿着咨询、新媒体运营逐渐来到了产品，几番痛苦的波折后终于我找到了我的落脚点：因为我有着多元文化的背景，我想做海外市场营销；因为我对科技有着本能的喜爱，我想做产品。",
            intern_des1: "德勤咨询",
            intern_des2: "电通集团",
            intern_des3: "小红书",
            intern_des4: "波士顿咨询",
            intern_des5: "莉莉丝游戏",

            port1: "我的作品",
            port2: "近期我做了这些",
            port3: "一支日本Vlog",
            port4: "2024年8月，我前往关西学院大学参加暑期交换项目，拍摄并剪辑了这支vlog，谨此记录在关西无比美好的盛夏。",
            port5: "一个整合营销方案",
            port6: "2022年，我作为团队队长带领团队参加了欧莱雅BrandStorm大赛，为Maison Margiela Fragrances制定了一套整合营销方案，成功进入全国前100强。",
            port7: "一个Figma UI/UX设计",
            port8: "2024年，在南加州大学的产品经理UX设计与实践课程中，我使用figma策划并设计了Gamerhood游戏应用的UI界面及UX交互，获得了客户的高度评价。",

            port_d1: "观看视频",
            port_d2: "下载PPT",
            port_d3: "在Figma中查看",

            con1: "联系我",
            con2: "电话",
            con3: "电子邮件",
            con4: "所在地",
            con5: "中国 上海",

            title1: "为历峰集团的金融培训计划研究宏观经济和奢侈品行业趋势，分析中国共同富裕政策的影响。",
            title2: "管理六个时尚品牌（包括 NET-A-PORTER 和 ZEGNA）的社交媒体运营，通过品牌表现跟踪和指数分析，制作八份周报和四份月报，并进行社交媒体广告投放竞争分析。",
            title3: "策划并执行双周内容营销活动，使品牌曝光率提升20%。建立 100+ 顶级 KOL 关系，优化内容提升 GMV 13%。领导用户研究以优化“点击购买”功能，并利用数据分析优化内容策略。",
            title4: "研究建筑防水材料，分析 100+ 数据点并翻译 17 页日语标准。研究 Amazon 的核心业务增长战略和关键里程碑，并整合客户见解提供项目解决方案。",
            title5: "主导 5+ 网站获取项目，从规划到上线，包括营销需求对接、与工程团队协调，确保 100% 成功交付。优化工作流程，使准时交付率提升 30%。",
            portfolio_video: "https://player.bilibili.com/player.html?bvid=BV1m3PsejE5q&autoplay=0"
        }
    };

    let currentLang = localStorage.getItem("site-lang") || "en";
    updateLanguage(currentLang);

    langToggle.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "zh" : "en";
        updateLanguage(currentLang);
        localStorage.setItem("site-lang", currentLang);
    });

    function updateLanguage(lang) {
        document.documentElement.lang = lang;
        langToggle.textContent = lang === "en" ? "中文" : "English";

        // ✅ 确保 iframe `src` 正确
        const videoFrame = document.getElementById("bilibili-video");
        if (videoFrame) {
            videoFrame.src = translations[lang].portfolio_video;
        }

        // ✅ 更新所有带 `data-lang-key` 的文本
        document.querySelectorAll("[data-lang-key]").forEach(element => {
            const key = element.getAttribute("data-lang-key");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // ✅ 更新 `title`，确保 JavaScript 修改生效
        document.querySelectorAll(".internship-link").forEach((link, index) => {
            const titleKey = `title${index + 1}`;
            if (translations[lang][titleKey]) {
                link.setAttribute("title", translations[lang][titleKey]); // ✅ 直接更新 title
            }
        });
    }

    // ✅ JavaScript 版本的 `tooltip`
    const tooltip = document.createElement("div");
    tooltip.className = "custom-tooltip";
    document.body.appendChild(tooltip);

    document.querySelectorAll(".internship-link").forEach(link => {
        link.addEventListener("mouseenter", function (event) {
            tooltip.textContent = this.getAttribute("title"); // ✅ 直接用 `title`
            tooltip.style.display = "block";
            tooltip.style.left = event.pageX + "px";
            tooltip.style.top = (event.pageY + 15) + "px";
        });

        link.addEventListener("mousemove", function (event) {
            tooltip.style.left = event.pageX + "px";
            tooltip.style.top = (event.pageY + 15) + "px";
        });

        link.addEventListener("mouseleave", function () {
            tooltip.style.display = "none";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".internship-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // 阻止默认跳转
        });
    });
});
