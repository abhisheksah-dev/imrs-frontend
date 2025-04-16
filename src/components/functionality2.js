//this is a program for ther functionality of neareby station

class StationNode {
    constructor(name, distancePrev, distanceNext) {
        this.name = name;
        this.distancePrev = distancePrev;
        this.distanceNext = distanceNext;
        this.prev = null;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertFirst(name, distancePrev, distanceNext) {
        const newNode = new StationNode(name, distancePrev, distanceNext);
        this.head = newNode;
        this.tail = newNode;
    }

    insertEnd(name, distancePrev, distanceNext) {
        if (this.head === null) {
            this.insertFirst(name, distancePrev, distanceNext);
        } 
        else {
            const newNode = new StationNode(name, distancePrev, distanceNext);
            this.tail.next = newNode;
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.head.prev = newNode;
            this.tail = newNode;
        }
    }
    showNearest(name)
    {
        let current=this.head;
        while(current.name!= name)
        {
            current=current.next;
        }
        let dp= current.distancePrev;  //  declaring new distanceprev and distance next so  that the original value do not change when i divide it by 1000 to convert it into km.
        let dn= current.distanceNext;
        if(current.distancePrev>1000)
        {
            console.log(`Nearest stations are`);
            console.log(`${current.prev.name} : ${current.distancePrev/1000} km`);
                
        }
        else
        {
            console.log(`Nearest stations are`);
            console.log(`${current.prev.name} : ${current.distancePrev} meters`); 
        }
        if(current.distanceNext>1000)
        {
            console.log(`${current.next.name} : ${current.distanceNext/1000} km`);
                
        }
        else
        {
             console.log(`${current.next.name} : ${current.distanceNext} meters`); 
        }

    }

    countStations(startStation, endStation) {
        let current = this.head;
        // let count=0;
        let startFound=null;
        let endFound=null;
        
        while(current.name!= startStation)
        {
            current=current.next;
        }
        startFound=current;
        current=this.head;
        while(current.name!=endStation)
        {
            current=current.next;
        }
        endFound=current;
        
        // console.log("startFound is ", startFound.name);
        // console.log("endFound is ", endFound.name);

        let forward=startFound;
        let backward=startFound;
        let fcount=0;
        let bcount=0;
        while(forward!=endFound)
        {
            fcount++;
            forward=forward.next;
        }
        while(backward!=endFound)
        {
            bcount++;
            backward=backward.prev;
        }
        fcount--;
        bcount--;
        // console.log("fcount is ", fcount);
        // console.log("bcount is ", bcount);
        if(fcount>bcount)
        {
            return bcount;
        }
        else
        {
            return fcount;
        }
    }

    calculateFare(stops) {
        if (stops <= 1) {
            return 10;
        } else if (stops <= 3) {
            return 20;
        } else if (stops <= 5) {
            return 30;
        } else if (stops <= 7) {
            return 40;
        } else if (stops <= 9) {
            return 50;
        } else if (stops <= 11) {
            return 60;
        } else if (stops <= 13) {
            return 70;
        } else {
            return 80;
        }
    }

    calculateDistance(startStation, endStation) {
        let current = this.head;
        let totalDistance = 0;
        let startFound=null;
        let endFound=null;
        while(current.name!= startStation)
            {
                current=current.next;
            }
            startFound=current;
            current=this.head;
        while(current.name!=endStation)
            {
                current=current.next;
            }
        endFound=current;

        let forward=startFound;
        let backward=startFound;
        let fcount=0;
        let bcount=0;
        while(forward!=endFound)
        {
            fcount++;
            forward=forward.next;
        }
        while(backward!=endFound)
        {
            bcount++;
            backward=backward.prev;
        }
        if(fcount<bcount)
        {
            forward=startFound;
            while(forward!=endFound)
            {
                totalDistance=totalDistance + forward.distanceNext;
                // console.log("this is forward station name: ",forward.next.name);
                // console.log("total added ",forward.distanceNext);
                forward=forward.next;
            }
            // console.log("this is 1");
        }
        else
        {
            backward=startFound;
            while(backward!=endFound)
            {
                totalDistance=totalDistance + backward.distancePrev;
                // console.log("this is backward station name: ",backward.prev.name);
                // console.log("total added ",backward.distancePrev);
                backward=backward.prev;
            }
            // console.log("this is 2");
        }

        return totalDistance;
    }

    
    calculateTime(startStation, endStation) {
        const distance = this.calculateDistance(startStation, endStation);
        const stops = this.countStations(startStation, endStation);

        const stoppageTime = 20;
        const distanceInKm = distance / 1000;

        const NoncrowdedStations = [
            "Kalani Nagar", "BSF", "Airport", "Gandhi Nagar/ Nanod", "Super Corridor 6",
            "Super Corridor 5", "Super Corridor 4", "Super Corridor 3", "Super Corridor 2",
            "Super Corridor 1", "Bhawarshala Square", "MR 10 Road", "ISBT/ MR 10 Flyover",
            "Chandragupt Square", "Hira Nagar"
        ];

        let speed = NoncrowdedStations.includes(startStation) || NoncrowdedStations.includes(endStation) ? 100 : 40;
        const speedInMps = speed * (1000 / 3600);

        const travelTime = (distance / speedInMps) + (stops * stoppageTime);

        return (travelTime / 60).toFixed(0);
    }
}

const metroRoute = new CircularLinkedList();
metroRoute.insertFirst("Super Corridor 1", 1000, 1500);
metroRoute.insertEnd("Super Corridor 2", 1500, 1000);
metroRoute.insertEnd("Super Corridor 3", 1000, 1250);
metroRoute.insertEnd("Super Corridor 4", 1250, 1250);
metroRoute.insertEnd("Super Corridor 5", 1250, 990);
metroRoute.insertEnd("Super Corridor 6", 990, 650);
metroRoute.insertEnd("Gandhi Nagar/Nanod", 650, 1400);
metroRoute.insertEnd("Airport", 1400, 1620);
// metroRoute.insertEnd("BSF", 1400, 880);
metroRoute.insertEnd("BSF/ Kalani Nagar", 1620, 1140);
metroRoute.insertEnd("Ramchandra Nagar Square", 1140, 875);
metroRoute.insertEnd("Bada Ganpati", 875, 600);
metroRoute.insertEnd("Chota Ganpati", 600, 900);
metroRoute.insertEnd("Rajwada Palace", 900, 1170);
metroRoute.insertEnd("Indore Railway Station", 1170, 650);
metroRoute.insertEnd("High Court/ Hotel Residency", 650, 1200);
metroRoute.insertEnd("Palasia Square", 1200, 900);
metroRoute.insertEnd("Patrakar Colony", 900, 1200);
metroRoute.insertEnd("Bengali Square", 1200, 1400);
metroRoute.insertEnd("Khajrana Square", 1400, 1000);
metroRoute.insertEnd("Mumtaj Bag Colony", 1000, 800);
metroRoute.insertEnd("Radisson Square", 800, 1150);
metroRoute.insertEnd("Vijay Nagar Square", 1150, 620);
metroRoute.insertEnd("Meghdoot Garden", 620, 860);
metroRoute.insertEnd("Bapat Square", 860, 780);
metroRoute.insertEnd("Hira Nagar", 780, 850);
metroRoute.insertEnd("Chandragupta Square", 850, 780);
metroRoute.insertEnd("ISBT/ MR 10 Flyover", 780, 1760);
metroRoute.insertEnd("MR 10 Road", 1760, 1250);
metroRoute.insertEnd("Bhawarshala Square", 1250, 1000);

// Get user input for source and destination stations
const startStation = prompt("Enter the station:");
metroRoute.showNearest(startStation);
// const endStation = prompt("Enter the destination station:");

// Validate user input
// if (!startStation || !endStation) {
//     console.log("Invalid input. Please provide valid station names.");
// } else {
//     // Perform calculations
//     let stops = metroRoute.countStations(startStation, endStation);
//     const fare = metroRoute.calculateFare(stops);
//     let distance = metroRoute.calculateDistance(startStation, endStation);
//     const time = metroRoute.calculateTime(startStation, endStation);

//     // Display results
//     console.log(`Number of stops between ${startStation} and ${endStation}: ${stops}`);
//     console.log(`Fare from ${startStation} to ${endStation}: ₹${fare}`);
//     if(distance<1000)
//     {
//         console.log(`Distance between ${startStation} and ${endStation}: ${distance} meters`);
//     }
//     else
//     {
//         distance=distance/1000;
//         console.log(`Distance between ${startStation} and ${endStation}: ${distance} km`);

//     }
//     console.log(`Approximate travel time between ${startStation} and ${endStation}: ${time} minutes`);
// }
