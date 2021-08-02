


// var arr = [nav1, nav2, nav3]
// var y = 0;
window.addEventListener("scroll", ()=>{
    var nav1 = document.getElementById("1")
    var nav2 = document.getElementById("2")
    var nav3 = document.getElementById("3")
    var nav4 = document.getElementById("4")
    var sect1 = document.getElementById("section1")
    var sect2 = document.getElementById("section2")
    var sect3 = document.getElementById("section3")
    var sect4 = document.getElementById("section4")
    var arrnav = [nav1, nav2, nav3, nav4]
    var arrsect = [sect1, sect2, sect3, sect4]

    
    for (let index = 0; index < arrsect.length; index++) {
        const element = arrsect[index];
        if(window.scrollY>element.offsetTop){
            if(arrnav[index-1]!==undefined){
                arrnav[index-1].style.color = 'unset'
            }
            arrnav[index].style.color = 'orange'
            if(arrnav[index+1]!==undefined){
                arrnav[index+1].style.color = 'unset'
            }
            
        }
    }
})




