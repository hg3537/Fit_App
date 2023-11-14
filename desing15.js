/* nav bar */
const bar = document.querySelector(`.bars`);
const xmark = document.querySelector(`.fa-xmark`);
const navul = document.querySelector(`.nav ul`);
const navlinks = document.querySelectorAll(`.nav-li`);
const open_nave = () =>
{
    navul.classList.add(`toggle-ul`);
    bar.classList.add(`d-none`);
    xmark.classList.add(`d-inline`);
};
const close_nave = () =>
{
    navul.classList.remove(`toggle-ul`);
    bar.classList.remove(`d-none`);
    xmark.classList.remove(`d-inline`);
};
bar.addEventListener(`click`, () =>
{
    open_nave();
});
xmark.addEventListener(`click`, () =>
{
    close_nave();
});
navlinks.forEach(link =>
{
    link.addEventListener(`click`, () =>
    {
        close_nave();
    });
});
document.addEventListener(`click`, (e) =>
{
    if (!bar.contains(e.target) && !xmark.contains(e.target) && !navul.contains(e.target)) {
        close_nave();
    }
})
/* change landing text */
let changedtext = document.querySelector(`.text-change`);
const wordschanging = [ `own Fitness`, `own healthy`, `own beauty` ];
let wordindex = 0;
let charindex = 0;
let isdelat = false;
function changetext ()
{
    let currntword = wordschanging[ wordindex ];
    let currntchar = currntword.substring(0, charindex);
    changedtext.textContent = currntchar;
    if (!isdelat && charindex < currntword.length)
    {
        charindex++;
        setTimeout(changetext, 200);
    } else if (isdelat && charindex > 0)
    {
        charindex--;
        setTimeout(changetext, 100);
    } else
    {
        isdelat = !isdelat;
        wordindex = !isdelat ? (wordindex + 1) % wordschanging.length : wordindex;
        setTimeout(changetext, 1000);
    }
}
changetext();

/* change img */
let landingimg = document.querySelectorAll(`.bg-fram`);
let landingimgs = [ `./img/screenshot-1.png`, `./img/screenshot-2.png`, `./img/screenshot-3.png`, `./img/screenshot-4.png`, `./img/screenshot-5.png` ];
setInterval(() =>
{
    let rondomnub = Math.floor(Math.random() * landingimgs.length);
    landingimg.forEach(img =>
    {

        img.src = landingimgs[ rondomnub ];
    });
}, 1500);
/* counter */
let countnum = document.querySelectorAll(`.num-cont`);
let start = false;
const aboutcontainer = document.querySelector(`.about-container`);
const navli = document.querySelectorAll(`.nav ul li a`);
const fcontainer = document.querySelector(`.feature-container`);
const fbox = document.querySelectorAll(`.box-f`);
const scontainer = document.querySelector(`.Screenshot-container`);
const sitem = document.querySelectorAll(`.s-item`);
const aboutitem = document.querySelectorAll(`.about-container .s-item`);
const contact = document.querySelector(`.contact`);
const contactinputs = document.querySelectorAll(`.contact-input`);
const sections = document.querySelectorAll(`.section`);
const works = document.querySelector(`.works`);
const workscol = document.querySelectorAll(`.works .col`);

let cuurentsection = `home`;
window.addEventListener(`scroll`, () =>
{
    if (window.scrollY >= (aboutcontainer.offsetTop - 25))
    {
        if (!start)
        {

            countnum.forEach(num =>
            {
                var numgoal = num.dataset.target;
                var counter = setInterval(() =>
                {
                    num.textContent++;
                    if (num.textContent === numgoal)
                    {
                        clearInterval(counter);
                    }
                }, 500 / numgoal);
            });
            start = true;
        }
    }
    window.scrollY >= 200 ? document.querySelector(`.nav-bar`).classList.add(`frxed-nav`) : document.querySelector(`.nav-bar`).classList.remove(`frxed-nav`);
    // start
    sections.forEach(sec =>
    {
        let stop = window.scrollY;
        let offset = sec.offsetTop;
        let id = sec.getAttribute(`id`);
        if (stop >=( offset - 150 ))
        {
            cuurentsection = id;
        }
    });
    navli.forEach(li =>
    {
        if (li.href.includes(cuurentsection))
        {
            document.querySelector(`.active`).classList.remove(`active`);
            li.classList.add(`active`);

        }
    });
    // end

    if (window.scrollY >= (fcontainer.offsetTop - 100))
    {
        fbox.forEach(box =>
        {
            box.classList.add(`show-box`);
        });


    }
    if (window.scrollY >= (scontainer.offsetTop - 250))
    {
        sitem.forEach(item =>
        {
            item.classList.add(`show-box`);
        });
    }
    if (window.scrollY >= (aboutcontainer.offsetTop - 200))
    {
        aboutitem.forEach(item =>
        {
            item.classList.add(`show-box`);
        });
    }
    if (window.scrollY >= (contact.offsetTop - 200))
    {
        contactinputs.forEach(input =>
        {
            input.classList.add(`show-box`);
        });
    }
    if (window.scrollY >= (works.offsetTop - 200))
    {
        workscol.forEach(col =>
        {
            col.classList.add(`show-box`);
        });
    }

});

fbox.forEach(box =>
{
    box.addEventListener(`click`, () =>
    {
        box.classList.toggle(`no-shadow`);
    });
});
// end
