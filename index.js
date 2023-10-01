const darktoggle = document.querySelector(".darkToggle");
const page = document.querySelector('html');
let colorPref = (localStorage.getItem('dark') === 'true' ? true : false);

function update (){
    page.classList.toggle('dark', colorPref)
}

function save () {
    localStorage.setItem('dark', colorPref)
}
function toggle () {
    colorPref = !colorPref
}

function check () {
    let preference = window.matchMedia('(prefers-color-scheme: dark)');
    if (preference.match === true && localStorage.getItem('dark') === null){
        colorPref = true
        save()
        update()
        darktoggle.checked = true
    }
}

check()

darktoggle.addEventListener('change', () => {
    toggle()
    update()
    save()
})