// 1. Define the workout plan (array of objects)
// Using const since the initial data won't change
const workouts = [
  { exercise: "Running", duration: 40, intensity: "high" },
  { exercise: "Yoga", duration: 25, intensity: "low" },
  { exercise: "Weights", duration: 35, intensity: "high" },
  { exercise: "Stretching", duration: 15, intensity: "low" },
  { exercise: "Cycling", duration: 50, intensity: "medium" },
];

// 2. Traditional function to calculate total time
// Uses reduce to sum durations
function getTotalTime(workoutList) {
  return workoutList.reduce((total, workout) => total + workout.duration, 0);
}

// 3. Arrow function to check intensity
// Ternary: true if duration > 30 or intensity === "high"
const isHighIntensity = (workout) =>
  workout.duration > 30 || workout.intensity === "high" ? true : false;

// 4. Use map to add a "highIntensity" property
// Creates a new array with an extra property
let taggedWorkouts = workouts.map((workout) => ({
  ...workout, // Spread to copy original properties
  highIntensity: isHighIntensity(workout),
}));

// 5. Filter high-intensity workouts
// Keeps workouts where highIntensity is true
let intenseWorkouts = taggedWorkouts.filter((workout) => workout.highIntensity);

// 6. Use a for loop to list all workouts
// Prints each workout with intensity status
console.log("Weekly Workout Plan:");
for (let i = 0; i < taggedWorkouts.length; i++) {
  let workout = taggedWorkouts[i];
  let intensityText = workout.highIntensity
    ? "High Intensity"
    : workout.intensity.charAt(0).toUpperCase() +
      workout.intensity.slice(1) +
      " Intensity";
  console.log(
    `Day ${i + 1}: ${workout.exercise} - ${
      workout.duration
    } mins (${intensityText})`
  );
}

// 7. Use a while loop to schedule workouts within time limit
// Simulates picking workouts until available time is used
let availableTime = 120; // Minutes available
let scheduled = [];
let currentIndex = 0;
while (currentIndex < workouts.length && availableTime > 0) {
  let workout = workouts[currentIndex];
  if (workout.duration <= availableTime) {
    scheduled.push(workout);
    availableTime -= workout.duration;
  }
  currentIndex++;
}

// Print scheduled workouts
console.log("\nScheduled within 120 minutes:");
scheduled.forEach((workout) => {
  console.log(`- ${workout.exercise} (${workout.duration} mins)`);
});
console.log(`Remaining time: ${availableTime} mins`);

// 8. Conditional to rate the workout plan
// Categorizes based on total time
let totalTime = getTotalTime(workouts);
let rating;
if (totalTime < 100) {
  rating = "Light week";
} else if (totalTime < 150) {
  rating = "Moderate week";
} else {
  rating = "Intense week";
}

// Final summary
console.log("\nSummary:");
console.log(`Total workout time: ${totalTime} mins`);
console.log(`Workout week: ${rating}`);
console.log("\nHigh-intensity workouts:");
intenseWorkouts.forEach((workout) => {
  console.log(`${workout.exercise} (${workout.duration} mins)`);
});


let intensityGroups = workouts.reduce((groups, workout) => {
  groups[workout.intensity] =
    (groups[workout.intensity] || 0) + workout.duration;
  return groups;
}, {});
console.log(intensityGroups);