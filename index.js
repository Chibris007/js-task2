let data = [
    {Principal: 2500, time: 1.8},
    {Principal: 1000, time: 5},
    {Principal: 3000, time: 1},
    {Principal: 2000, time: 3}
];

let interestCalculator = (Array) => { 
    const interestData = Array.map(obj => {
        if (obj.Principal >= 2500 && obj.time > 1 && obj.time < 3) {
            obj.rate = 3;
        } else if(obj.Principal >= 2500 && obj.time >= 3) {
            obj.rate = 4;
        } else if(obj.Principal < 2500 && obj.time <= 1 ) {
            obj.rate = 2
        } else{
            obj.rate = 1
        }
        obj.interest = (obj.Principal * obj.rate * obj.time) / 100;
        return obj;
    })
    console.log(interestData);
    return interestData;
}

interestCalculator(data);