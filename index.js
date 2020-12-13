canv=document.createElement("canvas");
canv.width=500;canv.height=500;
document.body.appendChild(canv);
c=canv.getContext("2d");
c.fillStyle="#000";
c.fillRect(0,0,canv.width,canv.height);
c.fillStyle="#0f0";
c.fillRect(0,0,200,50);
c.fillStyle="#f00";
c.fillRect(50,200,100,30);
c.fillStyle="#00f";
c.fillRect(150,400,10,30);
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
