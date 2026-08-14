function About() {
  return (
    <section id="about" className="about">

      <div className="about-heading">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <div className="about-text">
          <h3>AI, Machine Learning & Generative AI</h3>

          <p>
            I'm Taniya Negi, an AI & Data Science undergraduate
            specializing in Computer Science and Engineering.
          </p>

          <p>
            I work with Python, Scikit-learn, NLP, and Generative AI,
            with hands-on experience building ML and LLM-based
            applications.
          </p>

          <p>
            I've built an email spam classification system achieving
            98.57% test accuracy and an LLM-powered resume screening
            pipeline with 100% schema-valid structured output.
          </p>

          <p>
            I'm currently seeking an AI/ML internship where I can
            contribute to production-grade Machine Learning and
            Generative AI systems.
          </p>
        </div>

        <div className="about-highlights">

          <div className="highlight-card">
            <span>ML</span>
            <p>Machine Learning</p>
          </div>

          <div className="highlight-card">
            <span>NLP</span>
            <p>Natural Language Processing</p>
          </div>

          <div className="highlight-card">
            <span>AI</span>
            <p>Generative AI</p>
          </div>

          <div className="highlight-card">
            <span>PY</span>
            <p>Python Development</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About