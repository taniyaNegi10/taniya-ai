function Projects() {
  return (
  <section id="projects" className="projects">

  

      <div className="projects-heading">
        <p>MY WORK</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">

          <div className="project-top">
            <span className="project-number">01</span>
            <span className="project-type">ML / NLP</span>
          </div>

          <h3>EmailGuard AI</h3>

          <p className="project-subtitle">
            Email Spam Detection System
          </p>

          <p className="project-description">
            An end-to-end NLP spam-classification system that processes
            raw email text, extracts features using CountVectorizer,
            and classifies messages using Multinomial Naive Bayes.
          </p>

          <div className="project-result">
            <strong>98.57%</strong>
            <span>Test Accuracy</span>
          </div>

          <div className="project-tech">
            <span>Python</span>
            <span>Django</span>
            <span>Scikit-learn</span>
            <span>Pandas</span>
            <span>NLP</span>
          </div>

          {/* GitHub Project Link */}
          <a
            href="https://github.com/taniyaNegi10/email-spam-detection"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            View Project →
          </a>

        </div>


        {/* Project 2 */}
        <div className="project-card">

          <div className="project-top">
            <span className="project-number">02</span>
            <span className="project-type">GENAI / LLM</span>
          </div>

          <h3>AI Resume Screener</h3>

          <p className="project-subtitle">
            LLM-Powered Resume Screening
          </p>

          <p className="project-description">
            An LLM-powered pipeline that converts unstructured resumes
            and job descriptions into structured data for automated
            skill extraction, candidate matching, and shortlisting.
          </p>

          <div className="project-result">
            <strong>100%</strong>
            <span>Schema-Valid Output</span>
          </div>

          <div className="project-tech">
            <span>Python</span>
            <span>Groq API</span>
            <span>Pydantic</span>
            <span>JSON Schema</span>
            <span>Prompt Engineering</span>
          </div>

          {/* GitHub Project Link */}
          <a
            href="https://github.com/taniyaNegi10/AI_Resume_Screener"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            View Project →
          </a>

        </div>

      </div>

    </section>
  )
}

export default Projects