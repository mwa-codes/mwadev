# mwadev.me - Muhammed Waqar Ahmed

> Personal portfolio showcasing my journey as a developer, student, freelancer, and entrepreneur - currently active in all phases

![mwadev.me](https://img.shields.io/badge/status-production%20ready-green)
![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-✓-blueviolet)
![Mobile Responsive](https://img.shields.io/badge/Mobile%20Responsive-✓-green)

## 🚀 Overview

**mwadev.me** is my professional portfolio website showcasing my multi-phase journey as a developer. Built with modern web technologies, it features a complete dark mode implementation and is fully responsive across all devices.

**Current Reality**: I'm actively working in all phases simultaneously:
- 🎓 **Learning**: Pursuing data science studies while mastering new technologies
- 🏗️ **Building**: Creating projects like QPDF, ResumeCraft, Math Tutor, and BartanERP  
- 💼 **Freelancing**: Offering web development and AI solutions to clients
- 🚀 **Entrepreneurship**: Building business solutions and scaling projects

## ✨ Features

### 🎨 Modern Design & UX
- **Dark/Light Mode**: Complete theme toggle with system preference detection
- **Fully Responsive**: Mobile-first design (320px to 1920px+)
- **Smooth Animations**: Framer Motion with optimized mobile performance
- **No White Flashing**: Seamless theme transitions and scrolling
- **Touch-Friendly**: Optimized buttons and navigation for mobile devices

### 🧭 Complete Sections
- **Hero Section**: Dynamic introduction with real-time status
- **Life Journey**: Interactive timeline showing all active phases
- **Projects Portfolio**: Real projects with live demos and GitHub links
- **Professional Services**: Complete pricing and service offerings
- **Contact Form**: Functional contact with Supabase integration and email notifications
- **Resume Download**: Professional PDF resume with download functionality

### 🛠 Production-Ready Stack
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS 4
- **Animations**: Framer Motion for smooth interactions
- **Database**: Supabase PostgreSQL with Row Level Security
- **Email**: Resend integration for contact form notifications
- **Theme**: Advanced dark mode with localStorage persistence
- **Icons**: Lucide React for consistent iconography

## 🏗 Architecture

### Modern Component Structure
```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Tailwind + custom CSS with dark mode
│   ├── layout.tsx      # Root layout with theme provider
│   └── page.tsx        # Main page composition
├── components/
│   ├── layout/         # Header with mobile menu + Footer
│   └── sections/       # All page sections
│       ├── HeroSection.tsx        # Landing with status
│       ├── JourneySection.tsx     # Multi-phase timeline
│       ├── ProjectsSection.tsx    # Portfolio showcase
│       ├── ServicesSection.tsx    # Business offerings
│       └── ContactSection.tsx     # Contact form
├── lib/
│   └── theme.tsx       # Advanced theme provider
└── public/
    ├── images/         # Project screenshots
    └── resume.html     # Professional resume
```

### Real Projects Showcase
- **QPDF**: PDF processing tool with AI features
- **ResumeCraft**: AI-powered resume builder
- **Math Tutor**: Educational platform with interactive learning
- **BartanERP**: Business management system

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Setup
```bash
# Clone the repository
git clone https://github.com/mwa-codes/mwadev.git
cd mwadev

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase and Resend credentials

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

## 🎯 Current Status

### ✅ Production Ready
- [x] Complete responsive design (mobile-first)
- [x] Dark/light theme with smooth transitions
- [x] All major sections implemented
- [x] Real project portfolio with live links
- [x] Professional services showcase with pricing
- [x] Functional contact form with email notifications
- [x] Resume download functionality
- [x] SEO optimization and meta tags
- [x] Performance optimizations
- [x] Mobile hamburger navigation
- [x] Touch-friendly interactions

### � Live Features
- **Theme Persistence**: Remembers your preference across visits
- **Email Notifications**: Contact form sends emails to m.waqar.ahmed@gmail.com
- **Database Storage**: All contacts saved to Supabase
- **Mobile Experience**: Optimized for all screen sizes
- **Real Content**: Actual projects, services, and information

## � Technical Highlights

### Performance & UX
- **Mobile-First**: Progressive enhancement from 320px upward
- **Theme Transitions**: Smooth dark/light mode without flashing
- **Touch Targets**: All interactive elements meet accessibility guidelines
- **Loading Performance**: Optimized images and efficient rendering
- **SEO Ready**: Complete meta tags, structured data, and sitemap

### Advanced Features
- **Theme Provider**: Context-based theme management with localStorage
- **Responsive Typography**: Progressive text scaling across breakpoints
- **Grid Layouts**: Mobile-stacked to desktop-grid automatically
- **Animation Performance**: Frame-rate optimized animations
- **Error Handling**: Graceful fallbacks and error boundaries

### Mobile Responsiveness
```css
/* Progressive scaling example */
text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl

/* Grid responsiveness */
grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Mobile-first buttons */
w-full sm:w-auto px-6 sm:px-8 py-3
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo, build command: `npm run build`
- **Cloudflare Pages**: Auto-deploy from GitHub
- **Traditional Hosting**: Use `npm run build` and upload `.next` folder

## 📱 Mobile Testing

The website is optimized for all devices:
- **320px+**: Small phones (iPhone SE)
- **375px+**: Standard phones (iPhone 12)
- **768px+**: Tablets (iPad)
- **1024px+**: Desktop and laptops
- **1440px+**: Large screens

## 🤝 Services Offered

As shown on the website, I offer:
- **Web Development**: $2,500 - Full-stack applications
- **AI Solutions**: $3,500 - Custom AI integrations
- **Mobile Apps**: $4,000 - Cross-platform development
- **E-commerce**: $3,000 - Complete online stores
- **Consulting**: $150/hour - Technical guidance
- **Maintenance**: $500/month - Ongoing support

## 📝 License

MIT License - Feel free to use as inspiration for your own portfolio!

## 🔗 Connect

- **Website**: [mwadev.me](https://mwadev.me)
- **GitHub**: [@mwa-codes](https://github.com/mwa-codes)
- **LinkedIn**: [Muhammed Waqar Ahmed](https://linkedin.com/in/mwaqar-ahmed)
- **Email**: [m.waqar.ahmed@gmail.com](mailto:m.waqar.ahmed@gmail.com)

---

**Learning, Building, Evolving — in Code and in Life** 🚀
