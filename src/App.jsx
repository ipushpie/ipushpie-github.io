import React from "react";
import resume from "../data/resume.json";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">{resume.name}</h1>
      <p className="mb-4 text-gray-600">{resume.objective}</p>
      <div className="mb-4">
        <h2 className="font-semibold text-xl">Contact</h2>
        <ul>
          <li>Email: {resume.contact.gmail}</li>
          <li>Phone: {resume.contact.phone}</li>
          <li>Location: {resume.contact.location}</li>
          <li>
            <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href={resume.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-xl">Education</h2>
        <ul>
          {resume.education.map((edu, i) => (
            <li key={i}>
              {edu.degree} at {edu.institution} ({edu.year}) — {edu.details}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-xl">Skills</h2>
        <ul>
          <li><b>Languages:</b> {resume.skills.languages.join(", ")}</li>
          <li><b>Frameworks:</b> {resume.skills.frameworks.join(", ")}</li>
          <li><b>Libraries:</b> {resume.skills.libraries.join(", ")}</li>
          <li><b>Databases:</b> {resume.skills.databases.join(", ")}</li>
          <li><b>Tools:</b> {resume.skills.tools.join(", ")}</li>
          <li><b>Cloud:</b> {resume.skills.cloud.join(", ")}</li>
          <li><b>Concepts:</b> {resume.skills.concepts.join(", ")}</li>
          <li><b>Soft Skills:</b> {resume.skills.softSkills.join(", ")}</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-xl">Experience</h2>
        <ul>
          {resume.experience.map((job, i) => (
            <li key={i}>
              <b>{job.title}</b> at {job.company}, {job.location} ({job.duration})
              <ul>
                {job.highlights.map((h, j) => (
                  <li key={j}>- {h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-xl">Projects</h2>
        <ul>
          {resume.projects.map((p, i) => (
            <li key={i}>
              <b>{p.name}</b>: {p.description} (<a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>)
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-xl">Achievements</h2>
        <ul>
          {resume.achievements.map((a, i) => (
            <li key={i}>- {a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}