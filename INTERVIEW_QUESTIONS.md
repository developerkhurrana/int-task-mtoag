# Interview Questions & Answers: MTOAG Digital Solutions Project

## 1. Why use a component-driven architecture?

**Answer:** Component-driven architecture allows for modular, reusable, and maintainable code. Each UI section is encapsulated, making it easier to test, update, and scale.

## 2. How is state managed in this project?

**Answer:** Most state is local to components (e.g., carousel scroll position, testimonial index). For a larger app, global state management (like Redux or Context API) could be introduced, but is unnecessary for this demo.

## 3. How did you ensure accessibility?

**Answer:** By using semantic HTML, ARIA labels, keyboard-accessible controls, and sufficient color contrast. Interactive elements have focus states and are navigable via keyboard.

## 4. What performance optimizations were made?

**Answer:** Images are optimized and lazy-loaded. The codebase avoids unnecessary dependencies and uses static data for fast initial loads. Tailwind CSS ensures minimal, purged CSS output.

## 5. How is responsive design handled?

**Answer:** Tailwind CSS utility classes and breakpoints are used to ensure layouts adapt to all screen sizes. Components are tested on mobile, tablet, and desktop.

## 6. Why use Tailwind CSS?

**Answer:** Tailwind enables rapid development of consistent, responsive UIs with utility classes. It reduces the need for custom CSS and makes design changes easy.

## 7. How are UI/UX best practices reflected?

**Answer:** The site uses clear visual hierarchy, interactive feedback (hover/active states), and concise, relevant content. Animations and transitions enhance engagement without sacrificing usability.

## 8. How would you migrate to dynamic data?

**Answer:** Replace static arrays with API calls or CMS integration. The component structure supports easy data source swapping.

## 9. How is the project deployed?

**Answer:** The project is ready for Vercel deployment. Push to GitHub, connect to Vercel, and deploy. No environment variables are needed for the static demo.

## 10. What would you improve next?

**Answer:** Add dynamic content via a CMS, implement user authentication for a dashboard, and further enhance accessibility with automated testing tools.
