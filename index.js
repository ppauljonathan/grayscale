img=new Image;
img.src="./ghjk.jpg";
img.onload=function(){
canv=document.createElement("canvas");
canv.width=img.width;canv.height=img.height;
document.body.appendChild(canv);
c=canv.getContext("2d");
c.drawImage(img,0,0);}
function gray()
{
    d=c.getImageData(0,0,canv.width,canv.height);

for(i=0;i<d.data.length;i++)
    {
        if(i%4==0)
        {
            d.data[i]=(d.data[i]*0.3+d.data[i+1]*0.59+d.data[i+2]*0.11);
        d.data[i+1]=d.data[i];
        d.data[i+2]=d.data[i];
        }
    }
    c.clearRect(0,0,canv.width,canv.height);
    c.putImageData(d,0,0);
}
