/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION FILE
 * ====================================================================
 * All personal details, project descriptions, skills, and links can
 * be updated directly in this file. Changes reflect instantly across
 * the entire website.
 * 
 * Replace the placeholders (e.g. [YOUR NAME], [YOUR EMAIL]) with
 * your personal information.
 * ====================================================================
 */

export const portfolioData = {
  // Personal Details
  personal: {
    name: "ALLADI SWAMY",
    initials: "AS",
    role: "Computer Science Engineering Graduate • 2026",
    subRole: "Aspiring Software Developer",
    graduationYear: "2026",
    eyebrow: "COMPUTER SCIENCE ENGINEERING • 2026",
    tagline: "I build digital experiences with code.",
    shortBio:
      "I’m a Computer Science Engineering graduate passionate about building practical software solutions, intelligent AI/ML systems, and learning modern technologies. I enjoy working with Python, Deep Learning, RAG, SQL, and problem-solving.",
    aboutDescription:
      "I am a 2026 Computer Science Engineering graduate with a strong foundation in software engineering, machine learning, and intelligent applications. Passionate about building impactful systems — from deep learning CNNs for cancer detection to RAG-powered chatbots with LangChain and FAISS, and robust relational database architectures.",
    profilePhoto: "./src/assets/profile1.jpeg",
    resumeUrl: "./src/assets/resume.pdf",
    location: "Degam, Armoor, NZB, Telangana",
    email: "swamyalladi0@gmail.com",
    github: "https://github.com/swamyalladi0",
    linkedin: "https://www.linkedin.com/in/swamy-alladi-2b60a4378/",
    status: "Available for Software Developer Opportunities",
  },

  // About Section Highlights / Telemetry Cards
  aboutHighlights: [
    {
      metric: "2026",
      label: "CSE Graduate",
      description: "Computer Science & Engineering background with solid fundamentals.",
      icon: "graduation-cap"
    },
    {
      metric: "AI / ML",
      label: "Deep Learning & RAG",
      description: "CNN image classification, LangChain, FAISS semantic search, and LLMs.",
      icon: "cpu"
    },
    {
      metric: "Python",
      label: "Core Engineering",
      description: "TensorFlow, Keras, Scikit-learn, REST APIs, algorithms, and OOP.",
      icon: "code"
    },
    {
      metric: "Database",
      label: "SQL & Schemas",
      description: "Relational modeling, normalization, analytical queries, and DBMS.",
      icon: "database"
    }
  ],

  // Technologies I Work With
  // IMPORTANT: ONLY display technologies actually included in the project/content.
  techStack: [
    {
      category: "Programming",
      description: "Core languages for logic, algorithms, and application development.",
      skills: [
        {
          name: "Python",
          level: "Core Proficiency",
          description: "Data manipulation, logic design, control flows, loops, and OOP.",
          icon: "python"
        },
        {
          name: "Java",
          level: "Object-Oriented",
          description: "Classes, inheritance, polymorphism, encapsulation, and type safety.",
          icon: "java"
        }
      ]
    },
    {
      category: "AI & Machine Learning",
      description: "Deep learning models, CNN architectures, LangChain, and RAG pipelines.",
      skills: [
        {
          name: "Deep Learning & CNN",
          level: "TensorFlow / Keras",
          description: "Convolutional neural networks, model training, and medical image classification.",
          icon: "cpu"
        },
        {
          name: "LangChain & RAG",
          level: "Generative AI",
          description: "Retrieval-Augmented Generation, vector embeddings, and LLM context orchestration.",
          icon: "layers"
        },
        {
          name: "FAISS Vector Search",
          level: "Semantic Retrieval",
          description: "High-dimensional vector indexing, similarity search, and policy document retrieval.",
          icon: "database"
        },
        {
          name: "ML & Data Science",
          level: "Scikit-Learn / Pandas",
          description: "Classification, regression, OpenCV image processing, NumPy, and data pipelines.",
          icon: "code"
        }
      ]
    },
    {
      category: "Web",
      description: "Front-end structure, styling, and interactive scripting.",
      skills: [
        {
          name: "HTML",
          level: "Semantic Markup",
          description: "Accessible document structure, semantic tags, and standards.",
          icon: "html"
        },
        {
          name: "CSS",
          level: "Modern Styling",
          description: "Responsive layouts, Flexbox, Grid, CSS animations, and UI styling.",
          icon: "css"
        },
        {
          name: "JavaScript",
          level: "Client Scripting",
          description: "DOM manipulation, event handling, asynchronous logic, and ES6+.",
          icon: "javascript"
        }
      ]
    },
    {
      category: "Database",
      description: "Relational data modeling, querying, and schema management.",
      skills: [
        {
          name: "SQL",
          level: "Relational Queries",
          description: "Complex joins, aggregations, DDL/DML, constraints, and data analysis.",
          icon: "database"
        }
      ]
    },
    {
      category: "Core Concepts",
      description: "Fundamental engineering pillars underpinning software architecture.",
      skills: [
        {
          name: "OOP",
          level: "Object-Oriented Design",
          description: "Encapsulation, abstraction, inheritance, and modular reusability.",
          icon: "box"
        },
        {
          name: "DBMS",
          level: "Database Management",
          description: "Relational schemas, normalization, ACID properties, and integrity.",
          icon: "layers"
        },
        {
          name: "Data Structures",
          level: "Algorithmic Foundation",
          description: "Arrays, linked lists, stacks, queues, trees, and algorithmic complexity.",
          icon: "git-branch"
        }
      ]
    },
    {
      category: "Tools",
      description: "Version control and collaborative workflow systems.",
      skills: [
        {
          name: "Git",
          level: "Version Control",
          description: "Branching, committing, staging, history inspection, and merging.",
          icon: "git"
        },
        {
          name: "GitHub",
          level: "Code Repository",
          description: "Remote repositories, code hosting, version tracking, and documentation.",
          icon: "github"
        }
      ]
    }
  ],

  // Selected Projects
  projects: [
    {
      id: "project-1",
      number: "01",
      title: "Early Detection of Cancer Using AI",
      tagline: "Deep Learning & CNN-Based Medical Image Classification",
      description:
        "Developed an AI-based cancer detection system that uses machine learning and deep learning techniques to support the early identification of cancer. The project analyzes medical data and images to identify patterns associated with cancer and provide faster, more accurate predictive results.",
      techStack: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "NumPy", "Pandas", "Scikit-learn", "Deep Learning"],
      codeUrl: "https://github.com/swamyalladi0",
      demoUrl: "#",
      hasLiveDemo: false,
      visualType: "terminal",
      highlights: [
        "Implemented a Convolutional Neural Network (CNN) model using TensorFlow/Keras for image-based cancer classification",
        "Applied OpenCV for medical image preprocessing — resizing, normalization, and augmentation pipelines",
        "Trained the model on labeled medical imaging datasets to distinguish benign and malignant patterns",
        "Evaluated model performance using precision, recall, F1-score, and confusion matrix analysis",
        "Optimized inference speed to support faster diagnostic decision-making in clinical workflows"
      ],
      codeSnippet: `import tensorflow as tf
from tensorflow.keras import layers, models
import cv2, numpy as np

def build_cancer_cnn(input_shape=(224, 224, 3), num_classes=2):
    model = models.Sequential([
        layers.Conv2D(32, (3,3), activation='relu', input_shape=input_shape),
        layers.MaxPooling2D(2, 2),
        layers.Conv2D(64, (3,3), activation='relu'),
        layers.MaxPooling2D(2, 2),
        layers.Conv2D(128, (3,3), activation='relu'),
        layers.GlobalAveragePooling2D(),
        layers.Dense(256, activation='relu'),
        layers.Dropout(0.5),
        layers.Dense(num_classes, activation='softmax')
    ])
    model.compile(optimizer='adam',
                  loss='categorical_crossentropy',
                  metrics=['accuracy'])
    return model

model = build_cancer_cnn()
model.summary()`
    },
    {
      id: "project-2",
      number: "02",
      title: "Applications of Machine Learning in Medical Care",
      tagline: "ML-Powered Healthcare Intelligence & Disease Prediction",
      description:
        "Explored the applications of Machine Learning in the healthcare domain, focusing on how data-driven techniques can support disease prediction, diagnosis, medical image analysis, drug discovery, patient monitoring, and personalized medicine. The project examined the role of ML in assisting healthcare professionals and enabling data-driven medical decision-making.",
      techStack: ["Python", "Machine Learning", "HTML", "CSS", "JavaScript", "MySQL", "Scikit-learn", "Pandas"],
      codeUrl: "https://github.com/swamyalladi0",
      demoUrl: "#",
      hasLiveDemo: false,
      visualType: "database",
      highlights: [
        "Researched and implemented ML models for disease prediction and early diagnosis across multiple medical conditions",
        "Built a data pipeline using Pandas for cleaning, transforming, and preparing patient health datasets",
        "Developed classification and regression models for patient risk stratification and outcome prediction",
        "Designed an interactive web dashboard using HTML, CSS, and JavaScript to visualize model insights",
        "Integrated MySQL database for structured patient data storage, retrieval, and query-based analysis"
      ],
      sampleQueries: [
        {
          name: "Patient Risk Score Analysis by Condition",
          sql: `SELECT 
    p.patient_id,
    p.age,
    p.gender,
    p.condition,
    ml.predicted_risk_score,
    ml.confidence_percent,
    ml.recommended_action
FROM patients p
JOIN ml_predictions ml ON p.patient_id = ml.patient_id
WHERE ml.confidence_percent > 75
ORDER BY ml.predicted_risk_score DESC
LIMIT 20;`
        },
        {
          name: "Disease Frequency & ML Accuracy by Category",
          sql: `SELECT 
    condition_type,
    COUNT(*) AS total_cases,
    ROUND(AVG(accuracy_score) * 100, 2) AS avg_accuracy_pct,
    SUM(CASE WHEN outcome = 'correct' THEN 1 ELSE 0 END) AS correct_predictions
FROM ml_results
GROUP BY condition_type
ORDER BY avg_accuracy_pct DESC;`
        }
      ]
    },
    {
      id: "project-3",
      number: "03",
      title: "University Policy Chatbot (RAG-Based)",
      tagline: "Retrieval-Augmented Generation for Institutional Documents",
      description:
        "Developed a Retrieval-Augmented Generation (RAG) chatbot to retrieve and generate accurate, context-aware responses from institutional policy documents. Built a semantic search pipeline using embeddings and FAISS for efficient document retrieval, integrated with LangChain and Large Language Models (LLMs) for intelligent response generation.",
      techStack: ["Python", "LangChain", "FAISS", "LLMs", "REST APIs", "RAG", "Embeddings", "NLP"],
      codeUrl: "https://github.com/swamyalladi0",
      demoUrl: "#",
      hasLiveDemo: false,
      visualType: "code",
      highlights: [
        "Built a semantic search pipeline using vector embeddings and FAISS for fast, accurate document chunk retrieval",
        "Integrated LangChain with Large Language Models (LLMs) to enable context-aware, grounded response generation",
        "Implemented document ingestion, chunking, and embedding workflows for institutional policy PDFs",
        "Designed REST API endpoints for chatbot query processing and response delivery",
        "Optimized query processing and backend workflows to reduce response latency and improve system performance"
      ],
      codeSnippet: `from langchain.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Load & chunk institutional policy documents
loader = PyPDFLoader("university_policy.pdf")
docs = loader.load()
splitter = RecursiveCharacterTextSplitter(chunk_size=512, chunk_overlap=50)
chunks = splitter.split_documents(docs)

# Build FAISS vector store with semantic embeddings
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectorstore = FAISS.from_documents(chunks, embeddings)

# RAG chain: retrieve → generate context-aware answer
qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(temperature=0),
    retriever=vectorstore.as_retriever(search_kwargs={"k": 4})
)

response = qa_chain.run("What is the attendance policy?")
print(response)`
    }
  ],

  // Education Section
  education: {
    year: "2026",
    degree: "Bachelor of Technology / Bachelor of Engineering",
    major: "Computer Science & Engineering",
    institution: "St. Mary's Group of Institutions",
    university: "JNTU",
    cgpa: "[CGPA]", // e.g. "8.6 / 10.0"
    status: "Graduating Batch 2026",
    location: "Deshmukhi, Hyderabad",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Web Technologies"
    ],
    timelineNotes: [
      "Focused on strong analytical problem solving and algorithmic reasoning.",
      "Comprehensive laboratory coursework in Python, Java, and SQL database management.",
      "Active participation in technical projects and continuous computer science learning."
    ]
  },

  // Resume Section
  resume: {
    heading: "Let's build something meaningful.",
    text: "Interested in working together or discussing an opportunity? Take a look at my resume or connect with me.",
    downloadFileName: "resume.pdf",
    filePath: "./src/assets/resume.pdf"
  },

  // Contact Information
  contact: {
    heading: "Let's Connect",
    subheading: "Have an opportunity, question, or looking to collaborate? Drop me a message below.",
    developerName: "SWAMY ALLADI",
    email: "swamyalladi0@gmail.com",
    github: "https://github.com/swamyalladi0",
    githubUsername: "@swamyalladi0",
    linkedin: "https://www.linkedin.com/in/swamy-alladi-2b60a4378/",
    linkedinUsername: "in/swamy-alladi-2b60a4378",
    location: "Degam, Armoor, NZB, Telangana",
    availability: "Available for internships & full-time junior developer roles (2026)",
    note: "Response time: Typically within 24-48 hours."
  },

  // Footer Information
  footer: {
    quote: "Designed & built with curiosity.",
    copyright: "© 2026 ALLADI SWAMY. All rights reserved.",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" }
    ]
  }
};
