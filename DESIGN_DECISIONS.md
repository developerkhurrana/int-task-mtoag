# Design Decisions for MTOAG Digital Solutions

## 1. Component-Driven Architecture

- Each section (Hero, Services, Projects, Testimonials, Blog, Footer) is a separate React component for modularity and reusability.
- Promotes maintainability and scalability as the project grows.

## 2. Apple-Style Carousel for Projects

- Inspired by Apple's product carousels for a premium, interactive feel.
- Uses smooth horizontal scrolling and card animations to highlight featured projects.

## 3. Bento Grid for Services

- Services are displayed in a visually balanced bento grid, mixing large and small cards for emphasis.
- Each card features an icon, image, and concise description.

## 4. Animated, Accessible Buttons

- CTAs use animated SVG arrows and color transitions for modern feedback.
- Buttons are keyboard accessible and have clear focus states.

## 5. Consistent Theming

- Orange is the primary accent color for headings, buttons, and hover states, reinforcing brand identity.
- Neutral backgrounds and subtle gradients provide visual hierarchy.

## 6. Responsive & Mobile-First Design

- All layouts are fully responsive, tested on mobile, tablet, and desktop.
- Uses Tailwind CSS breakpoints and utility classes for adaptive design.

## 7. Accessibility

- Semantic HTML and ARIA attributes where needed.
- Sufficient color contrast and keyboard navigation for all interactive elements.

## 8. Static Data with Easy Migration Path

- Demo uses static arrays for projects, testimonials, and blogs.
- Data structure supports easy migration to dynamic sources (APIs, CMS) in the future.

## 9. Performance

- Optimized images and lazy loading for fast page loads.
- Minimal external dependencies to reduce bundle size.

## 10. Deployment

- Designed for seamless deployment on Vercel with no required environment variables for the demo.
