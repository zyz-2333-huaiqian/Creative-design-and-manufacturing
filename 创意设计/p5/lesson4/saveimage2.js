//按s键
function keyPressed()
{
    if(key ==='s')
    {
        saveImage();
    }
}

const saveImage=() => {
    saveCanvas(YMDHMs(), "png")
    console.log("save")
}

const YMDHMs=()=>{
    const now =new Date();
    let str ="赵英竹";
    str += now.getFullYear();
    //str+=" ";
    str += format(now.getMonth()+1);
    str += now.getDate();
    str+="_"
    str += now.getHours();
    //str+=" ";
    str += format(now.getMinutes());
    //str+=" ";
    str += now.getSeconds();
    return str;
}
const format =(num) =>
{
    return str(num<10?"0"+num:""+num)
}