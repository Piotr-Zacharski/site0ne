/*
   Galeria obrazków z miniaturkami
    
 */

window.onload = function()
{
    var mainImage = document.getElementById("row1");
    var image = new Image();
    
    mainImage.appendChild(image);
    
    var columns = document.getElementsByClassName("column");
    
    var currentColumn = columns[0];
    
    image.src = currentColumn.getAttribute("src");
    currentColumn.className += " current";
    
    for (var i = 0; i < columns.length; i++)
    {
        columns[I].onmouseover = function()
        {
            currentColumns.className = currentColumn.className.replace("current", "");
            currentColumn = this;
            currentColumn.className += " current";
            
            image.src = this.getAttribute("src");
        };
    }
    
};










