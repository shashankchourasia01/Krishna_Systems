import {
  Brain,
  Cloud,
  Database,
  GitBranch,
  Layers3,
  BriefcaseBusiness,
  ShieldCheck,
  Users,
  BadgeCheck,
  PhoneCall,
  Mail,
  ArrowRight,
  Building2,
  Landmark,
  ShoppingCart,
  MapPin,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#case-studies' },
  { label: 'Clients', href: '#clients' },
  { label: 'Careers', href: '#contact' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '42%', label: 'Efficiency Boost' },
  { value: '500+', label: 'Expert Resources' },
  { value: '99%', label: 'Staff Retention Rate' },
]

export const clients = ['TCS', 'Infosys', 'PERSISTENT', 'Oracle', 'Accenture']

export const services = [
  {
    title: 'Data & AI',
    description: 'Harness enterprise data and deploy modern AI solutions to unlock predictive insights and smarter decisions.',
    icon: Brain,
  },
  {
    title: 'Integration',
    description: 'Connect legacy systems, modern APIs, and business tools for seamless workflows and secure interoperability.',
    icon: GitBranch,
  },
  {
    title: 'Cloud Services',
    description: 'Plan, migrate, optimize, and manage cloud workloads across AWS, Azure, and Google Cloud.',
    icon: Cloud,
  },
  {
    title: 'Full Stack',
    description: 'Build fast, scalable web platforms and internal systems with modern frontend and backend stacks.',
    icon: Layers3,
  },
  {
    title: 'SAP Solutions',
    description: 'Drive enterprise process efficiency with implementation, support, and optimization for SAP ecosystems.',
    icon: Database,
  },
  {
    title: 'Oracle Solutions',
    description: 'Strengthen business operations with industrial-grade Oracle database, apps, and platform expertise.',
    icon: Database,
  },
  {
    title: 'Salesforce Services',
    description: 'Customize and optimize CRM workflows to improve pipeline visibility and team productivity.',
    icon: BadgeCheck,
  },
  {
    title: 'IT Staffing',
    description: 'Access pre-vetted technology talent for contract, project, dedicated, and long-term business needs.',
    icon: BriefcaseBusiness,
  },
]

export const highlights = [
  {
    title: 'Quality-Driven Delivery',
    text: 'Uncompromising standards in every line of code and every resource placed.',
    icon: ShieldCheck,
  },
  {
    title: 'Genuine and Transparent Work',
    text: 'Clear communication, honest timelines, and integrity in every engagement.',
    icon: BadgeCheck,
  },
  {
    title: 'Skilled Talent + Tech Expertise',
    text: 'The right mix of human capability and cutting-edge technology stacks.',
    icon: Users,
  },
]

export const reasons = [
  'Enterprise-ready talent pool',
  'Fast deployment and onboarding',
  'Scalable delivery models',
  'Rigorous expert vetting process',
  'Reliable communication and support',
  'Technology breadth across cloud, ERP, CRM, and engineering',
]

export const caseStudies = [
  {
    tag: 'Banking',
    title: 'Global Banking Leader',
    text: 'Streamlined cloud infrastructure migration for a major financial institution, reducing latency and improving resilience.',
    icon: Landmark,
  },
  {
    tag: 'Fintech',
    title: 'Major IT Giant',
    text: 'Deployed a 20-person specialized team within two weeks to accelerate a core banking product launch.',
    icon: Building2,
  },
  {
    tag: 'E-commerce',
    title: 'SaaS Innovator',
    text: 'Delivered full-stack redevelopment and Salesforce integration for a logistics platform scaling to millions of users.',
    icon: ShoppingCart,
  },
]

export const contactItems = [
  {
    title: 'Email Us',
    value: 'krishasystems7@gmail.com',
    href: 'mailto:krishasystems7@gmail.com',
    icon: Mail,
  },
  {
    title: 'Call Us',
    value: '+91 9971504001',
    href: 'tel:+919971504001',
    icon: PhoneCall,
  },
  {
    title: 'Location',
    value: 'Delhi, India',
    href: '#contact',
    icon: MapPin,
  },
]

export const footerServices = [
  'Data & AI Engineering',
  'Cloud Migration & Ops',
  'Full Stack Development',
  'SAP & Oracle Solutions',
  'Salesforce Services',
  'IT Staffing',
]

export const ArrowIcon = ArrowRight