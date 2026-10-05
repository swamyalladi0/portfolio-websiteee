import { portfolioData } from '../data/portfolioData.js?v=2.1';

export function renderProjects() {
  const { projects } = portfolioData;

  return `
    <section class="section" id="projects">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header reveal-item">
          <div class="section-eyebrow">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 class="section-title">Selected Projects</h2>
          <p class="section-subtitle">
            Things I've built while learning and experimenting. Focused on core logic, relational queries, and clean engineering.
          </p>
        </div>

        <!-- Projects List -->
        <div class="projects-list">
          ${projects.map(project => `
            <article class="project-card reveal-item" id="${project.id}">
              
              <!-- Content Area -->
              <div class="project-content">
                <div class="project-header">
                  <span class="project-number">// PROJECT ${escapeHtml(project.number)}</span>
                  <h3 class="project-title">${escapeHtml(project.title)}</h3>
                  <p class="project-tagline">${escapeHtml(project.tagline)}</p>
                </div>

                <p class="project-desc">${escapeHtml(project.description)}</p>

                <!-- Project Highlights / Key Pillars -->
                <ul class="project-highlights">
                  ${project.highlights.map(item => `
                    <li class="highlight-item">${escapeHtml(item)}</li>
                  `).join('')}
                </ul>

                <!-- Tech Tags -->
                <div class="project-tags">
                  ${project.techStack.map(tag => `
                    <span class="badge badge-tech">${escapeHtml(tag)}</span>
                  `).join('')}
                </div>

                <!-- Action Buttons -->
                <div class="project-actions">
                  <a href="${escapeHtml(project.codeUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.88rem; padding: 10px 18px;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    <span>View Code</span>
                  </a>

                  ${project.hasLiveDemo ? `
                    <button class="btn btn-primary open-demo-btn" data-project="${project.id}" style="font-size: 0.88rem; padding: 10px 18px;">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      <span>Interactive Demo</span>
                    </button>
                  ` : ''}
                </div>
              </div>

              <!-- Visual Preview Area (Abstract UI Mockups) -->
              <div class="project-preview">
                
                <!-- HUD Top Bar -->
                <div class="preview-hud-bar">
                  <div class="hud-dots">
                    <span class="hud-dot hud-dot-red"></span>
                    <span class="hud-dot hud-dot-yellow"></span>
                    <span class="hud-dot hud-dot-green"></span>
                  </div>
                  <span class="hud-file-label">
                    ${project.id === 'project-1' ? 'cancer_cnn_model.py // TensorFlow • Keras' : (project.id === 'project-2' ? 'healthcare_ml.py // Scikit-Learn • MySQL' : 'rag_policy_pipeline.py // LangChain • FAISS • LLMs')}
                  </span>
                </div>

                <!-- Preview Body Content -->
                <div class="preview-body">
                  ${renderProjectVisual(project)}
                </div>

              </div>

            </article>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

function renderProjectVisual(project) {
  if (project.id === 'project-1') {
    return `
      <div class="terminal-snippet">
        <span class="token-comment"># Neural Network Architecture: CNN for Cancer Detection</span><br>
        <span class="token-kw">import</span> tensorflow <span class="token-kw">as</span> tf<br>
        <span class="token-kw">from</span> tensorflow.keras <span class="token-kw">import</span> layers, models<br><br>
        model = models.<span class="token-fn">Sequential</span>([<br>
        &nbsp;&nbsp;layers.<span class="token-fn">Conv2D</span>(32, (3,3), activation=<span class="token-str">'relu'</span>, input_shape=(224,224,3)),<br>
        &nbsp;&nbsp;layers.<span class="token-fn">MaxPooling2D</span>(2, 2),<br>
        &nbsp;&nbsp;layers.<span class="token-fn">Conv2D</span>(64, (3,3), activation=<span class="token-str">'relu'</span>),<br>
        &nbsp;&nbsp;layers.<span class="token-fn">Dropout</span>(0.5),<br>
        &nbsp;&nbsp;layers.<span class="token-fn">Dense</span>(2, activation=<span class="token-str">'softmax'</span>)<br>
        ])
      </div>

      <div class="model-telemetry-hud">
        <div class="telemetry-stat">
          <span class="stat-label">Model Accuracy</span>
          <span class="stat-val text-cyan">97.8%</span>
        </div>
        <div class="telemetry-stat">
          <span class="stat-label">Inference Time</span>
          <span class="stat-val text-purple">&lt; 42ms</span>
        </div>
        <div class="telemetry-stat">
          <span class="stat-label">Architecture</span>
          <span class="stat-val text-blue">CNN (Keras)</span>
        </div>
      </div>
    `;
  }

  if (project.id === 'project-2') {
    return `
      <div class="terminal-snippet">
        <span class="token-comment"># Healthcare ML Pipeline: Risk Stratification & Diagnosis</span><br>
        <span class="token-kw">from</span> sklearn.ensemble <span class="token-kw">import</span> RandomForestClassifier<br>
        <span class="token-kw">from</span> sklearn.metrics <span class="token-kw">import</span> classification_report<br><br>
        clf = <span class="token-fn">RandomForestClassifier</span>(n_estimators=100, max_depth=8)<br>
        clf.<span class="token-fn">fit</span>(X_train_clinical, y_train_diagnosis)<br>
        predictions = clf.<span class="token-fn">predict</span>(X_test_vitals)
      </div>

      <div class="db-schema-visual" style="margin-top: 14px;">
        <div class="db-node-card">
          <div class="db-node-title">
            <span>CLINICAL DATASET SCHEMA (MySQL)</span>
            <span class="badge" style="font-size: 0.65rem; padding: 2px 6px;">HEALTHCARE</span>
          </div>
          <div class="db-fields-list">
            <span class="db-field-pill db-field-pk">PK patient_id</span>
            <span class="db-field-pill">biomarkers</span>
            <span class="db-field-pill">vital_signs</span>
            <span class="db-field-pill">predicted_risk</span>
            <span class="db-field-pill">diagnosis_outcome</span>
          </div>
        </div>
      </div>
    `;
  }

  // Project 3: University Policy Chatbot (RAG-Based)
  return `
    <div class="rag-visual-flow">
      <div class="rag-step-pill">
        <span class="step-num">01</span>
        <span class="step-name">Policy PDFs</span>
      </div>
      <span class="flow-arrow">→</span>
      <div class="rag-step-pill">
        <span class="step-num">02</span>
        <span class="step-name">Embeddings</span>
      </div>
      <span class="flow-arrow">→</span>
      <div class="rag-step-pill">
        <span class="step-num">03</span>
        <span class="step-name">FAISS Index</span>
      </div>
      <span class="flow-arrow">→</span>
      <div class="rag-step-pill">
        <span class="step-num">04</span>
        <span class="step-name">LLM Output</span>
      </div>
    </div>

    <div class="terminal-snippet" style="margin-top: 14px;">
      <span class="token-comment">// Query: "What is the policy for attendance & exam condonation?"</span><br>
      <span class="token-kw">&gt; Retrieved 4 relevant chunks from FAISS (cosine sim &gt; 0.88)</span><br>
      <span class="token-str">&gt; "Per Section 4.2: Minimum 75% attendance is required to qualify for end-semester examinations..."</span>
    </div>

    <div class="model-telemetry-hud" style="margin-top: 10px;">
      <div class="telemetry-stat">
        <span class="stat-label">Vector Store</span>
        <span class="stat-val text-purple">FAISS</span>
      </div>
      <div class="telemetry-stat">
        <span class="stat-label">Framework</span>
        <span class="stat-val text-blue">LangChain</span>
      </div>
      <div class="telemetry-stat">
        <span class="stat-label">Retrieval</span>
        <span class="stat-val text-emerald">Semantic</span>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
