const sections = document.querySelectorAll('.section');
const sectbtns = document.querySelectorAll('.controlls');
const sectbtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-container');

function PageTransition() {
    for (let i = 0; i < sectbtn.length; i++) {
        sectbtn[i].addEventListener("click", function () {
            let currbtn = document.querySelectorAll('.active-btn');
            currbtn[0].className = currbtn[0].className.replace('active-btn', '');
            this.className += " active-btn";
        })
    }


    allsections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if (id) {
            // remove the selected btn
            sectbtns.forEach((btn) => {
                btn.classList.remove("active")
            })
            e.target.classList.add("active")    //adding the active class to the clicked btn


            // hiding other section 
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id)
            element.classList.add('active')
        }

    })

    // toggle theme

    const themeBtn=document.querySelector('.theme-bar');

    themeBtn.addEventListener("click" , () => {

      let element=document.body;
    element.classList.toggle("light-mode");
    });

}
PageTransition();

