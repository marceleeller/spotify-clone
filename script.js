let sidebar = document.getElementById('sidebar')
let showCase = document.getElementById('showcase')
let showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    console.log(showSidebar)
    if (showSidebar == true) {
        sidebar.style.right = 0;

    } else {
        sidebar.style.right = '-100vw';
    }
}