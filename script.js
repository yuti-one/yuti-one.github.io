var yutiNormal = true;
var yutiClick = 0;

function showyutiSolcc() {
    yutiClick++;

    if ( yutiNormal && yutiClick == 7 ) {
        document.getElementById("yuti").innerText = "yuti";  // TODO: set the solcc
        document.getElementById("yuti").classList.add("magicolor");
        changeFavicon("faviconMagicolor.ico");
    }
    else if (yutiNormal && yutiClick == 3216) {
        document.getElementById("yuti").innerText = "yuti";  // TODO: set the solcc
        document.getElementById("yuti").classList.add("magicolor");
        changeFavicon("faviconMagicolor.ico");
    }
    else {
        document.getElementById("yuti").innerText = "yuti";
        if ( document.getElementById("yuti").classList.contains("magicolor") ) {
            document.getElementById("yuti").classList.remove("magicolor");
            changeFavicon("favicon.ico");
        }
    }

    yutiNormal = !yutiNormal;
}   

document.head = document.head || document.getElementsByTagName('head')[0];

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


