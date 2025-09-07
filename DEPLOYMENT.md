# Deployment Guide for mwadev.me

## 🚀 Hosting on Vercel (Recommended)

### Step 1: Prepare for Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial mwadev.me website setup"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Import your repository
   - Vercel will auto-detect Next.js configuration

### Step 2: Database Setup Options

#### Option A: Vercel Postgres (Recommended for simplicity)
```bash
# In your Vercel dashboard:
# 1. Go to Storage tab
# 2. Create Postgres database
# 3. Copy the connection string
# 4. Add to Environment Variables
```

#### Option B: Supabase (Recommended for features)
```bash
# 1. Go to supabase.com
# 2. Create new project
# 3. Get connection string from Settings > Database
# 4. Add to Vercel environment variables
```

#### Option C: PlanetScale (MySQL alternative)
```bash
# 1. Go to planetscale.com
# 2. Create database
# 3. Get connection string
# 4. Update schema.prisma to use mysql provider
```

### Step 3: Environment Variables in Vercel

Add these in your Vercel project settings:

```env
DATABASE_URL=your_database_connection_string
NEXTAUTH_SECRET=your_random_secret_key
NEXTAUTH_URL=https://mwadev.me
```

### Step 4: Database Migration

```bash
# Run this after setting up your database
npx prisma db push

# Or use migrations for production
npx prisma migrate deploy
```

## 📧 Contact Form Setup

### Option A: Simple Email (Current Implementation)
- Contact form saves to database
- You check submissions in your admin panel
- No email sending (simplest)

### Option B: Email Notifications
Add to your environment variables:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Option C: Email Services
- **Resend**: Modern email API (recommended)
- **SendGrid**: Enterprise solution
- **Nodemailer**: DIY SMTP

## 🔄 Development Workflow

### Local Development
```bash
npm run dev          # Start development server
npx prisma studio    # Database admin UI
npx prisma db push   # Update database schema
```

### Database Management
```bash
npx prisma migrate dev    # Create new migration
npx prisma generate      # Generate Prisma client
npx prisma db seed       # Seed database with sample data
```

## 📈 Scaling Your Site

### Phase 1: Static Site (Current)
- ✅ Next.js on Vercel
- ✅ Contact form with database
- ✅ Blog ready for content
- ✅ Project showcase

### Phase 2: Dynamic Content
- 📝 Admin panel for blog posts
- 🔐 Authentication (NextAuth.js)
- 📊 Analytics (Vercel Analytics)
- 📧 Newsletter (ConvertKit/Mailchimp)

### Phase 3: Advanced Features
- 🤖 AI chatbot integration
- 📱 Mobile app
- 💳 Payment processing
- 🔍 Full-text search

## 🎨 Content Management

### Blog Posts
1. Create MDX files in `/content/blog/`
2. Or use database with rich text editor
3. Or integrate with CMS (Contentful, Sanity)

### Projects
1. Update projects in database
2. Add images to `/public/projects/`
3. Create project detail pages

## 🔧 Maintenance

### Regular Updates
```bash
npm update              # Update packages
npx prisma db push     # Update database
git push               # Deploy to Vercel
```

### Monitoring
- Vercel Analytics (built-in)
- Error tracking (Sentry)
- Performance monitoring
- Database monitoring

## 💡 Next Steps

1. **Immediate**: Deploy to Vercel, set up database
2. **Week 1**: Add real content, test contact form
3. **Month 1**: Add blog posts, refine projects
4. **Month 3**: Add admin panel, analytics
5. **Month 6**: Advanced features, integrations

## 🆘 Troubleshooting

### Common Issues
- **Build fails**: Check environment variables
- **Database connection**: Verify DATABASE_URL
- **Images not loading**: Check `/public/` folder
- **Fonts not loading**: Verify Google Fonts import

### Getting Help
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Prisma Documentation: [prisma.io/docs](https://prisma.io/docs)

Remember: Your site grows with you! Start simple and add features as you need them.
