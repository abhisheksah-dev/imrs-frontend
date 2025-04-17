import React, { useState, useMemo } from "react";

// Data structures for metro route
class StationNode {
  constructor(name, distancePrev, distanceNext, trip) {
    this.name = name;
    this.distancePrev = distancePrev;
    this.distanceNext = distanceNext;
    this.prev = null;
    this.next = null;
    this.trip = trip || [];
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(name, distancePrev, distanceNext, trip) {
    const newNode = new StationNode(name, distancePrev, distanceNext, trip);
    this.head = newNode;
    this.tail = newNode;
  }

  insertEnd(name, distancePrev, distanceNext, trip) {
    if (!this.head) {
      this.insertFirst(name, distancePrev, distanceNext, trip);
    } else {
      const newNode = new StationNode(name, distancePrev, distanceNext, trip);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.head.prev = newNode;
      this.tail = newNode;
    }
  }

  // Return list of { station, trips } between start and end
  getTripDetails(startStation, endStation) {
    const results = [];
    let current = this.head;

    // Find start node
    while (current.name !== startStation) {
      current = current.next;
      if (!current) return results;
    }
    const startNode = current;

    // Find end node
    current = this.head;
    while (current.name !== endStation) {
      current = current.next;
      if (!current) return results;
    }
    const endNode = current;

    // Count forward vs backward
    let forward = startNode;
    let backward = startNode;
    let fcount = 0;
    let bcount = 0;
    while (forward !== endNode) {
      fcount++;
      forward = forward.next;
    }
    while (backward !== endNode) {
      bcount++;
      backward = backward.prev;
    }

    // Traverse in shorter direction
    if (fcount <= bcount) {
      current = startNode;
      while (current !== endNode) {
        if (current.trip.length)
          results.push({ station: current.name, trips: current.trip });
        current = current.next;
      }
    } else {
      current = startNode;
      while (current !== endNode) {
        if (current.trip.length)
          results.push({ station: current.name, trips: current.trip });
        current = current.prev;
      }
    }

    // Include end station
    if (endNode.trip.length)
      results.push({ station: endNode.name, trips: endNode.trip });
    return results;
  }
}

const TripPlanner = () => {
  // Initialize metro route once
  const metroRoute = useMemo(() => {
    const list = new CircularLinkedList();
    list.insertFirst("Super Corridor 1", 1000, 1500, []);
    list.insertEnd("Super Corridor 2", 1500, 1000, []);
    list.insertEnd("Super Corridor 3", 1000, 1250, []);
    list.insertEnd("Super Corridor 4", 1250, 1250, []);
    list.insertEnd("Super Corridor 5", 1250, 990, []);
    list.insertEnd("Super Corridor 6", 990, 650, []);
    list.insertEnd("Gandhi Nagar/Nanod", 650, 1400, []);
    list.insertEnd("Airport", 1400, 1620, [
      "Shree Bijasan Mata Mandir",
      "Airport",
    ]);
    list.insertEnd("BSF/ Kalani Nagar", 1620, 1140, [
      "Aanandam Adventure Park",
    ]);
    list.insertEnd("Ramchandra Nagar Square", 1140, 875, []);
    list.insertEnd("Bada Ganpati", 875, 600, [
      "Bada Ganpati Mandir",
      "Shree Ranjeet Hanuman Dham",
    ]);
    list.insertEnd("Chota Ganpati", 600, 900, [
      "Chota Ganpati Mandir",
      "Lal Bagh Palace",
      "Shri Annapurna Temple",
    ]);
    list.insertEnd("Rajwada Palace", 900, 1170, [
      "Rajwada Palace",
      "Khazuri Bazaar",
      "Novelty Market",
      "Regional Park",
    ]);
    list.insertEnd("Indore Railway Station", 1170, 650, [
      "Railway Station",
      "Sarwate Bus Stand",
    ]);
    list.insertEnd("High Court/ Hotel Residency", 650, 1200, [
      "Kamla Nehru Zoo",
      "Navlakha Bus Stand",
    ]);
    list.insertEnd("Palasia Square", 1200, 900, [
      "I-Bus Station",
      "56-Dukaan Chaupati",
    ]);
    list.insertEnd("Patrakar Colony", 900, 1200, []);
    list.insertEnd("Bengali Square", 1200, 1400, []);
    list.insertEnd("Khajrana Square", 1400, 1000, ["Khazrana Ganesh Mandir"]);
    list.insertEnd("Mumtaj Bag Colony", 1000, 800, []);
    list.insertEnd("Radisson Square", 800, 1150, ["Divya Shakti Peeth Mandir"]);
    list.insertEnd("Vijay Nagar Square", 1150, 620, ["Kalka Mata Mandir"]);
    list.insertEnd("Meghdoot Garden", 620, 860, ["Meghdoot Garden"]);
    list.insertEnd("Bapat Square", 860, 780, []);
    list.insertEnd("Hira Nagar", 780, 850, []);
    list.insertEnd("Chandragupta Square", 850, 780, []);
    list.insertEnd("ISBT/ MR 10 Flyover", 780, 1760, []);
    list.insertEnd("MR 10 Road", 1760, 1250, []);
    list.insertEnd("Bhawarshala Square", 1250, 1000, []);
    return list;
  }, []);

  // Extract station names
  const stationNames = useMemo(() => {
    const names = [];
    if (!metroRoute.head) return names;
    let current = metroRoute.head;
    do {
      names.push(current.name);
      current = current.next;
    } while (current !== metroRoute.head && current);
    return names;
  }, [metroRoute]);

  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");
  const [tripResults, setTripResults] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (!startStation || !endStation || startStation === endStation) return;
    setTripResults(metroRoute.getTripDetails(startStation, endStation));
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-800 p-2">
        <h1 className="text-white text-center text-2xl font-bold uppercase ">
          Trip planner
        </h1>
      </div>

      {/* Input Section */}
      <div className="bg-blue-100 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-blue-700">
              From
            </label>
            <select
              value={startStation}
              onChange={(e) => setStartStation(e.target.value)}
              className="w-full p-3 rounded-lg border border-blue-300"
            >
              <option value="">Select Station</option>
              {stationNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-blue-700">To</label>
            <select
              value={endStation}
              onChange={(e) => setEndStation(e.target.value)}
              className="w-full p-3 rounded-lg border border-blue-300"
            >
              <option value="">Select Station</option>
              {stationNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg text-xl uppercase"
            >
              plan trip
            </button>
          </div>
        </form>
      </div>

      {/* Results Section */}
      <div className="bg-white p-6">
        {hasSubmitted && tripResults.length === 0 && (
          <p className="text-center text-gray-600">
            No tourist places found for the selected route.
          </p>
        )}

        {tripResults.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Places to Visit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tripResults.map(({ station, trips }) => (
                <div
                  key={station}
                  className="border border-blue-200 rounded-lg p-4 bg-blue-50"
                >
                  <h3 className="font-bold mb-2 text-blue-800">{station}</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {trips.map((place) => (
                      <li key={place}>{place}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TripPlanner;
