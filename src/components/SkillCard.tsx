"use client";

import { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  name: string;
  category: "languages" | "frontend" | "backend" | "tools";
  delay?: number;
}

const categoryColors = {
  languages: {
    bg: "bg-yellow-50",
    hover: "hover:bg-yellow-100",
    text: "text-yellow-800",
    border: "border-yellow-200",
    shadow: "hover:shadow-yellow-200/50",
  },
  frontend: {
    bg: "bg-blue-50",
    hover: "hover:bg-blue-100",
    text: "text-blue-700",
    border: "border-blue-200",
    shadow: "hover:shadow-blue-200/50",
  },
  backend: {
    bg: "bg-green-50",
    hover: "hover:bg-green-100",
    text: "text-green-700",
    border: "border-green-200",
    shadow: "hover:shadow-green-200/50",
  },
  tools: {
    bg: "bg-purple-50",
    hover: "hover:bg-purple-100",
    text: "text-purple-700",
    border: "border-purple-200",
    shadow: "hover:shadow-purple-200/50",
  },
};

export default function SkillCard({
  icon,
  name,
  category,
  delay = 0,
}: SkillCardProps) {
  const colors = categoryColors[category];

  return (
    <div
      className={`
        ${colors.bg} ${colors.hover} ${colors.border} ${colors.shadow}
        border-2 rounded-xl p-4
        flex flex-col items-center gap-3
        transition-all duration-300
        hover:scale-105 hover:shadow-lg
        animate-fade-in
      `}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "backwards",
      }}
    >
      <div
        className={`text-4xl ${colors.text} transition-transform duration-300 hover:scale-110`}
      >
        {icon}
      </div>
      <span className={`${colors.text} font-semibold text-sm text-center`}>
        {name}
      </span>
    </div>
  );
}
