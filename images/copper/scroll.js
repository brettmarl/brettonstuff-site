var g_iPos = 0;
var cxImg = 1939;
var cxCropped = 630;

function scrollTick()
{
    try
    {
        g_iPos -= 5;
        
        ele = document.getElementById("pano");
    
        ele.style.left = g_iPos + "px";
        
        if (g_iPos < -cxImg)
            g_iPos = cxCropped;

        window.setTimeout("scrollTick()", 50);
    }
    catch (e)
    {
        alert(e.message);
    }
    
}
