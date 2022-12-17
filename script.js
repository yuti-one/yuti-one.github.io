var yutiNormal = true;
var yutiClick = 0;
document.head = document.head || document.getElementsByTagName('head')[0];


function yutiMotions() {
    yutiClick++;

    if ( yutiNormal && yutiClick == 7) {
        document.getElementById("yuti").innerText = "yuti";  
        document.getElementById("yuti").style.color = "var(--magicolor)"
        changeFavicon("faviconMagicolor.ico");
        yutiNormal = false;
        yutiClick = 0;
    }
    else {
        yutiNormal = true;
        document.getElementById("yuti").innerText = "yuti";
        document.getElementById("yuti").style.color = "red";
        changeFavicon("favicon.ico");
    }
} 

function openSection(src) {
    window.open(src, target="_self");
}

function changeRigaToBlue(id) {
    document.getElementById(id).style = "text-decoration: 3px underline blue;"
}

function changeRigaToRed(id) {
    document.getElementById(id).style = "text-decoration: 3px underline red;"
}

function changeFavicon(src) {
    var link = document.createElement('link'),
    oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) 
        document.head.removeChild(oldLink);
    
    document.head.appendChild(link);
}

