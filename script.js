
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('overlay');//select by class

    menuIcon.addEventListener("click",()=>{
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    //close sidebar if overlay is clicked
    overlay.addEventListener("click",()=>{
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
    document.querySelectorAll('.sidebar-links a').forEach(link =>{
        link.addEventListener('click',()=>{
            sidebar.classlist.remove('active');
            overlay.classList.remove('active');
            menuIcon.classlist.remove('active');
        });
    });
