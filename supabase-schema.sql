-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Create contacts table
create table public.contacts (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  status text default 'new' check (status in ('new', 'read', 'replied')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create blog_posts table
create table public.blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  excerpt text not null,
  content text not null,
  published boolean default false,
  featured boolean default false,
  tags text[] default '{}',
  category text not null,
  read_time text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create projects table
create table public.projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text not null,
  image text,
  tags text[] default '{}',
  category text not null,
  status text not null check (status in ('live', 'in-development', 'planned', 'concept')),
  github_url text,
  demo_url text,
  features text[] default '{}',
  featured boolean default false,
  order_index integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create newsletter_subscribers table
create table public.newsletter_subscribers (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create updated_at triggers
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger handle_blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.handle_updated_at();

create trigger handle_projects_updated_at
  before update on public.projects
  for each row execute function public.handle_updated_at();

-- Enable Row Level Security (RLS)
alter table public.contacts enable row level security;

alter table public.blog_posts enable row level security;

alter table public.projects enable row level security;

alter table public.newsletter_subscribers enable row level security;

-- Create policies for public read access
create policy "Public can read published blog posts" on public.blog_posts for
select using (published = true);

create policy "Public can read projects" on public.projects for
select using (true);

-- Policies for contact form (public can insert)
create policy "Anyone can submit contact form" on public.contacts for
insert
with
    check (true);

-- Policies for newsletter (public can insert)
create policy "Anyone can subscribe to newsletter" on public.newsletter_subscribers for
insert
with
    check (true);

-- Sample data for testing
insert into
    public.blog_posts (
        title,
        slug,
        excerpt,
        content,
        published,
        featured,
        tags,
        category,
        read_time
    )
values (
        'Getting Started with Next.js 15',
        'getting-started-nextjs-15',
        'My journey learning Next.js 15 and modern web development.',
        'Full blog post content here...',
        true,
        true,
        '{"Next.js", "React", "Learning"}',
        'Learning',
        '5 min read'
    ),
    (
        'Building My First AI Project',
        'building-first-ai-project',
        'Lessons learned while building an AI-powered PDF chatbot.',
        'Full blog post content here...',
        true,
        false,
        '{"AI", "OpenAI", "Projects"}',
        'Projects',
        '8 min read'
    );

insert into
    public.projects (
        title,
        description,
        tags,
        category,
        status,
        features,
        featured,
        order_index
    )
values (
        'AI PDF Chatbot',
        'An intelligent chatbot that can read and answer questions about PDF documents.',
        '{"Next.js", "OpenAI", "Vector DB"}',
        'ai',
        'in-development',
        '{"PDF processing", "Vector embeddings", "Real-time chat"}',
        true,
        1
    ),
    (
        'Smart Home Dashboard',
        'IoT dashboard for monitoring and controlling smart home devices.',
        '{"React", "IoT", "Arduino"}',
        'iot',
        'planned',
        '{"Real-time monitoring", "Device control", "Energy tracking"}',
        false,
        2
    ),
    (
        'Personal Website',
        'This very website - built with Next.js and Supabase.',
        '{"Next.js", "Supabase", "Tailwind"}',
        'web',
        'live',
        '{"Responsive design", "Dark mode", "Contact form"}',
        true,
        0
    );