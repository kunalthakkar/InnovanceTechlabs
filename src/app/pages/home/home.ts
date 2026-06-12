import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  protected readonly activeFaq = signal<number | null>(0);

  protected readonly heroStats = [
    { value: '27+', label: 'Years of delivery discipline' },
    { value: '3,000+', label: 'Clients supported globally' },
    { value: '8,000+', label: 'Projects shipped across industries' },
    { value: '92%', label: 'On-time delivery focus' },
  ];

  protected readonly services = [
    {
      title: 'AI Web Application Development',
      description: 'Product-grade web platforms with automation, analytics and AI-assisted workflows built in.',
      tags: ['Angular', 'React', 'Node.js'],
    },
    {
      title: 'AI Mobile App Development',
      description: 'Mobile experiences that combine strong product design with adaptive intelligence and reliable delivery.',
      tags: ['Flutter', 'Swift', 'Kotlin'],
    },
    {
      title: 'AI Agents at Work',
      description: 'Task-oriented agents that can analyze data, call tools and support operations across teams.',
      tags: ['Agents', 'RAG', 'Automation'],
    },
    {
      title: 'Custom AI Development',
      description: 'Bespoke ML, NLP and computer vision systems tuned to business KPIs and operational realities.',
      tags: ['ML', 'NLP', 'Vision'],
    },
    {
      title: 'Cloud and DevOps',
      description: 'Cloud foundations, delivery pipelines and observability for products that need to scale cleanly.',
      tags: ['Azure', 'Kubernetes', 'Terraform'],
    },
    {
      title: 'QA and Automation',
      description: 'Quality systems that protect release velocity and reduce surprises in complex delivery cycles.',
      tags: ['Cypress', 'Playwright', 'Appium'],
    },
  ];

  protected readonly capabilities = [
    {
      title: 'Model Expertise',
      description: 'Claude, GPT, Gemini and Llama implementations with practical evaluation loops.',
      tags: ['LLM strategy', 'Prompting', 'Eval harnesses'],
    },
    {
      title: 'Engineering Stack',
      description: 'Front-end, backend, database and infra choices aligned to product stage and business context.',
      tags: ['Architecture', 'Delivery', 'Security'],
    },
    {
      title: 'Business Transformation',
      description: 'Operational design that introduces AI without breaking the way teams already work.',
      tags: ['Workflows', 'Human-in-the-loop', 'Adoption'],
    },
  ];

  protected readonly process = [
    {
      step: '01',
      title: 'Discover',
      description: 'We map the business problem, operational constraints and success metrics before design starts.',
    },
    {
      step: '02',
      title: 'Strategize',
      description: 'We define product shape, architecture and delivery milestones with a clear value thesis.',
    },
    {
      step: '03',
      title: 'Build',
      description: 'We ship iteratively with disciplined engineering, QA and stakeholder feedback loops.',
    },
    {
      step: '04',
      title: 'Deliver and Learn',
      description: 'We measure outcomes, refine the system and support the next wave of growth.',
    },
  ];

  protected readonly caseStudies = [
    {
      title: 'Logistics command center',
      sector: 'Operations',
      result: 'Faster routing decisions and fewer manual exceptions.',
      summary: 'A workflow-heavy platform rebuilt around live data, automated handling and operator confidence.',
    },
    {
      title: 'AI-assisted finance portal',
      sector: 'Fintech',
      result: 'Better triage, cleaner reporting and quicker turnaround.',
      summary: 'Decision support, document processing and a premium interface for internal and external users.',
    },
    {
      title: 'Healthcare intake system',
      sector: 'Healthcare',
      result: 'Reduced friction in intake and follow-up tasks.',
      summary: 'A patient-facing experience paired with a secure admin workflow for staff and coordinators.',
    },
  ];

  protected readonly industries = [
    { name: 'Healthcare', detail: 'Patient journeys, intake automation and clinical workflow support.' },
    { name: 'Finance', detail: 'Risk-aware platforms, compliance-aware systems and analyst tooling.' },
    { name: 'Logistics', detail: 'Operations visibility, routing and exception handling.' },
    { name: 'Education', detail: 'Learning platforms, dashboards and student workflows.' },
    { name: 'Retail', detail: 'Commerce engines, personalization and fulfillment systems.' },
    { name: 'Manufacturing', detail: 'Quality control, plant dashboards and connected workflows.' },
    { name: 'Travel', detail: 'Booking orchestration, guest support and smart service design.' },
    { name: 'Media and OTT', detail: 'Audience products, content systems and analytics.' },
  ];

  protected readonly testimonials = [
    {
      quote: 'They asked the questions that changed the product, not just the code.',
      author: 'Greg Faust',
      role: 'Faust Fundamentals',
    },
    {
      quote: 'The delivery rhythm was calm, clear and hard to disrupt.',
      author: 'Kathleen O Martinez',
      role: 'Startup Venture Capital',
    },
    {
      quote: 'Production thinking from day one, which made every decision easier.',
      author: 'John Cleaves',
      role: 'Jury Tracker',
    },
  ];

  protected readonly faqs = [
    {
      question: 'Why work with Innovance Techlabs?',
      answer: 'We combine product thinking, engineering discipline and practical delivery habits so the outcome stays useful after launch.',
    },
    {
      question: 'Do you only build AI products?',
      answer: 'No. We build web, mobile, cloud and automation systems, then add AI where it creates measurable value.',
    },
    {
      question: 'How do projects start?',
      answer: 'With a discovery conversation, a clear problem statement and a scoped plan that avoids unnecessary complexity.',
    },
  ];

  toggleFaq(index: number): void {
    this.activeFaq.update((current) => (current === index ? null : index));
  }
}