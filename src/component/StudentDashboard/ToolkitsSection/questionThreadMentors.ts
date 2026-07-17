export type QuestionThreadMentor = {
  id: string;
  name: string;
  role: string;
  email: string;
  image: string;
};

/**
 * Mentors available for the Ask a Question Thread (frontend-only mailto).
 * Update emails here when real mentor addresses are ready.
 */
export const QUESTION_THREAD_MENTORS: QuestionThreadMentor[] = [
  {
    id: "rose-odudu",
    name: "Rose Odudu",
    role: "Head of Administration (Building & Leading Operations)",
    email: "rose.odudu@gmbte.org",
    image: "/dashboard/toolkits/roset.jpg",
  },
  {
    id: "james-ade",
    name: "James Ade",
    role: "Software Engineer, Google",
    email: "james.ade@gmbte.org",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    role: "AI & Data Science Mentor",
    email: "elena.rodriguez@gmbte.org",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
  {
    id: "david-chen",
    name: "David Chen",
    role: "Cybersecurity Mentor",
    email: "david.chen@gmbte.org",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
  },
  {
    id: "sophia-turner",
    name: "Sophia Turner",
    role: "Software Engineer, Google",
    email: "sophia.turner@gmbte.org",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
  {
    id: "victor-marcus",
    name: "Victor Marcus",
    role: "Product Designer, Code Nation",
    email: "victor.marcus@gmbte.org",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
];

export function buildMentorQuestionMailto(
  mentor: QuestionThreadMentor,
  question: string,
  subject?: string,
) {
  const mailSubject =
    subject?.trim() || `GMBT Question for ${mentor.name}`;
  const body = [
    `Hi ${mentor.name.split(" ")[0]},`,
    "",
    "I have a question from the GMBT Ask a Question Thread:",
    "",
    question.trim(),
    "",
    "Thank you,",
  ].join("\n");

  return `mailto:${mentor.email}?subject=${encodeURIComponent(
    mailSubject,
  )}&body=${encodeURIComponent(body)}`;
}
