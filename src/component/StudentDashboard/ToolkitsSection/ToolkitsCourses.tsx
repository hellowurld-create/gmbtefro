import {
  BarChart3,
  BrainCircuit,
  DollarSign,
  Package,
  Rocket,
  TrendingUp,
} from "lucide-react";

import type { ReactNode } from "react";

import { Link } from "react-router-dom";

import type { BusinessCourseLevel } from "./types/businessCourse";

type ModuleCardProps = {
  title: string;
  slug: string;
  duration: string;
  level: BusinessCourseLevel;
  icon: ReactNode;
};

function ModuleCard({
  title,
  slug,
  duration,
  level,
  icon,
}: ModuleCardProps) {
  const levelStyles: Record<BusinessCourseLevel, string> = {
    Beginner: "bg-[#DCFCE7] text-[#008236]",
    Intermediate: "bg-[#FEE5C2] text-[#A65F00]",
    Advanced: "bg-[#FDE2E7] text-[#D7263D]",
  };

  return (
    <article className="flex h-full flex-col rounded-[18px] border border-[#FFD700] bg-white px-5 py-6 shadow-[0px_6px_16px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_rgba(15,23,42,0.12)] sm:rounded-[20px] sm:px-6 sm:py-7 lg:rounded-[22px]">
      <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-[16px] bg-[#FFD700] sm:mb-8 sm:h-[64px] sm:w-[64px] sm:rounded-[18px] lg:h-[70px] lg:w-[70px]">
        {icon}
      </div>

      <h3 className="mb-5 text-[19px] font-extrabold leading-[1.3] text-[#001F3F] sm:text-[20px] lg:text-[22px]">
        {title}
      </h3>

      <div className="mb-7 flex flex-wrap items-center gap-2 text-[14px] text-[#667085] sm:gap-3 sm:text-[15px] lg:text-[16px]">
        <span>{duration}</span>

        <span className="text-[#C7C7C7]">•</span>

        <span
          className={`inline-flex items-center rounded-full px-3 py-1.5 text-[13px] font-medium sm:px-4 sm:text-[14px] ${levelStyles[level]}`}
        >
          {level}
        </span>
      </div>

      <div className="mt-auto">
        <Link
          to={`/dashboard/business/${slug}`}
          className="flex h-[52px] w-full items-center justify-center rounded-[12px] bg-[#D7263D] text-[15px] font-medium text-white transition hover:bg-[#B91C32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7263D] focus-visible:ring-offset-2 sm:h-[56px] sm:rounded-[14px] sm:text-[16px] lg:h-[58px] lg:text-[18px]"
        >
          View Course
        </Link>
      </div>
    </article>
  );
}

export default function LearningModules() {
  const modules: ModuleCardProps[] = [
    {
      title: "Digital Marketing Strategy",
      slug: "digital-marketing-strategy",
      duration: "2 hours",
      level: "Intermediate",
      icon: (
        <TrendingUp
          size={28}
          className="text-[#D7263D]"
          strokeWidth={2.2}
        />
      ),
    },

    {
      title: "Business Analytics Basics",
      slug: "business-analytics-basics",
      duration: "2 hours",
      level: "Beginner",
      icon: (
        <BarChart3
          size={28}
          className="text-[#D7263D]"
          strokeWidth={2.2}
        />
      ),
    },

    {
      title: "Startup Fundamentals",
      slug: "startup-fundamentals",
      duration: "2 hours",
      level: "Intermediate",
      icon: (
        <Rocket
          size={28}
          className="text-[#D7263D]"
          strokeWidth={2.2}
        />
      ),
    },

    {
      title: "Entrepreneurship Mindset",
      slug: "entrepreneurship-mindset",
      duration: "2 hours",
      level: "Intermediate",
      icon: (
        <BrainCircuit
          size={28}
          className="text-[#D7263D]"
          strokeWidth={2.2}
        />
      ),
    },

    {
      title: "Financial Literacy for Founders",
      slug: "financial-literacy-for-founders",
      duration: "2 hours",
      level: "Beginner",
      icon: (
        <DollarSign
          size={28}
          className="text-[#D7263D]"
          strokeWidth={2.2}
        />
      ),
    },

    {
      title: "Product Sales & Brand Development",
      slug: "product-sales-and-brand-development",
      duration: "2 hours",
      level: "Intermediate",
      icon: (
        <Package
          size={28}
          className="text-[#D7263D]"
          strokeWidth={2.2}
        />
      ),
    },
  ];

  return (
    <section className="mx-auto mb-8 mt-6 max-w-[1400px] rounded-[22px] border border-[#001F3F73] bg-[#FFFDF7] px-4 py-5 shadow-[0px_2px_4px_-1px_#001F3F0F,0px_4px_6px_-1px_#001F3F1A] sm:mb-10 sm:mt-8 sm:rounded-[24px] sm:px-6 sm:py-6 lg:rounded-[28px] lg:px-8 lg:py-8">
      <div className="mb-6 sm:mb-8">
        <h2 className="mb-2 text-[22px] font-bold text-[#001F3F] sm:mb-3 sm:text-[28px] lg:text-[32px]">
          Learning Courses
        </h2>

        <p className="max-w-[1200px] text-[14px] leading-[1.7] text-[#6B7280] sm:text-[16px] lg:text-[18px]">
          Build practical skills across digital marketing, business analytics,
          startup development, entrepreneurship, financial literacy, sales,
          and brand development. Explore a course to see what you will learn
          before starting your learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard
            key={module.slug}
            {...module}
          />
        ))}
      </div>
    </section>
  );
}