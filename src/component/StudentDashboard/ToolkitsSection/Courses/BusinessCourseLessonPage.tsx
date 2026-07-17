import {
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import {
  getAllBusinessCourseLessons,
  getBusinessCourseBySlug,
  getBusinessLessonBySlug,
} from "../data/businessCourses";

export default function BusinessCourseLessonPage() {
  const {
    courseSlug,
    lessonSlug,
  } = useParams<{
    courseSlug: string;
    lessonSlug: string;
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

  const lessonResult = getBusinessLessonBySlug(
    course,
    lessonSlug,
  );

  if (!lessonResult) {
    return (
      <Navigate
        to={`/dashboard/business/${course.slug}`}
        replace
      />
    );
  }

  const { lesson, module } = lessonResult;

  const allLessons =
    getAllBusinessCourseLessons(course);

  const currentIndex = allLessons.findIndex(
    (item) => item.slug === lesson.slug,
  );

  const previousLesson =
    currentIndex > 0
      ? allLessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex < allLessons.length - 1
      ? allLessons[currentIndex + 1]
      : null;

  return (
    <div className="h-full overflow-hidden bg-[#FFFDF7]">
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="hidden h-full w-[300px] shrink-0 overflow-y-auto border-r border-[#E6E0D3] bg-white lg:block">
          <div className="p-6">
            <Link
              to={`/dashboard/business/${course.slug}`}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#667085] hover:text-[#001F3F]"
            >
              <ArrowLeft size={16} />

              Course Overview
            </Link>

            <h2 className="mt-6 text-[20px] font-bold leading-[1.35] text-[#001F3F]">
              {course.title}
            </h2>

            <div className="mt-8 space-y-7">
              {course.modules.map(
                (courseModule, moduleIndex) => (
                  <div key={courseModule.id}>
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#98A2B3]">
                      Module {moduleIndex + 1}
                    </p>

                    <h3 className="mb-3 text-[14px] font-semibold text-[#001F3F]">
                      {courseModule.title}
                    </h3>

                    <div className="space-y-2">
                      {courseModule.lessons.map(
                        (
                          courseLesson,
                          lessonIndex,
                        ) => {
                          const isActive =
                            courseLesson.slug ===
                            lesson.slug;

                          return (
                            <Link
                              key={courseLesson.id}
                              to={`/dashboard/business/${course.slug}/${courseLesson.slug}`}
                              className={`flex gap-3 rounded-[12px] px-3 py-3 text-[13px] leading-5 transition ${
                                isActive
                                  ? "bg-[#FFF3B0] font-semibold text-[#001F3F]"
                                  : "text-[#667085] hover:bg-[#F9FAFB] hover:text-[#001F3F]"
                              }`}
                            >
                              <span>
                                {lessonIndex + 1}.
                              </span>

                              <span>
                                {courseLesson.title}
                              </span>
                            </Link>
                          );
                        },
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </aside>

        {/* Lesson */}
        <main className="h-full flex-1 overflow-y-auto">
          <div className="mx-auto max-w-[900px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
            {/* Mobile Back */}
            <Link
              to={`/dashboard/business/${course.slug}`}
              className="mb-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#667085] lg:hidden"
            >
              <ArrowLeft size={16} />

              Course Overview
            </Link>

            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.1em] text-[#D7263D]">
              {module.title}
            </div>

            <h1 className="text-[30px] font-extrabold leading-tight text-[#001F3F] sm:text-[38px]">
              {lesson.title}
            </h1>

            {lesson.duration && (
              <p className="mt-3 text-[14px] text-[#98A2B3]">
                Estimated time: {lesson.duration}
              </p>
            )}

            {lesson.introduction && (
              <p className="mt-8 text-[18px] leading-8 text-[#475467]">
                {lesson.introduction}
              </p>
            )}

            <div className="mt-8 space-y-6">
              {lesson.content.map(
                (paragraph, index) => (
                  <p
                    key={`${lesson.id}-${index}`}
                    className="text-[16px] leading-[1.9] text-[#475467]"
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </div>

            {/* Formula */}
            {lesson.formula && (
              <section className="mt-10 rounded-[20px] border border-[#FFD700] bg-[#FFF9E0] p-6 sm:p-8">
                <h2 className="text-[18px] font-bold text-[#001F3F]">
                  {lesson.formula.title}
                </h2>

                <div className="mt-4 overflow-x-auto rounded-[12px] bg-white px-5 py-4 font-mono text-[15px] font-semibold text-[#D7263D]">
                  {lesson.formula.formula}
                </div>

                {lesson.formula.description && (
                  <p className="mt-4 text-[14px] leading-7 text-[#667085]">
                    {lesson.formula.description}
                  </p>
                )}
              </section>
            )}

            {/* Key Points */}
            {lesson.keyPoints &&
              lesson.keyPoints.length > 0 && (
                <section className="mt-10 rounded-[20px] bg-[#001F3F] p-6 text-white sm:p-8">
                  <div className="flex items-center gap-3">
                    <Lightbulb
                      size={22}
                      className="text-[#FFD700]"
                    />

                    <h2 className="text-[20px] font-bold">
                      Key Takeaways
                    </h2>
                  </div>

                  <div className="mt-6 space-y-4">
                    {lesson.keyPoints.map(
                      (point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={19}
                            className="mt-1 shrink-0 text-[#FFD700]"
                          />

                          <p className="text-[14px] leading-6 text-white/80 sm:text-[15px]">
                            {point}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </section>
              )}

            {/* Navigation */}
            <div className="mt-12 grid gap-4 border-t border-[#E6E0D3] pt-8 sm:grid-cols-2">
              {previousLesson ? (
                <Link
                  to={`/dashboard/business/${course.slug}/${previousLesson.slug}`}
                  className="rounded-[16px] border border-[#E6E0D3] bg-white p-5 transition hover:border-[#FFD700]"
                >
                  <span className="text-[12px] font-semibold uppercase text-[#98A2B3]">
                    Previous Lesson
                  </span>

                  <p className="mt-2 font-bold text-[#001F3F]">
                    {previousLesson.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {nextLesson ? (
                <Link
                  to={`/dashboard/business/${course.slug}/${nextLesson.slug}`}
                  className="rounded-[16px] bg-[#D7263D] p-5 text-white transition hover:bg-[#B91C32] sm:text-right"
                >
                  <span className="text-[12px] font-semibold uppercase text-white/70">
                    Next Lesson
                  </span>

                  <p className="mt-2 font-bold">
                    {nextLesson.title}
                  </p>
                </Link>
              ) : (
                <Link
                  to="/dashboard/business"
                  className="rounded-[16px] bg-[#001F3F] p-5 text-white transition hover:opacity-95 sm:text-right"
                >
                  <span className="text-[12px] font-semibold uppercase text-white/70">
                    Course Complete
                  </span>

                  <p className="mt-2 font-bold">
                    Back to Learning Courses
                  </p>
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}