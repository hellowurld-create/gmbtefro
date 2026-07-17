import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Layers3,
} from "lucide-react";

import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import {
  getAllBusinessCourseLessons,
  getBusinessCourseBySlug,
} from "../data/businessCourses";

export default function BusinessCourseOverviewPage() {
  const { courseSlug } = useParams<{
    courseSlug: string;
  }>();

  const course = getBusinessCourseBySlug(courseSlug);

  if (!course) {
    return (
      <Navigate
        to="/dashboard/business"
        replace
      />
    );
  }

  const lessons = getAllBusinessCourseLessons(course);

  const firstLesson = lessons[0];

  return (
    <div className="h-full overflow-y-auto bg-[#FFFDF7]">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        {/* Back */}
        <Link
          to="/dashboard/business"
          className="mb-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#667085] transition hover:text-[#001F3F]"
        >
          <ArrowLeft size={18} />

          Back to Learning Courses
        </Link>

        {/* Hero */}
        <section className="overflow-hidden rounded-[24px] bg-[#001F3F] px-6 py-8 text-white sm:px-8 sm:py-10 lg:rounded-[30px] lg:px-12 lg:py-14">
          <div className="max-w-[900px]">
            <span className="mb-4 inline-flex rounded-full bg-[#FFD700] px-4 py-2 text-[13px] font-semibold text-[#001F3F]">
              {course.category}
            </span>

            <h1 className="text-[30px] font-extrabold leading-tight sm:text-[40px] lg:text-[50px]">
              {course.title}
            </h1>

            <p className="mt-5 max-w-[850px] text-[15px] leading-[1.8] text-white/75 sm:text-[17px]">
              {course.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-5 text-[14px] text-white/80 sm:text-[15px]">
              <span className="flex items-center gap-2">
                <Clock3 size={18} />

                {course.duration}
              </span>

              <span className="flex items-center gap-2">
                <GraduationCap size={19} />

                {course.level}
              </span>

              <span className="flex items-center gap-2">
                <BookOpen size={18} />

                {lessons.length}{" "}
                {lessons.length === 1
                  ? "Lesson"
                  : "Lessons"}
              </span>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Main */}
          <div className="space-y-8">
            {/* What you will learn */}
            <section className="rounded-[24px] border border-[#E6E0D3] bg-white p-6 sm:p-8">
              <h2 className="text-[24px] font-bold text-[#001F3F] sm:text-[28px]">
                What You Will Learn
              </h2>

              <p className="mt-2 text-[15px] leading-7 text-[#667085]">
                By the end of this course, you should be able to:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {course.whatYouWillLearn.map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-[#D7263D]"
                      />

                      <span className="text-[14px] leading-6 text-[#475467] sm:text-[15px]">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </section>

            {/* Course Outline */}
            <section className="rounded-[24px] border border-[#E6E0D3] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Layers3 className="text-[#D7263D]" />

                <h2 className="text-[24px] font-bold text-[#001F3F] sm:text-[28px]">
                  Course Outline
                </h2>
              </div>

              <div className="mt-7 space-y-5">
                {course.modules.map(
                  (module, moduleIndex) => (
                    <div
                      key={module.id}
                      className="overflow-hidden rounded-[18px] border border-[#E6E0D3]"
                    >
                      <div className="bg-[#FFF9E0] px-5 py-4 sm:px-6">
                        <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#D7263D]">
                          Module {moduleIndex + 1}
                        </p>

                        <h3 className="mt-1 text-[18px] font-bold text-[#001F3F] sm:text-[20px]">
                          {module.title}
                        </h3>

                        {module.description && (
                          <p className="mt-2 text-[14px] leading-6 text-[#667085]">
                            {module.description}
                          </p>
                        )}
                      </div>

                      <div>
                        {module.lessons.map(
                          (lesson, lessonIndex) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between gap-4 border-t border-[#E6E0D3] px-5 py-4 first:border-t-0 sm:px-6"
                            >
                              <div className="flex items-start gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF3B0] text-[13px] font-bold text-[#001F3F]">
                                  {lessonIndex + 1}
                                </div>

                                <div>
                                  <p className="font-semibold text-[#001F3F]">
                                    {lesson.title}
                                  </p>

                                  {lesson.duration && (
                                    <p className="mt-1 text-[13px] text-[#98A2B3]">
                                      {lesson.duration}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-6 rounded-[24px] border border-[#FFD700] bg-white p-6 shadow-[0px_8px_30px_rgba(15,23,42,0.08)]">
              <h3 className="text-[20px] font-bold text-[#001F3F]">
                Ready to start?
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#667085]">
                Work through the lessons in order and build practical
                knowledge you can apply to your business or startup.
              </p>

              {firstLesson ? (
                <Link
                  to={`/dashboard/business/${course.slug}/${firstLesson.slug}`}
                  className="mt-6 flex h-[54px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#D7263D] font-semibold text-white transition hover:bg-[#B91C32]"
                >
                  Start Course

                  <ArrowRight size={18} />
                </Link>
              ) : (
                <button
                  disabled
                  className="mt-6 h-[54px] w-full cursor-not-allowed rounded-[14px] bg-[#D0D5DD] font-semibold text-white"
                >
                  No Lessons Available
                </button>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}