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

