export type BusinessCourseLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type BusinessCourseLesson = {
  id: string;
  slug: string;
  title: string;
  duration?: string;

  introduction?: string;

  content: string[];

  keyPoints?: string[];

  formula?: {
    title: string;
    formula: string;
    description?: string;
  };

  quote?: string;
};

export type BusinessCourseModule = {
  id: string;
  title: string;
  description?: string;
  lessons: BusinessCourseLesson[];
};

export type BusinessCourse = {
  id: string;
  slug: string;

  title: string;
  shortDescription: string;
  description: string;

  duration: string;
  level: BusinessCourseLevel;
  category: string;

  whatYouWillLearn: string[];

  modules: BusinessCourseModule[];
};