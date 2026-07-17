import { useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import {
  buildMentorQuestionMailto,
  QUESTION_THREAD_MENTORS,
  type QuestionThreadMentor,
} from "./questionThreadMentors";

type AskQuestionModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function AskQuestionModal({ open, onClose }: AskQuestionModalProps) {
  const titleId = useId();
  const [selectedMentorId, setSelectedMentorId] = useState(
    QUESTION_THREAD_MENTORS[0]?.id ?? "",
  );
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setError(null);
      return;
    }

    setSelectedMentorId(QUESTION_THREAD_MENTORS[0]?.id ?? "");
    setSubject("");
    setQuestion("");
    setError(null);
  }, [open]);

  if (!open) return null;

  const selectedMentor: QuestionThreadMentor | undefined =
    QUESTION_THREAD_MENTORS.find((mentor) => mentor.id === selectedMentorId);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!selectedMentor) {
      setError("Please select a mentor.");
      return;
    }

    if (!question.trim()) {
      setError("Please write your question before sending.");
      return;
    }

    const mailtoUrl = buildMentorQuestionMailto(
      selectedMentor,
      question,
      subject,
    );

    window.location.href = mailtoUrl;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-[480px] max-h-[min(88vh,640px)] flex-col overflow-hidden rounded-[16px] border border-[#FFD700] bg-[#FFFDF7] shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[#FFD700]/40 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <h2
              id={titleId}
              className="text-[18px] font-bold leading-tight text-[#001F3F] sm:text-[20px]"
            >
              Ask a Question
            </h2>
            <p className="mt-0.5 text-[13px] leading-snug text-[#5B6475]">
              Choose a mentor and we&apos;ll open your email draft to them.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full p-1.5 text-[#001F3F] transition hover:bg-[#FFD700]/30"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col"
        >
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3 sm:px-5">
            <label className="mb-1.5 block text-[13px] font-semibold text-[#001F3F]">
              Select a mentor
            </label>
            <div className="mb-3 max-h-[140px] space-y-1.5 overflow-y-auto overscroll-contain pr-0.5 sm:max-h-[160px]">
              {QUESTION_THREAD_MENTORS.map((mentor) => {
                const isSelected = mentor.id === selectedMentorId;

                return (
                  <button
                    key={mentor.id}
                    type="button"
                    onClick={() => setSelectedMentorId(mentor.id)}
                    className={`flex w-full items-center gap-2.5 rounded-[12px] border px-2.5 py-2 text-left transition ${
                      isSelected
                        ? "border-[#D7263D] bg-[#D7263D]/5"
                        : "border-[#E8E0C8] bg-white hover:border-[#FFD700]"
                    }`}
                  >
                    <img
                      src={mentor.image}
                      alt=""
                      className="h-9 w-9 shrink-0 rounded-full object-cover"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[14px] font-semibold text-[#001F3F]">
                        {mentor.name}
                      </span>
                      <span className="block truncate text-[12px] text-[#5B6475]">
                        {mentor.role}
                      </span>
                    </span>
                    <span
                      className={`h-3.5 w-3.5 shrink-0 rounded-full border-2 ${
                        isSelected
                          ? "border-[#D7263D] bg-[#D7263D]"
                          : "border-[#C5CBD6] bg-white"
                      }`}
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>

            <label
              htmlFor="ask-question-subject"
              className="mb-1.5 block text-[13px] font-semibold text-[#001F3F]"
            >
              Subject{" "}
              <span className="font-normal text-[#5B6475]">(optional)</span>
            </label>
            <input
              id="ask-question-subject"
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="e.g. Advice on starting a product idea"
              className="mb-3 h-[40px] w-full rounded-[10px] border border-[#E8E0C8] bg-white px-3 text-[14px] text-[#001F3F] outline-none transition focus:border-[#D7263D]"
            />

            <label
              htmlFor="ask-question-body"
              className="mb-1.5 block text-[13px] font-semibold text-[#001F3F]"
            >
              Your question
            </label>
            <textarea
              id="ask-question-body"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              rows={3}
              placeholder="Write your question for the mentor..."
              className="mb-2 w-full resize-none rounded-[10px] border border-[#E8E0C8] bg-white px-3 py-2 text-[14px] text-[#001F3F] outline-none transition focus:border-[#D7263D]"
            />

            {selectedMentor ? (
              <p className="text-[12px] text-[#5B6475]">
                Will open email to{" "}
                <span className="font-medium text-[#001F3F]">
                  {selectedMentor.name}
                </span>
              </p>
            ) : null}

            {error ? (
              <p className="mt-2 text-[13px] text-[#D7263D]">{error}</p>
            ) : null}
          </div>

          <div className="flex shrink-0 flex-col-reverse gap-2 border-t border-[#FFD700]/40 px-4 py-3 sm:flex-row sm:justify-end sm:px-5">
            <button
              type="button"
              onClick={onClose}
              className="h-[42px] rounded-[10px] border-2 border-[#C5CBD6] px-4 text-[14px] font-medium text-[#001F3F] transition hover:bg-[#F3F4F6]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-[42px] rounded-[10px] bg-[#D7263D] px-4 text-[14px] font-medium text-white transition hover:opacity-95"
            >
              Open Email Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
