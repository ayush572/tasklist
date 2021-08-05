exports.getdate=function (){
    let today=new Date();
    
    let options = { month: 'long', day: 'numeric', year: 'numeric' };
    let date=today.toLocaleString('en-US', options)
    return date;
}
exports.getday=function ()
{
    let todayday=new Date();
    
    let options = {  weekday: 'long' };
    let day=todayday.toLocaleString('en-US', options)
    return day;
}
