# MTOAG Digital Solutions & Technology Services

## Project Overview

This project is a modern, responsive web application for MTOAG, a digital solutions and technology services agency. Built with Next.js, React, and Tailwind CSS, it showcases the agency's services, projects, testimonials, and blog content with a focus on performance, accessibility, and engaging UI/UX.

## Key Design Decisions

- **Component-Driven Architecture:** All major sections (Hero, Services, Projects, Testimonials, Blog, Footer) are modular React components for reusability and maintainability.
- **Apple-Style Carousel:** The featured projects section uses a custom Apple-style card carousel for interactive, visually appealing project previews.
- **Bento Grid for Services:** Services are presented in a bento grid layout, balancing imagery and text for clarity and impact.
- **Animated Buttons:** CTAs like "View All Projects" and "Get a Free Quote" use animated icons and color transitions for modern, tactile feedback.
- **Dynamic Testimonials:** The testimonials carousel features real client feedback, enhancing trust and credibility.
- **Consistent Theming:** Orange is used as the primary accent color for headings, buttons, and hover states, ensuring brand consistency.
- **Accessibility:** All interactive elements are keyboard accessible, with sufficient color contrast and semantic HTML.

## Component Structure

- `app/page.tsx`: Main page composition and section ordering
- `components/ui/apple-cards-carousel.tsx`: Apple-style project carousel logic
- `components/apple-cards-carousel-demo.tsx`: Featured projects data and layout
- `components/bento-grid-demo-2.tsx`: Services bento grid
- `components/ui/testimonials-carousel.tsx`: Testimonials carousel
- `components/blog-section.tsx`: Blog/news section
- `components/footer.tsx`: Footer with contact and credits

## Styling Approach

- **Tailwind CSS** for utility-first, responsive design
- **Custom transitions** for hover/active states on buttons and cards
- **Line clamping** and `overflow-hidden` to prevent text/image overflow

## Data Handling

- All data (projects, testimonials, blogs) is currently static for demo purposes, but the structure supports easy migration to dynamic sources (APIs, CMS).

## Accessibility

- Semantic HTML, ARIA labels where needed
- Keyboard navigation for all interactive elements
- Sufficient color contrast and focus states

## Deployment

- Ready for deployment on Vercel. To deploy:
  1. Push to GitHub
  2. Connect the repo to Vercel
  3. Set up environment variables if needed (none required for static demo)
  4. Deploy and monitor via Vercel dashboard

## Contact

For questions or collaboration, contact: thekshitijkhurrana@gmail.com

---

# Design Decisions & Interview Notes

See `DESIGN_DECISIONS.md` for a detailed breakdown of design choices and `INTERVIEW_QUESTIONS.md` for interview-style explanations of frontend concepts used in this project.
