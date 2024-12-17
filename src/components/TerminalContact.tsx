"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { ChangeEvent, FormEvent, Fragment, useEffect, useRef, useState } from "react";

type QuestionType = {
  key: string;
  text: string;
  postfix?: string;
  complete: boolean;
  value: string;
};

const QUESTIONS: QuestionType[] = [
  {
    key: "email",
    text: "To start, could you give us ",
    postfix: "your email?",
    complete: false,
    value: "",
  },
  {
    key: "name",
    text: "Awesome! And what's ",
    postfix: "your name?",
    complete: false,
    value: "",
  },
  {
    key: "description",
    text: "Perfect, and ",
    postfix: "what can we help you with?",
    complete: false,
    value: "",
  },
];

const TerminalContact = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className="bg-black px-4 py-12">
      <div
        ref={containerRef}
        onClick={() => {
          inputRef.current?.focus();
        }}
        className="h-96 bg-gray-900 backdrop-blur rounded-lg w-full max-w-3xl mx-auto overflow-y-scroll shadow-xl cursor-text font-mono"
      >
        <TerminalHeader />
        <TerminalBody inputRef={inputRef} containerRef={containerRef} />
      </div>
    </section>
  );
};

const TerminalHeader = () => {
  return (
    <div className="w-full p-3 bg-gray-800 flex items-center gap-1 sticky top-0">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <span className="text-sm text-gray-200 font-semibold absolute left-[50%] -translate-x-[50%]">
        contact@cybersapiens.dev
      </span>
    </div>
  );
};

const TerminalBody = ({ containerRef, inputRef }: { containerRef: any; inputRef: any }) => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState(QUESTIONS);
  const curQuestion = questions.find((q) => !q.complete);

  const handleSubmitLine = (value: string) => {
    if (curQuestion) {
      setQuestions((pv) =>
        pv.map((q) => {
          if (q.key === curQuestion.key) {
            return {
              ...q,
              complete: true,
              value,
            };
          }
          return q;
        })
      );
    }
  };

  return (
    <div className="p-4 text-gray-300">
      <p>Hey there! We're excited to help you 🚀</p>
      <p className="whitespace-nowrap overflow-hidden font-light">
        ------------------------------------------------------------------------
      </p>

      {questions.map((q, i) => {
        if (q.complete) {
          return (
            <Fragment key={i}>
              <p>
                {q.text}
                {q.postfix && <span className="text-cyan-400">{q.postfix}</span>}
              </p>
              <p className="text-emerald-400">
                <FiCheckCircle className="inline-block mr-2" />
                <span>{q.value}</span>
              </p>
            </Fragment>
          );
        }
        return null;
      })}

      {curQuestion && (
        <>
          <p>
            {curQuestion.text}
            {curQuestion.postfix && (
              <span className="text-cyan-400">{curQuestion.postfix}</span>
            )}
          </p>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmitLine(text);
            setText("");
          }}>
            <input
              ref={inputRef}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
              value={text}
              type="text"
              className="sr-only"
              autoComplete="off"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </form>
          <p>
            <span className="text-emerald-400">➜</span>{" "}
            <span className="text-cyan-400">~</span>{" "}
            {text}
            {focused && (
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                  times: [0, 0.5, 0.5, 1],
                }}
                className="inline-block w-2 h-5 bg-gray-400 translate-y-1 ml-0.5"
              />
            )}
          </p>
        </>
      )}

      {!curQuestion && (
        <div>
          <p>Perfect! Here's what we've got:</p>
          {questions.map((q) => (
            <p key={q.key}>
              <span className="text-cyan-400">{q.key}:</span> {q.value}
            </p>
          ))}
          <p className="mt-4 text-emerald-400">
            <FiCheckCircle className="inline-block mr-2" />
            Thanks! We'll get back to you soon! 🚀
          </p>
        </div>
      )}
    </div>
  );
};

export default TerminalContact; 