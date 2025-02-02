// https://leetcode.com/problems/car-fleet/submissions/1527349377/

/**
 * Idea is to keep track of the time remaining for each car to reach target
 *
 * 1. if the speed of current car > speed of trailing car, it will eventually catch up and form a fleet.
 * 2. if the speed of current car < speed of trailing car, it will never catch the trailing car and it will be its own fleet
 *
 * Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
 *
 * sort the position w.rt to distance from target
 * sortedPositionArr = [10 8 5 3 0] closest to farthest
 *           speedArr = [2 4 1 3 1]
 * remaining Time for each car to reach destination = (target - position)/speed
 *                    = [1 1 7 3 12]
 *                      [A B C D E]
 *
 * it means A & B will form a fleet of speed 1 and reach at destination
 * since D is starting from behind C but C is taking more time to reach destination than D,
 * it means D will catch up C at somepoint and form a fleet
 *
 */
const carFleet = (target, pos, speed) => {
    const carArr = pos
        .map((el, i) => [pos[i], speed[i]]) // O(n)
        .sort((a, b) => b[0] - a[0]); // O(nlogn)

    let fleets = 0;
    let lastTime = 0; // Time of the last fleet's arrival at the target
    for (const [pos, speed] of carArr) { // O(n)
        let timeToTarget = (target - pos) / speed;
        // if time to reach target is larget than the lastime it was required to r3each target
        // If this car doesn't catch up to the last fleet, it forms a new fleet
        if (timeToTarget > lastTime) {
            fleets++;
            lastTime = timeToTarget;
        }
    }
    return fleets;
};

// can do some optimisation in TC by preventing loop through speed arr
// we also dont need to sort the position array
// just sort the indices as per position and refer them for both position and speed
const carFleet2 = function(target, position, speed) {
    const n = position.length; // Number of cars
    const carIndices = []; // To store the car indices (0, 1, 2, ..., n-1)
  
    // Step 1: Initialize carIndices with car indices.
    for (let i = 0; i < n; i++) {
      carIndices.push(i);
    }
  
    // Step 2: Sort the carIndices based on their positions in descending order (farther cars first).
    // Sorting cars by position helps us process from the farthest to the nearest car.
    carIndices.sort((a, b) => position[b] - position[a]);
  
    // Step 3: Initialize the first car's index as the lead car.
    let leadCarIndex = carIndices[0]; // The index of the car that starts farthest
    let fleetsCount = 1; // We know the first car always starts a new fleet
  
    // Step 4: Process the remaining cars.
    for (let i = 1; i < n; i++) {
      const currentCarIndex = carIndices[i]; // The current car we're processing
  
      // Calculate the time it would take for both the current car and the lead car to reach the target.
      // Instead of dividing, we multiply both sides of the equation to avoid division.
      const leadCarTime = (target - position[leadCarIndex]) / speed[leadCarIndex ];
      const currentCarTime = (target - position[currentCarIndex]) / speed[currentCarIndex];
  
      // Step 5: Check if the current car will catch up to the lead car.
      // The current car catches up if it reaches the target at the same time or earlier than the lead car.
      if (currentCarTime <= leadCarTime) {
        // If current car catches up with the lead car, it joins the same fleet.
        continue; // No new fleet is formed
      } else {
        // Otherwise, the current car starts a new fleet.
        fleetsCount++; // Increase the fleet count
        leadCarIndex = currentCarIndex; // The current car becomes the new lead car
      }
    }
  
    // Step 6: Return the total number of fleets.
    return fleetsCount;
};