# mwadev.me - Always Developing

> A personal website that grows with me from student → builder → freelancer → professional developer

![mwadev.me](https://img.shields.io/badge/status-in%20development-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)

## 🚀 Overview

**mwadev.me** is my personal brand and development journey website. It's designed to evolve with me as I progress through different phases of my career:

- **Student Phase**: Learning blog, notes, and experiments
- **Builder Phase**: Portfolio projects and technical showcases  
- **Freelancer Phase**: Services, case studies, client testimonials
- **Professional Phase**: SaaS experiments, team leadership, mentoring

## ✨ Features

### 🎨 Design & UX
- Clean, modern design with futuristic touches
- Mobile-first responsive layout
- Dark/light mode toggle with system preference detection
- Smooth animations with Framer Motion
- Custom blob animations and micro-interactions

### 🧭 Navigation & Sections
- **Hero Section**: Personal introduction with current status
- **Journey Timeline**: Interactive roadmap of career progression
- **Projects Showcase**: Filterable portfolio with live demos
- **Learning Blog**: Technical articles and learning notes
- **Contact Form**: Functional contact with database storage

### 🛠 Technical Stack
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Animations**: Framer Motion for smooth interactions
- **Database**: Prisma ORM + PostgreSQL (Vercel Postgres)
- **Hosting**: Vercel with automatic deployments
- **Icons**: Lucide React for consistent iconography

## 🏗 Architecture

### Modular Component Structure
```
src/
├── app/                 # Next.js App Router
├── components/
│   ├── layout/         # Header, Footer, Navigation
│   ├── sections/       # Page sections (Hero, Projects, etc.)
│   └── ui/             # Reusable UI components
├── lib/                # Utilities (theme, database, etc.)
└── types/              # TypeScript type definitions
```

### Database Schema
- **BlogPost**: Articles and learning notes
- **Project**: Portfolio items with tags and status
- **Contact**: Form submissions and inquiries
- **Newsletter**: Email subscribers

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (optional for development)

### Installation
```bash
# Clone the repository
git clone https://github.com/muhammed-waqar/mwadev.git
cd mwadev

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database URL

# Set up database (optional)
npx prisma db push

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

## 🎯 Current Status

### ✅ Completed
- [x] Responsive website structure
- [x] Dark/light theme toggle
- [x] Hero section with personal branding
- [x] Interactive journey timeline
- [x] Project showcase with filters
- [x] Blog section layout
- [x] Functional contact form
- [x] Database schema design
- [x] API routes for contact handling

### 🚧 In Progress
- [ ] Content management system
- [ ] Blog post creation workflow
- [ ] Project detail pages
- [ ] Email notifications
- [ ] Analytics integration

### 📋 Planned
- [ ] Admin dashboard
- [ ] Newsletter integration
- [ ] Advanced search
- [ ] Performance optimizations
- [ ] SEO enhancements

## 🛣 Roadmap

### Phase 1: Foundation (Current)
Focus on core website functionality and content structure.

### Phase 2: Content Creation
Add real projects, write technical blog posts, refine design.

### Phase 3: Growth Features
Add analytics, newsletter, admin panel, and advanced integrations.

### Phase 4: Professional Platform
Services pages, client portal, advanced project management.

## 📊 Tech Highlights

### Performance
- Static generation where possible
- Image optimization with Next.js
- Minimal JavaScript bundle
- Efficient CSS with Tailwind

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- WCAG 2.1 compliance focus

### SEO
- Meta tags and Open Graph
- Structured data markup
- Sitemap generation
- Fast loading times

## 🤝 Contributing

This is a personal project, but I welcome:
- Bug reports and suggestions
- Code review and feedback
- Ideas for new features
- Design improvements

## 📝 License

This project is open source under the MIT License. Feel free to use it as inspiration for your own personal website!

## 🔗 Links

- **Live Site**: [mwadev.me](https://mwadev.me) *(coming soon)*
- **GitHub**: [github.com/muhammed-waqar](https://github.com/muhammed-waqar)
- **LinkedIn**: [linkedin.com/in/muhammed-waqar](https://linkedin.com/in/muhammed-waqar)
- **Email**: [muhammed@mwadev.me](mailto:muhammed@mwadev.me)

---

**Always Learning, Always Building** 🚀
