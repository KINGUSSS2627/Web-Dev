
module.exports.GetDate =function (){
    let today = new Date();
    let Currday = today.getDay();
    let day = "";

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

   return today.toLocaleDateString("en-US", options);
}

exports.GetDay = function(){
    let today = new Date();
    let Currday = today.getDay();
    let day = "";

    let options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);
}