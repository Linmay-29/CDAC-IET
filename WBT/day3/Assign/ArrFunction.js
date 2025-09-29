let arr2 = [10,9,1,8,2,5];
let choose=3;
    let temp = 'y';
    do{
        // console.log("Choose the option");
        // console.log("<---------------------------------------->");
        // console.log("1.Sort \n.Exit");
        switch(choose){
            case 1:{
                console.log("<---------------------------------------->");    
                let sortArr = arr2.sort((a,b) => a-b);
                console.log("Sorted array = "+sortArr);
                console.log("<---------------------------------------->");
                temp = 'n';
            } break;
            case 2:{
                function reduceArr(arr2){

                    return arr2.reduce((max,current) => {
                        return (current > max) ? current : max
                    },arr2[2]);
    
                }
                console.log("Max element using Reduce() : "+reduceArr(arr2));
                temp = 'n';
            }break;

            case 3:{
                    let oddArr = (arr2.filter(ele=>{
                        return ele % 2 != 0;
                    }
                    ));
                    console.log("Returning Odd Element of Array using Filter() : "+oddArr);
                    temp = 'n';
            }break;

            default: {
                console.log("<---------------------------------------->");
                console.log("In exit");
                console.log("<---------------------------------------->");
                temp = 'n';
            }
            break;
        }
        if(temp == 'y'){
           console.log("Do u want to continue");
        }
        if(temp != 'y'){
            console.log("<---------------------------------------->");
            console.log("Thank You for using Services :)");
            console.log("<---------------------------------------->");
        }
    }while(temp == 'y');