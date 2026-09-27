# FitLog

FitLog is a fitness activity tracker web app. It contains a diverse list of workouts. Users can add workouts to their daily plan or save them for later. The "My Plan" page displays the total number of exercises, calories burned, and total duration for the planned or saved workouts. Planned workouts can be marked as done, and both planned and saved workouts can be removed from the list.

## Technologies Used
* **Next.js** - Handles page routing and overall website styling. Custom layouts and the 404 error page are also handled by Next.js.
* **React Context API:** Helps with state management across the web app. It shares data between different components to add or save plans, and loads data from local storage when the page first loads.
* **TypeScript:** Ensures interactive UI components are built with safe, error-free code. Unexpected errors can be easily caught during development.
* **Tailwind CSS, DaisyUI:** Provide quick, responsive, and custom styling. DaisyUI supplies pre-styled elements like buttons, skeletons, and navbars used in this project.
* **Local Storage:** Securely saves workout plans directly in the browser without needing a database.
## 5 Key Features
1. **Workout Library:** Browse a grid of different exercises. Data is fetched via an API ([https://api.api-store.workers.dev/api/fitlog](https://api.api-store.workers.dev/api/fitlog)), which can be easily managed or replaced in the codebase.
2. **My Plan & Saved Tabs:** Add workouts to your plan or save them for later, utilizing a toggleable view to effortlessly switch between active and saved workout lists.
3. **Live Progress Metrics:** The "My Plan" dashboard automatically calculates and updates total exercises, total minutes, and total calories burned based on the user's current workout list. This data is dynamic; selecting either the plan or save tab will show the corresponding metrics for that specific tab.
4. **Dynamic Sorting Options:** Users can instantly reorganize their planned or saved workouts by duration, calories burned, or rating via a dedicated dropdown menu. Sorted data is displayed in descending order.
5. **Persistent Local Storage** Leverages a custom *useLocalStorage* hook to automatically save "Plan" and "Saved" workouts directly to the browser. Using custom utility functions for getting and setting data, this feature ensures your workout plans survive page reloads and browser closures seamlessly without needing a backend database.

##
The application is built with a focus on seamless user experience, incorporating a custom 404 error page for invalid routes, global loading spinners, and custom skeleton loaders to visually bridge data-fetching periods. Local storage utilities parse and stringify data in the background to ensure no workout is lost upon exiting the browser.