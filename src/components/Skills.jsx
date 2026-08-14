function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="skills-heading">
        <p>MY TOOLKIT</p>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Languages</h3>
          <p>Python • C++</p>
        </div>

        <div className="skill-card">
          <h3>ML / Data Science</h3>
          <p>
            Scikit-learn • Pandas • NumPy • Feature Engineering •
            Model Evaluation • Naive Bayes • Classification
          </p>
        </div>

        <div className="skill-card">
          <h3>NLP & GenAI</h3>
          <p>
            NLP • Tokenization • CountVectorizer • LLMs • Groq API •
            Prompt Engineering • Pydantic • JSON Schema
          </p>
        </div>

        <div className="skill-card">
          <h3>Backend / Web</h3>
          <p>
            Django • FastAPI • REST APIs • HTML • CSS • JavaScript •
            Bootstrap
          </p>
        </div>

        <div className="skill-card">
          <h3>Core CS</h3>
          <p>DSA • OOP</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git • GitHub • VS Code</p>
        </div>

      </div>

    </section>
  )
}

export default Skills