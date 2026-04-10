import { Project, Paper, BlogPost, Skill } from './types';

export const personalInfo = {
  name: 'Your Name',
  title: 'Software Engineer & Researcher',
  tagline: 'Building thoughtful systems at the intersection of engineering and ideas.',
  bio: `I'm a software engineer with a focus on distributed systems and applied machine learning.
I enjoy writing about what I build and researching what I don't yet understand.
Currently based in Beirut, Lebanon.`,
  email: 'hello@yourname.com',
  github: 'https://github.com/yourname',
  linkedin: 'https://linkedin.com/in/yourname',
  twitter: 'https://twitter.com/yourname',
};

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Distributed Task Scheduler',
    description: 'A fault-tolerant, horizontally scalable task scheduler built with Raft consensus. Handles millions of scheduled jobs with sub-second latency and zero message loss.',
    tags: ['Go', 'Raft', 'Distributed Systems', 'Redis'],
    year: 2024,
    github: '#',
    link: '#',
    featured: true,
  },
  {
    id: 'p2',
    title: 'Neural Code Reviewer',
    description: 'An LLM-powered GitHub Action that reviews PRs for security vulnerabilities, performance anti-patterns, and style inconsistencies. Integrates with 20+ repos in production.',
    tags: ['TypeScript', 'LLMs', 'GitHub Actions', 'AST Analysis'],
    year: 2024,
    github: '#',
    featured: true,
  },
  {
    id: 'p3',
    title: 'Open-Source CLI Toolkit',
    description: 'A collection of developer productivity tools for working with large codebases — fast grep, semantic search, and intelligent file navigation.',
    tags: ['Rust', 'CLI', 'Tree-sitter', 'Open Source'],
    year: 2023,
    github: '#',
    link: '#',
  },
  {
    id: 'p4',
    title: 'Real-time Collaborative Editor',
    description: 'A CRDT-based collaborative text editor supporting offline-first edits with eventual consistency. Built as an exploration of operational transformation vs. CRDTs.',
    tags: ['React', 'CRDTs', 'WebSockets', 'TypeScript'],
    year: 2023,
    github: '#',
  },
  {
    id: 'p5',
    title: 'Packet Tracer Visualizer',
    description: 'An interactive web tool to visualize network packet flows, latency heatmaps, and congestion points in real-time from pcap captures.',
    tags: ['Python', 'D3.js', 'Network Analysis', 'Flask'],
    year: 2022,
    github: '#',
    link: '#',
  },
];

export const papers: Paper[] = [
  {
    id: 'r1',
    title: 'Adaptive Consensus Protocols for Heterogeneous Network Conditions',
    abstract: 'We propose AdaptRaft, an extension to the Raft consensus algorithm that dynamically adjusts heartbeat intervals and election timeouts based on observed network jitter. Evaluation on WAN deployments shows 34% lower tail latency compared to vanilla Raft.',
    venue: 'USENIX NSDI 2024',
    year: 2024,
    authors: ['Your Name', 'Co-Author A', 'Co-Author B'],
    link: '#',
    tags: ['Distributed Systems', 'Consensus', 'Networking'],
  },
  {
    id: 'r2',
    title: 'Semantic Code Search at Scale: A Comparative Study',
    abstract: 'A systematic comparison of embedding-based, AST-based, and hybrid approaches to semantic code search across 50 open-source repositories. We identify key failure modes and propose a benchmark suite for the community.',
    venue: 'ICSE 2023',
    year: 2023,
    authors: ['Your Name', 'Co-Author C'],
    link: '#',
    tags: ['Program Analysis', 'Machine Learning', 'Code Search'],
  },
  {
    id: 'r3',
    title: 'Memory-Efficient Fine-Tuning of Large Language Models',
    abstract: 'We introduce GradSlice, a gradient checkpointing strategy combined with mixed-precision training that reduces GPU memory usage by 41% with less than 2% throughput degradation on transformer models up to 13B parameters.',
    venue: 'NeurIPS Workshop 2023',
    year: 2023,
    authors: ['Your Name', 'Co-Author D', 'Co-Author E'],
    link: '#',
    tags: ['LLMs', 'Deep Learning', 'Efficiency'],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Why I rewrote our background job system in Rust',
    excerpt: 'After three years of fighting memory leaks and GC pauses in our Go-based job queue, I decided to rewrite the hot path in Rust. Here\'s what I learned — and what surprised me.',
    date: 'March 2024',
    readTime: 9,
    tags: ['Rust', 'Systems', 'Engineering'],
    link: '#',
  },
  {
    id: 'b2',
    title: 'The quiet power of boring architecture',
    excerpt: 'Not every system needs a Kafka cluster or a service mesh. A meditation on the virtue of choosing the dullest tool that gets the job done — and knowing when to reach for something more.',
    date: 'January 2024',
    readTime: 6,
    tags: ['Architecture', 'Opinion'],
    link: '#',
  },
  {
    id: 'b3',
    title: 'CRDTs explained without the math',
    excerpt: 'Conflict-free Replicated Data Types sound intimidating, but the core idea is elegant and surprisingly approachable. A visual walkthrough of how they work and when to use them.',
    date: 'November 2023',
    readTime: 12,
    tags: ['Distributed Systems', 'Deep Dive'],
    link: '#',
  },
  {
    id: 'b4',
    title: 'On reading papers as a working engineer',
    excerpt: 'I used to find research papers impenetrable. Then I changed how I read them. A practical guide to getting value from academic CS papers without a PhD.',
    date: 'September 2023',
    readTime: 7,
    tags: ['Learning', 'Research', 'Career'],
    link: '#',
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'Go', 'Rust', 'Python', 'C++'],
  },
  {
    category: 'Systems',
    items: ['Distributed Systems', 'Linux', 'Networking', 'Databases', 'Compilers'],
  },
  {
    category: 'Web & Cloud',
    items: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Kubernetes', 'Docker'],
  },
  {
    category: 'Research & ML',
    items: ['PyTorch', 'LLMs', 'Program Analysis', 'Benchmarking', 'Academic Writing'],
  },
];
