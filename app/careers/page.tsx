'use client'

import { FeatureCard } from '@/components/careers/feature-card'
import { JobCard } from '@/components/careers/job-card'
import { ChecklistCard } from '@/components/careers/checklist-card'
import { TimelineStep } from '@/components/careers/timeline-step'
import Link from 'next/link'

const jobListings = [
  {
    id: 'senior-electrician',
    title: 'Senior Electrician',
    department: 'Technical',
    location: 'Kolhapur, Maharashtra',
    experience: '5+ years',
    type: 'Full-Time' as const,
    description: 'Lead electrical installations and maintenance projects with expertise in residential and commercial systems.',
  },
  {
    id: 'apprentice-electrician',
    title: 'Apprentice Electrician',
    department: 'Training',
    location: 'Multiple Locations',
    experience: 'Fresher',
    type: 'Internship' as const,
    description: 'Learn electrical trade under expert supervision while gaining hands-on experience.',
  },
]

const benefitCategories = {
  professional: [
    'Competitive salary packages',
    'Health and life insurance',
    'Professional development programs',
    'Certification reimbursement',
  ],
  workLife: [
    'Flexible working hours',
    'Work-life balance initiatives',
    'Paid time off (PTO)',
    'Holiday bonuses',
  ],
  growth: [
    'Career advancement opportunities',
    'Mentorship programs',
    'Skills training workshops',
    'Leadership development',
  ],
  culture: [
    'Inclusive work environment',
    'Team building activities',
    'Recognition programs',
    'Community involvement opportunities',
  ],
}

const applicantCategories = [
  {
    title: 'Fresh Graduates',
    description: 'Start your career with structured training and mentorship programs.',
  },
  {
    title: 'Experienced Professionals',
    description: 'Bring your expertise to challenging projects and lead teams.',
  },
  {
    title: 'Career Changers',
    description: 'Transition into the electrical industry with our support programs.',
  },
  {
    title: 'Apprentices',
    description: 'Learn the trade through hands-on experience and expert guidance.',
  },
  {
    title: 'Technical Specialists',
    description: 'Specialize in areas like renewable energy, automation, or IoT systems.',
  },
  {
    title: 'Management Professionals',
    description: 'Lead teams and projects with strategic vision and expertise.',
  },
  {
    title: 'Safety Professionals',
    description: 'Ensure workplace safety and compliance standards are met.',
  },
  {
    title: 'Administrative Staff',
    description: 'Support operations and client relationships from the office.',
  },
]

const timelineSteps = [
  {
    number: 1,
    title: 'Application Submission through WhatsApp',
    description: 'Submit your application with your resume and cover letter through our online portal.',
  },
  {
    number: 2,
    title: 'Interview',
    description: 'Our senior professionals reviews your application and conducts an initial face-to-face interview.',
  },
  {
    number: 3,
    title: 'Technical Assessment',
    description: 'Qualified candidates participate in technical assessment or skills evaluation.',
  },
  {
    number: 4,
    title: 'Final Interview & Offer',
    description: 'Meet with senior management and owner for final discussion and receive offer letter.',
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-foreground text-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-medium mb-6 font-geist">Build Your Career With Us</h1>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto font-inter">
            Join Omkar Electricals and become part of a team that&apos;s revolutionizing the electrical industry with innovation, safety, and excellence.
          </p>
          <a
            href="#positions"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded font-medium hover:bg-blue-600 transition font-inter"
          >
            Explore Positions
          </a>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-center mb-12 font-geist">Why Join Omkar Electricals?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🚀"
              title="Growth Opportunities"
              description="Advance your career with continuous learning and development programs tailored to your goals."
              accent="blue"
            />
            <FeatureCard
              icon="🤝"
              title="Team Culture"
              description="Work with experienced professionals in a supportive and inclusive environment."
              accent="orange"
            />
            <FeatureCard
              icon="⭐"
              title="Excellence"
              description="Be part of a company committed to quality, innovation, and customer satisfaction."
              accent="yellow"
            />
          </div>
        </div>
      </section>

      {/* For Every Type of Professional Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12 font-geist">Opportunities For Everyone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicantCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-inter">{category.title}</h3>
                <p className="text-gray-600 text-sm font-inter">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12 font-geist">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobListings.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12 font-geist">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ChecklistCard title="Professional Benefits" items={benefitCategories.professional} />
            <ChecklistCard title="Work-Life Balance" items={benefitCategories.workLife} />
            <ChecklistCard title="Growth & Development" items={benefitCategories.growth} />
            <ChecklistCard title="Company Culture" items={benefitCategories.culture} />
          </div>
        </div>
      </section>

      {/* Application Timeline Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12 font-geist">Application Process</h2>
          <div className="max-w-3xl mx-auto">
            {timelineSteps.map((step, index) => (
              <TimelineStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === timelineSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

  {/* Apprenticeship Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-glqgaNnv8MfKtHIb3fpHo4qd2gFrAv.png"
                alt="Apprenticeship Program"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-geist">Apprenticeship Program</h2>
              <p className="text-lg text-gray-600 mb-6 font-inter">
                Our structured apprenticeship program is designed to teach you the electrical trade from the ground up. Learn from industry experts while earning and gaining practical experience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700 font-inter">
                  <span className="text-blue-500 font-bold">✓</span> Comprehensive training curriculum
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-inter">
                  <span className="text-blue-500 font-bold">✓</span> Hands-on project experience
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-inter">
                  <span className="text-blue-500 font-bold">✓</span> Mentorship from senior electricians
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-inter">
                  <span className="text-blue-500 font-bold">✓</span> Certification upon completion
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-inter">
                  <span className="text-blue-500 font-bold">✓</span> Competitive stipend during training
                </li>
              </ul>
              <Link
                href="#positions"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded font-medium hover:bg-blue-600 transition font-inter"
              >
                Apply for Apprenticeship
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Employment Opportunities Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-geist">Employment Opportunities</h2>
              <p className="text-lg text-gray-600 mb-6 font-inter">
                Whether you&apos;re looking for permanent or temporary positions, we have opportunities across various departments and skill levels. Our team is committed to finding the right fit for your career goals.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-foreground mb-2 font-geist">Permanent Positions</h3>
                  <p className="text-gray-600 text-sm font-inter">Full-time roles with benefits and growth opportunities.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-foreground mb-2 font-geist">Contract Positions</h3>
                  <p className="text-gray-600 text-sm font-inter">Flexible work arrangements for project-based assignments.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-foreground mb-2 font-geist">Internship Programs</h3>
                  <p className="text-gray-600 text-sm font-inter">Gain experience and develop professional skills with mentorship.</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XbLqnCOrHVyIYguk8rlvMcuCxE0bn7.png"
                alt="Employment Opportunities"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-500 text-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-geist">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-inter">
            Submit your application today and join a team of dedicated professionals building the future of electrical solutions.
          </p>
          <a
            href="#positions"
            className="inline-block bg-white text-blue-500 px-8 py-3 rounded font-medium hover:bg-gray-100 transition font-inter"
          >
            Browse Open Positions
          </a>
        </div>
      </section>
    </main>
  )
}
