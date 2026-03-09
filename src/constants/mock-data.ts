import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    decription: "An introductory course covering the fundamental concept of Computer Science and programming.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "MATH201",
    name: "Calculus II",
    department: "Math",
    decription: "Advanced study of integration, sequences, series, and power series.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG102",
    name: "Literature and Composition",
    department: "English",
    decription: "A course focused on critical reading and writing.",
    createdAt: new Date().toISOString(),
  },
];