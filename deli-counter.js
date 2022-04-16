// 1. Write your functions here


// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"

const katzDeli =[];

function takeANumber(katzDeli, name){
    katzDeli.push(name);
    console.log(`Welcome, ${name}. You are number ${katzDeli.length} in line `);
}

function line(katzDeli){
    if(katzDeli.length === 0){
        console.log("Nobody in the line");
    }
    else{
        for(i=0; i<katzDeli.length; i++){
            console.log(`The line is currently: ${i+1}. ${katzDeli.length}`)
        }
    }
}

function nowServing(katzDeli){
    if(katzDeli.length === 0){
        console.log("There is nobody waiting to be served!")
    }
    else if(katzDeli > 0){
        var Serving = katzDeli[0];
        katzDeli.shift();
        console.log(`Currently Serving ${Serving}`);
    }
}


takeANumber(katzDeli, "Thien");
nowServing(katzDeli);
line(katzDeli);

takeANumber(katzDeli, "Bob");
nowServing(katzDeli);
line(katzDeli);

takeANumber(katzDeli, "Mike");
nowServing(katzDeli);
line(katzDeli);