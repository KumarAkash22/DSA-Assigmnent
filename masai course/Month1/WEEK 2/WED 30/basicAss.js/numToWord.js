var items =["231", "95632", "7"];

for(var i = 0 ; i < items.length; i++){
    var item = items[i];
    var output = "";
    for(var j = 0; j < item.length; j++){
        switch(item[j]){
            case "0":
                output = output+"Zero" + "";
                break;
            case "1":
                output = output+"One" + "";
                break;
            case "2":
                output = output+"Two" + "";
                break;
            case "3":
                output = output+"Three" + "";
                break;
            case "4":
                output = output+"Four" + ""
                break;
            case "5":
                output = output+"Five" +"";
                break;
            case "6":
                output = output+"Six" + "";
                break;
            case "7":
                    output = output+"Seven" + "";
                break; 
            case "8":
                output = output+"Eight" + "";
                break;
            case "9":
                output = output+"Nine" + "";
                break;

                default:
                    break;
        }   
    }
    console.log(output);
}