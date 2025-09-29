function findMax(...n){
   let largest = n[0];

        n.forEach(element => (largest < element) ? largest=element:element)
        console.log("Max Element = "+largest);

        let oddArr = (n.filter(ele=>{
        return ele % 2 != 0;
        }
        ));
        console.log("Odd numbers : "+oddArr);
}
findMax(1,2,5,6,23,8,7);