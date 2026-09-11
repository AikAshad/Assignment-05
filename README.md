Dev Stack Builder

About the Project
Dev Stack Builder is a modern, fully responsive React web application designed for developers to explore various technologies, compare them side by side, and build their ideal development stack seamlessly.

Technologies Used
- React.js
- Tailwind CSS
- DaisyUI
- React-Toastify
- Vite

Key Features
1. Dynamic Technology Grid: Fetches 12 technology items from a local JSON file and displays them in a clean 3-column responsive grid with badges, difficulty levels, and ratings.
2. Interactive Stack Management: Users can add technologies to their Your Stack sidebar with duplicate prevention, remove specific items, or clear the entire stack at once with instant feedback.
3. Responsive Design and Toast Alerts: Fully optimized for mobile, tablet, and desktop viewports, integrated with smooth UI animations and React-Toastify notifications.

React Conceptual Questions and Answers

1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like syntax directly inside JavaScript files. React uses it because it makes the code much easier to read, write, and understand while building UI components.

2. What is the difference between props and state?
Props are passed down from a parent component to a child component and are read-only. State is managed internally within a component, is mutable, and changes over time based on user interaction or data updates.

3. What does the useState hook do, and where did you use it in this project?
useState is a React hook that lets us add state to functional components. In this project, we used it in App.jsx to keep track of the selected technologies in the user's stack and in TechGrid.jsx to manage the loading state and fetched technology data.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect lets us perform side effects like data fetching in functional components. We needed it in TechGrid.jsx to fetch the data.json file once when the component first loads so that the technologies are displayed immediately.

5. Why does every item in a .map() list need a unique key prop?
React uses key props to uniquely identify which items have changed, been added, or been removed in a list. This helps React optimize rendering performance and maintain the correct state of elements.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means displaying different UI elements or components based on certain conditions. For example, in Sidebar.jsx, we used it to show either the selected items list or the empty state message.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to child data is passed down using props. A child sends data or triggers an action back to the parent by calling a callback function passed down via props from the parent.
