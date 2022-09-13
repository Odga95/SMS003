document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('bnk_open').onclick = function () {
        var bnkNavLink = [...document.getElementsByClassName('bnk-nav-link')]
        if (bnkNavLink) {
            bnkNavLink.forEach(function (item) {
                item.style.left = '0%'
            })
        }
        document.getElementById('bnk_open').style.display = 'none'
        document.getElementById('bnk_close').style.display = 'block'
    }

    document.getElementById('bnk_close').onclick = function () {
        var bnkNavLink = [...document.getElementsByClassName('bnk-nav-link')]
        if (bnkNavLink) {
            bnkNavLink.forEach(function (item) {
                item.style.left = '100%'
            })
        }
        document.getElementById('bnk_open').style.display = 'block'
        document.getElementById('bnk_close').style.display = 'none'
    }

    window.addEventListener('scroll', function () {
        var head = [...document.getElementsByTagName('header')]
        if (this.scrollY > 30) {
            if (head) {
              head.forEach(function (item) {
                    item.classList.add('wraper')
                })
            }
        }
        else {
            if (head) {
              head.forEach(function (item) {
                    item.classList.remove('wraper')
                })
            }
        }
    })
});