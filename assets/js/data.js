// ==========================================
// PORTFOLIO CONFIGURATION & DATA
// You can edit any details in this file to customize your portfolio!
// ==========================================

const portfolioData = {
  personal: {
    name: "Arpit Kumar Saini",
    title: "Full-Stack Web Developer & Meta Ads Specialist",
    tagline: "I build high-converting websites and scale revenue with profitable Meta Ads & Social Media strategies.",
    experienceYears: "3+",
    availability: "Available for Freelance & Monthly Retainers",
    email: "arpitsaini974@gmail.com",
    phone: "+91 8000795118 / +91 9783563910",
    whatsappNumber: "919783563910", // WhatsApp number with country code (91)
    whatsappPreFilledMsg: "Hi Arpit! I saw your portfolio and I would like to discuss a project (Web Development / Meta Ads / Social Media).",
    location: "India (Serving Clients Worldwide)",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },

  // Key Impact Metrics (Shows up in the Hero Counter Bar)
  stats: [
    { value: 35, suffix: "+", label: "Websites & Landing Pages Delivered", icon: "code" },
    { value: 25, suffix: "L+", prefix: "₹", label: "Meta Ad Spend Managed", icon: "trending-up" },
    { value: 4.8, suffix: "x", label: "Average Campaign ROAS", icon: "zap" },
    { value: 100, suffix: "%", label: "Client Satisfaction & Delivery", icon: "award" }
  ],

  // Core Value Propositions / Services
  services: [
    {
      id: "web-dev",
      category: "Development",
      badge: "High-Performance Code",
      icon: "laptop",
      title: "Full-Stack Web Development",
      description: "Custom, lightning-fast, and responsive websites engineered to turn casual visitors into paying customers. No bloated slow themes.",
      highlights: [
        "Custom Landing Pages & High-Converting Funnels",
        "E-Commerce Stores (Shopify, WooCommerce, Custom)",
        "React.js, Next.js, Tailwind CSS & Clean Modern UI",
        "90+ Google PageSpeed Score & Mobile-First Design",
        "Seamless WhatsApp, CRM & Payment Gateway Integrations"
      ]
    },
    {
      id: "meta-ads",
      category: "Paid Advertising",
      badge: "High ROAS Campaigns",
      icon: "target",
      title: "Meta Ads (Facebook & Instagram Ads)",
      description: "Data-backed ad campaigns engineered for profit. From laser-focused targeting to viral hook creatives and CAPI tracking.",
      highlights: [
        "Meta Pixel & Conversions API (CAPI) Zero-Loss Setup",
        "High-Converting Ad Creatives & Video Hook Scripts",
        "Advanced Retargeting & Lookalike Funnels",
        "A/B Split Testing for Lowest Cost Per Lead / Purchase",
        "Weekly Transparent ROAS & Metrics Dashboards"
      ]
    },
    {
      id: "social-media",
      category: "Brand Growth",
      badge: "Organic & Viral",
      icon: "share-2",
      title: "Social Media Management & Growth",
      description: "Turn your social media channels into an automated lead machine with high-retention reels, carousels, and community management.",
      highlights: [
        "End-to-End Content Strategy & Monthly Planning Calendar",
        "High-Retention Viral Reels & Premium Carousel Design",
        "Profile Optimization & Bio Funnel for Direct Leads",
        "Audience Engagement & Direct Message Lead Qualification",
        "Monthly Growth Analytics & Competitor Benchmarking"
      ]
    },
    {
      id: "hybrid-growth",
      category: "All-in-One",
      badge: "Most Popular for Brands",
      icon: "rocket",
      title: "Complete Digital Growth Engine",
      description: "The unfair advantage: I don't just build your website, I drive the paying traffic to it so you get immediate sales and return on investment.",
      highlights: [
        "Custom Landing Page + Meta Ads Combo",
        "Ad Copy matched with Landing Page Messaging for High CVR",
        "End-to-End Analytics (from first click to bank account)",
        "Single Point of Contact for Design, Code & Marketing",
        "Scale your business without hiring multiple agencies"
      ]
    }
  ],

  // Dual Skill Matrix / Tools
  techStack: {
    development: [
      { name: "React.js / Next.js", level: "Advanced", icon: "fab fa-react" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "fab fa-js" },
      { name: "HTML5 & Modern CSS3", level: "Expert", icon: "fab fa-html5" },
      { name: "Tailwind CSS", level: "Expert", icon: "fas fa-wind" },
      { name: "Node.js & REST APIs", level: "Proficient", icon: "fab fa-node" },
      { name: "Shopify & WooCommerce", level: "Advanced", icon: "fab fa-shopify" },
      { name: "WordPress / Headless", level: "Expert", icon: "fab fa-wordpress" },
      { name: "Git & Deployment (Vercel/Hostinger)", level: "Advanced", icon: "fab fa-git-alt" }
    ],
    marketing: [
      { name: "Meta Ads Manager", level: "Expert", icon: "fab fa-meta" },
      { name: "Conversions API & Pixel", level: "Expert", icon: "fas fa-code-branch" },
      { name: "Instagram Growth Strategy", level: "Advanced", icon: "fab fa-instagram" },
      { name: "Google Analytics 4 (GA4)", level: "Advanced", icon: "fas fa-chart-line" },
      { name: "Ad Creative & Copywriting", level: "Expert", icon: "fas fa-pen-nib" },
      { name: "Canva & Figma UI/UX", level: "Advanced", icon: "fab fa-figma" },
      { name: "A/B Testing & CVR Optimization", level: "Advanced", icon: "fas fa-vial" },
      { name: "Lead Funnels & WhatsApp Automation", level: "Expert", icon: "fab fa-whatsapp" }
    ]
  },

  // Featured Projects with Case Studies
  projects: [
    {
      id: 1,
      title: "Aura Luxury - E-Commerce Store & Scale Campaign",
      tagline: "Custom E-Commerce Storefront + Meta Ads Scaled to 5.4x ROAS",
      category: "both", // 'web', 'marketing', or 'both'
      image: "assets/images/ecommerce.jpg",
      liveUrl: "#",
      browserUrl: "https://aura-luxury.store",
      tags: ["Next.js", "Tailwind", "Meta Ads", "Shopify", "5.4x ROAS"],
      metrics: {
        highlight: "5.4x ROAS",
        secondary: "₹18.4L Revenue in 60 Days",
        extra: "Page Speed 96/100"
      },
      problem: "Client had a slow Shopify store loading in 5.8s, with ad campaigns running at break-even (1.4x ROAS) due to high bounce rates.",
      solution: "Engineered a custom headless Next.js frontend with sub-second page loads, redesigned the checkout funnel, and relaunched Meta Ads with UGC video hooks and retargeting carousels.",
      results: [
        "Store bounce rate dropped from 68% to 24%",
        "Meta Ads ROAS scaled from 1.4x to 5.4x within 45 days",
        "Over 1,420 orders generated profitably"
      ]
    },
    {
      id: 2,
      title: "Vexivo Brand - Social Media & Lead Gen Funnel",
      tagline: "450+ High-Ticket Qualified B2B Leads at ₹42 CPL",
      category: "marketing",
      image: "assets/images/meta_ads.jpg",
      liveUrl: "#",
      browserUrl: "https://adsmanager.facebook.com/campaigns/vexivo",
      tags: ["Meta Ads", "Instant Form Funnel", "Lead Gen", "Instagram Reels"],
      metrics: {
        highlight: "₹42 Cost/Lead",
        secondary: "450+ Qualified Leads",
        extra: "4.8% Click-Through Rate"
      },
      problem: "Client was spending ₹120+ per lead using basic Facebook boost posts with low intent and junk enquiries.",
      solution: "Created custom lead magnet angle, high-hook video creatives, and an interactive conditional WhatsApp qualifying flow that filtered serious buyers only.",
      results: [
        "Cost per lead reduced by 65% (₹120 down to ₹42)",
        "Over ₹14 Lakhs in closed client contracts from the generated pipeline",
        "Social media account grew by 6,800 targeted industry followers"
      ]
    },
    {
      id: 3,
      title: "Digimozo Agency Platform - High-Performance Web Portal",
      tagline: "Modern Agency Website with Dynamic Portfolio & CMS",
      category: "web",
      image: "assets/images/web_portal.jpg",
      liveUrl: "#",
      browserUrl: "https://digimozo.agency",
      tags: ["Full-Stack", "JavaScript", "Custom CSS", "Modern Glassmorphism"],
      metrics: {
        highlight: "99/100 PageSpeed",
        secondary: "3.2x Increase in Inquiries",
        extra: "100% Responsive"
      },
      problem: "Old agency website looked outdated, took 6 seconds to load, and failed to communicate modern AI and tech capabilities to high-paying clients.",
      solution: "Designed and built an ultra-slick dark mode web experience with interactive micro-animations, fast JSON data routing, and instant contact CTA.",
      results: [
        "Inquiry form submissions tripled within the first 3 weeks of launch",
        "Average user session duration increased from 42s to 3m 15s",
        "Google Mobile Speed rated at flawless 99/100"
      ]
    },
    {
      id: 4,
      title: "FitPulse Fitness - 30-Day Instagram Growth & Ads",
      tagline: "0 to 18,500 Targeted Followers & 320 Membership Signups",
      category: "marketing",
      image: "assets/images/social_growth.jpg",
      liveUrl: "#",
      browserUrl: "https://instagram.com/fitpulse.growth",
      tags: ["Instagram Growth", "Reels Strategy", "Local Meta Ads", "Canva/CapCut"],
      metrics: {
        highlight: "18.5k Followers",
        secondary: "320 Paid Memberships",
        extra: "1.2M Reel Views"
      },
      problem: "Local fitness brand had a dead Instagram page (300 followers, zero reach) and couldn't fill their new branch.",
      solution: "Implemented an aggressive 3-part content engine: educational carousels, viral transformation reels, and geo-targeted local Meta Ads within a 7km radius.",
      results: [
        "3 viral reels hit 300k+ views each organically",
        "Generated 320 direct gym membership signups within 30 days",
        "Customer Acquisition Cost (CAC) was 40% lower than traditional print/billboard marketing"
      ]
    },
    {
      id: 5,
      title: "Shopo Modern Store - Fast Converting E-Commerce",
      tagline: "Complete Storefront with Instant Checkout & Cart Recovery",
      category: "web",
      image: "assets/images/checkout_speed.jpg",
      liveUrl: "#",
      browserUrl: "https://shopo-checkout.store",
      tags: ["E-Commerce", "Tailwind", "JavaScript", "Cart Recovery API"],
      metrics: {
        highlight: "+48% Conversion Rate",
        secondary: "0.8s Load Time",
        extra: "WhatsApp Cart Recovery"
      },
      problem: "High cart abandonment (78%) due to multi-step complicated checkout and poor mobile layout.",
      solution: "Streamlined the entire shopping journey into a 1-page checkout with direct UPI / Cards, instant WhatsApp buy button, and sticky mobile purchase dock.",
      results: [
        "Checkout completion rate surged by 48%",
        "Automated WhatsApp notification recovered 22% of abandoned carts",
        "Flawless mobile UI delivering 80%+ of total store revenue"
      ]
    },
    {
      id: 6,
      title: "Client Lead Finder Tool & Automations",
      tagline: "Automated Lead Generation & Outreach Engine",
      category: "both",
      image: "assets/images/lead_automation.jpg",
      liveUrl: "#",
      browserUrl: "https://lead-finder.engine",
      tags: ["Node.js", "Python / Web Scraper", "Meta Graph API", "Automation"],
      metrics: {
        highlight: "10,000+ Verified Leads",
        secondary: "Automated Outreach",
        extra: "Saved 20hrs/week"
      },
      problem: "Manual prospect hunting took hours of repetitive searching with very low conversion.",
      solution: "Developed custom automated script utilizing Meta APIs and web scrapers to filter businesses needing web redesign and ad management.",
      results: [
        "Created an active pipeline of 500+ warm business leads every week",
        "Demonstrates deep engineering knowledge combined with business marketing"
      ]
    }
  ],

  // Live Meta Ads Proof Dashboard (Simulated Ads Manager metrics to build supreme trust)
  adCampaignProof: {
    totalSpend: "₹4,85,420",
    totalRevenue: "₹23,30,016",
    blendedRoas: "4.8x",
    totalPurchases: "1,894",
    averageCPA: "₹256",
    campaigns: [
      { name: "Top of Funnel - Broad AI UGC Video (Scale)", status: "Active", spend: "₹1,85,000", revenue: "₹9,43,500", roas: "5.1x", ctr: "3.8%" },
      { name: "Middle of Funnel - Social Proof & Reviews Carousel", status: "Active", spend: "₹1,20,000", revenue: "₹5,88,000", roas: "4.9x", ctr: "4.2%" },
      { name: "Bottom of Funnel - Dynamic Retargeting & Offer", status: "Active", spend: "₹95,420", revenue: "₹5,15,276", roas: "5.4x", ctr: "5.6%" },
      { name: "B2B Lead Gen - Instant WhatsApp Booking Flow", status: "Active", spend: "₹85,000", leads: "1,980 Leads", cpl: "₹42.9", statusBadge: "High Volume" }
    ]
  },

  // Service Pricing & Packages
  packages: [
    {
      name: "Starter Landing Page",
      subtitle: "Best for new businesses or product launches",
      price: "₹9,999",
      period: "one-time",
      featured: false,
      deliverables: [
        "1 High-Converting Landing Page",
        "Mobile-First Responsive Design",
        "Fast 95+ PageSpeed Optimization",
        "WhatsApp Direct Chat Button",
        "Basic Meta Pixel Integration",
        "3 Days Delivery"
      ],
      ctaText: "Order Landing Page",
      badge: "Fast Launch"
    },
    {
      name: "Complete Growth Bundle",
      subtitle: "Website + Meta Ads Setup + Creative Strategy",
      price: "₹24,999",
      period: "monthly / kickoff",
      featured: true, // Most popular
      deliverables: [
        "Custom Multi-Page Website or E-Commerce Store",
        "Full Meta Ads Setup (Pixel, CAPI, Custom Audiences)",
        "5 High-Converting Ad Creatives & Video Scripts",
        "Targeting & Campaign Management for 30 Days",
        "A/B Split Testing & Retargeting Setup",
        "Weekly Strategy Call & Live Performance Dashboard"
      ],
      ctaText: "Get Growth Bundle (Best Value)",
      badge: "Most Popular 🔥"
    },
    {
      name: "Social Media & Meta Ads Retainer",
      subtitle: "Hands-off ongoing organic & paid scaling",
      price: "₹19,999",
      period: "per month",
      featured: false,
      deliverables: [
        "15 High-Retention Viral Reels & Carousels per Month",
        "Full Meta Ads Optimization & Daily Monitoring",
        "Ad Budget Management up to ₹1,50,000/month",
        "Bio & DM Lead Funnel Optimization",
        "Copywriting, Captions, Hashtags & Scheduling",
        "24/7 Priority Support & Weekly ROAS Reports"
      ],
      ctaText: "Hire on Retainer",
      badge: "Hands-Off Scaling"
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      name: "Vikram Malhotra",
      company: "Founder, LuxeAura Apparel",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
      rating: 5,
      review: "Finding someone who understands both clean modern code and actual ad numbers is super rare. He redesigned our entire e-com store and scaled our Meta ads from 1.5x to 5.2x ROAS in just 45 days. Absolutely transformative!",
      tag: "E-Commerce Client"
    },
    {
      name: "Dr. Tanya Sen",
      company: "Director, SkinAesthetic Clinic",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
      rating: 5,
      review: "We were struggling with high CPL from agencies who didn't care. He rebuilt our consultation booking funnel and set up targeted Instagram Reels and Meta Ads. We got 240+ verified appointments at less than half our previous cost!",
      tag: "Lead Gen Client"
    },
    {
      name: "Rohan Kapoor",
      company: "CEO, Nexo Digital Media",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
      rating: 5,
      review: "Speed, communication, and real business results. The website he built is blazing fast and our social media engagement grew 400% in our first month working together. Highly recommend him to any serious business owner.",
      tag: "Agency Partner"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "Why should I hire you instead of a separate developer and an ads agency?",
      answer: "When a developer builds a website without understanding marketing, they make pretty pages that don't convert. When an ad agency runs ads to a slow, unoptimized website, your ad budget gets burned. Because I master both disciplines, every line of code I write is optimized for conversions, fast load speed, pixel tracking, and maximum ad ROAS."
    },
    {
      question: "What minimum ad budget do I need for Meta Ads?",
      answer: "You can start testing with as little as ₹500 - ₹1,000 per day ($10 - $25/day). Once we establish winning creatives and audience targeting that produce profitable ROAS, we can comfortably scale up your ad spend while maintaining healthy margins."
    },
    {
      question: "How long does it take to build a website or launch campaigns?",
      answer: "A custom high-converting landing page takes 3 to 5 business days. A full multi-page website or e-commerce store typically takes 7 to 14 days. Meta ad campaigns and creative strategies can be launched within 48 to 72 hours."
    },
    {
      question: "Do you handle content creation for social media as well?",
      answer: "Yes! In my social media management packages, I provide complete end-to-end service: scripting viral reels, designing aesthetic carousel posts, writing persuasive captions, and managing scheduling and community engagement."
    },
    {
      question: "How do we get started?",
      answer: "Simply click the 'Chat on WhatsApp' button or submit the contact form below. We'll set up a quick 15-minute discovery chat to understand your business goals, audit your current website or ad accounts, and map out a tailored action plan."
    }
  ]
};
