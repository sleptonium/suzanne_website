---
slug: AILinks
title: AI Link dump Jan 2026
authors: [bean]
tags: [AI]
---

# Organized Notes & Links - January 2026

This document organizes 211 notes into thematic categories with brief descriptions of each resource.

---

## 1. LLM Architecture & Research

**Summary:** This section covers the evolution of Large Language Model architectures, from traditional transformers to emerging alternatives like linear attention and neural memory systems. Key themes include DeepSeek's innovations, attention mechanisms, and the ongoing debate about post-transformer architectures.

| Topic | Description | Link |
|-------|-------------|------|
| The Big LLM Architecture Comparison | Sebastian Raschka's comprehensive comparison of modern LLM architectures | [Link](https://magazine.sebastianraschka.com/p/the-big-llm-architecture-comparison) |
| 2025 LLM Year in Review | Andrej Karpathy's annual retrospective on LLM developments | [Link](https://karpathy.bearblog.dev/year-in-review-2025/) |
| 2025: The year in LLMs | Simon Willison's comprehensive LLM year summary | [Link](https://simonwillison.net/2025/Dec/31/the-year-in-llms/) |
| Titans - Memory for Attention | DeepMind's Titans model adds memory to attention for long context | [Link](https://research.google/blog/titans-miras-helping-ai-have-long-term-memory) |
| DeepSeek Sparse Attention (DSA) | O(L*k) attention calculation breakthrough | [Link](https://github.com/deepseek-ai/DeepSeek-V3.2-Exp/blob/main/DeepSeek_V3_2.pdf) |
| DeepSeek 2026 Network Topology | New network topology challenging decade-old assumptions | [arXiv](https://arxiv.org/abs/2512.20605) |
| Engram - Knowledge Storage in Transformers | DeepSeek's approach to improve knowledge memorization | [GitHub](https://github.com/deepseek-ai/Engram/tree/main) |
| Kimi Linear LLM | Efficient linear attention variants resurgence | [arXiv](https://arxiv.org/abs/2510.26692) |
| What comes after Transformers? | Neural Memory and Test-Time Training from Google Research | [arXiv](https://arxiv.org/abs/2501.00663) |
| Grassmann Flows | Attention-free alternative for sequence modeling | [arXiv](https://arxiv.org/pdf/2512.19428) |
| TiDAR: 5.9x Speedup in LLM Inference | NVIDIA's diffusion-based approach matching autoregressive quality | N/A (paper not directly linked) |
| NeurIPS 2025 Best Paper - Gated Attention | Simple idea that won best paper award | [arXiv](https://arxiv.org/pdf/2505.06708) |
| Activation Functions in Deep Learning | Why good activation functions make models trainable | [Substack](https://substack.com/@aistoriesweekly/p-182042012) |
| Complex Numbers in 1-Bit Models | Improving accuracy with complex number representations | [arXiv](https://arxiv.org/abs/2512.02901v1) |
| The Simple Mathematics of LLMs | Accessible explanation of LLM math foundations | N/A (LinkedIn discussion only) |
| Neural Net Visualization | Amazing graphical representation of neural networks | [Brilliant.org](https://brilliant.org) |

---

## 2. AI Agents & Agentic Systems

**Summary:** Resources covering the design, development, and deployment of AI agents. Includes courses, frameworks, design patterns, and practical implementation guides for building autonomous AI systems.

| Topic | Description | Link |
|-------|-------------|------|
| Google 5-Day AI Agents Course | Free 250+ page intensive course on AI agents | [Kaggle](https://www.kaggle.com/learn-guide/5-day-agents) |
| Google AI Startup Guide on Agents | Technical guide for building AI agents | [Google Cloud](https://cloud.google.com/resources/content/building-ai-agents) |
| Agentic Design Patterns (424-page book) | Comprehensive book on agentic AI systems by Google engineer | [GitHub](https://github.com/sarwarbeing-ai/Agentic_Design_Patterns/blob/main/Agentic_Design_Patterns.pdf) |
| Anthropic's Agent Harness | Claude Code's approach to complex workflows | [Anthropic](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) |
| Code Execution with MCP | Building more efficient AI agents with Model Context Protocol | [Anthropic](https://www.anthropic.com/engineering/code-execution-with-mcp) |
| Server Instructions for LLMs | Giving LLMs a user manual for your server | [MCP Blog](https://blog.modelcontextprotocol.io/posts/2025-11-03-using-server-instructions/) |
| Computer Use Agent Demo | Transparent demo showing every click and step | [HuggingFace](https://huggingface.co/spaces/smolagents/CUA) |
| Why Engineers Struggle Building Agents | Common challenges senior engineers face | [Blog](https://www.philschmid.de/why-engineers-struggle-building-agents) |
| LangGraph vs CrewAI vs AutoGen | Framework comparison for financial agents | N/A (LinkedIn discussion only) |
| Agent Data Protocol (ADP) | Fine-tuning agents for diverse tasks | [arXiv](https://arxiv.org/abs/2510.24702) |
| SLMs for Agentic Systems | Why small language models are powerful for agents | N/A (LinkedIn discussion only) |
| Gemini Deep Research Agent | Available via new Gemini Interactions API | [Google AI](https://ai.google.dev/gemini-api/docs/deep-research) |
| Google Metacontroller | For sparse reward tasks in reinforcement learning | [arXiv](https://arxiv.org/abs/2512.20605) |
| Measuring AI Agent Reliability | Real-world environment evaluation methods | N/A (LinkedIn discussion only) |
| Build AI Agents from Scratch | GitHub repo teaching agent development | [GitHub](https://github.com/pguso/ai-agents-from-scratch) |
| Chain-of-Thought Hijacking | Research showing CoT can weaken LLM safety | [Paper](https://aigi.ox.ac.uk/wp-content/uploads/2025/11/chain-of-thought-hijacking.pdf) |

---

## 3. Reinforcement Learning for LLMs

**Summary:** Dedicated to reinforcement learning techniques applied to language models, including PPO, GRPO, RLHF, and practical training approaches for reasoning models.

| Topic | Description | Link |
|-------|-------------|------|
| PPO for LLMs: A Guide for Normal People | Accessible explanation of PPO for language models | [Substack](https://cameronrwolfe.substack.com/p/ppo-llm) |
| Understanding PPO from First Principles | Deep dive into Proximal Policy Optimization | [Blog](https://mlwithouttears.com/2025/11/17/understanding-ppo-from-first-principles/) |
| DeepSeek R1 and Reinforcement Learning | How RL helps LLMs with reasoning | [arXiv](https://arxiv.org/abs/2501.17161) |
| GRPO Best Practices | Tricks for improving GRPO at scale | [Substack](https://cameronrwolfe.substack.com/p/grpo-tricks) |
| Olmo 3 Think RL Pipeline | Fully-open pipeline for reasoning model RL | [Substack](https://cameronrwolfe.substack.com/p/olmo-3) |
| TRL for Agent Training | Notebook for RL on agents with custom knowledge bases | [Colab](https://colab.research.google.com/drive/1ZcQeq7irohIMP1bBh_n3H9Ak3Dm5Yu1y) |
| Agentic RL Hackathon | PyTorch and Unsloth partnership for OpenEnv Challenge | [HuggingFace](https://huggingface.co/openenv) |
| RL Environments on HuggingFace | Build RL environments for free on HF Spaces | [HuggingFace Blog](https://huggingface.co/blog/burtenshaw/openenv-scaling) |
| Deep RL Hands-On (3rd Edition) | Packt book on deep reinforcement learning | [GitHub](https://github.com/PacktPublishing/Deep-Reinforcement-Learning-Hands-On-Third-Edition) |
| The RL Training Recipe | When post-training actually works | [Substack](https://machinelearningatscale.substack.com/p/the-rl-training-recipe-when-post) |
| gpt-oss Reinforcement Learning | Unsloth documentation for RL training | [Docs](https://docs.unsloth.ai/models/gpt-oss-how-to-run-and-fine-tune/gpt-oss-reinforcement-learning) |
| Reasoning from Scratch | Sebastian Raschka's reasoning model book code | [GitHub](https://github.com/rasbt/reasoning-from-scratch/blob/main/ch06/01_main-chapter-code/ch06_main.ipynb) |

---

## 4. Fine-Tuning & Model Training

**Summary:** Resources on training and fine-tuning language models, including efficient techniques like LoRA, training infrastructure, and comprehensive guides.

| Topic | Description | Link |
|-------|-------------|------|
| The Smol Training Playbook | Hugging Face's 214-page masterclass on training LLMs | [HuggingFace](https://huggingface.co/spaces/HuggingFaceTB/smol-training-playbook) |
| Best Fine-Tuning Guide on arXiv | Covers NLP basics, PEFT/LoRA/QLoRA, MoE, 7-stage pipeline | [arXiv](https://arxiv.org/pdf/2408.13296v1) |
| Why Use LoRA (Interview Answer) | ML Engineering interview explanation | [arXiv](https://arxiv.org/abs/2405.09673) |
| Train LLMs Locally with Zero Setup | Unsloth Docker image for easy local training | [Docs](https://docs.unsloth.ai/new/how-to-train-llms-with-unsloth-and-docker) |
| Unsloth: gpt-oss-20b on 15GB VRAM | 3x faster, 50% less memory with no accuracy loss | [Docker Hub](https://hub.docker.com/r/unsloth/unsloth) |
| DeepSpeed for Massive LLM Training | Open-source deep learning optimization library | [GitHub](https://github.com/deepspeedai/DeepSpeed) |
| Small Fine-tuned Models Are All You Need | Case for efficient small model fine-tuning | [Blog](https://blog.oumi.ai/p/small-fine-tuned-models-are-all-you) |
| Post-train Once, Reuse Many Times | Model merging insights for continuous pretraining | [arXiv](https://arxiv.org/abs/2503.20110) |
| LLM Engineers Handbook | Practical guide from fundamentals to deploying RAG apps | [GitHub](https://github.com/PacktPublishing/LLM-Engineers-Handbook) |
| Continuous Batching from First Principles | Understanding efficient inference batching | [HuggingFace](https://huggingface.co/blog/continuous_batching) |
| Run 70B LLMs on 4GB GPU | AirLLM memory-optimized inference | [github](https://github.com/0xSojalSec/airllm) |
| Epiplexity: Data Selection Measure | New measure of information for data selection/generation | [arxiv](https://arxiv.org/abs/2601.03220) |
| PyTorch/XLA for TPU | RFC for more native TPU experience | [Github](https://github.com/pytorch/xla/issues/9684) |

---

## 5. RAG & Vector Search

**Summary:** Techniques for Retrieval-Augmented Generation, vector databases, semantic search, and efficient information retrieval methods.

| Topic | Description | Link |
|-------|-------------|------|
| SBERT: 65 Hours to 5 Seconds | How Sentence-BERT enabled practical semantic search | [arXiv](https://arxiv.org/pdf/1908.10084) |
| Debunking Vector Search Myths | AWS research scientist on vector search and LLMs | [YouTube](https://www.youtube.com/watch?v=gzWErcOXIKk) |
| NyRAG: Advanced RAG Without Code | Open-source library for building RAG in minutes | [GitHub](https://github.com/abhishekkrthakur/NyRAG) |
| LightRAG: Knowledge Graph RAG | Efficient knowledge graph-based RAG solution | N/A (LinkedIn discussion only) |
| RAG with 97% Less Storage | Index millions of documents locally | [GitHub](https://github.com/yichuan-w/LEANN) |
| Traditional RAG Limitations | Why vector similarity is a blunt instrument | N/A (LinkedIn discussion - FalkorDB) |
| Chunking Strategy Doesn't Matter | Decision timing matters more than chunking method | [Weaviate](https://weaviate.io/blog/elysia-agentic-rag) |
| Context Relevance in RAG | Google research on asking the right questions | [Google Research](https://research.google/blog/deeper-insights-into-retrieval-augmented-generation-the-role-of-sufficient-context/) |
| FAISS with cuVS GPU Acceleration | Benchmarking NVIDIA's CUDA-accelerated vector search | [GitHub FAISS](https://github.com/facebookresearch/faiss) / [GitHub cuVS](https://github.com/rapidsai/cuvs) |
| Product Quantization for Vector Search | Compressing vectors and speeding up distance computations | [HAL INRIA](https://inria.hal.science/inria-00514462v2/document) |
| Embeddings: Power of Instruction | Modern instruction-based embedding models | [arXiv INSTRUCTOR](https://arxiv.org/abs/2212.09741) / [arXiv TART](https://arxiv.org/abs/2211.09260) |
| LEAF: Best SLM for Text Embedding | Lightweight Embedding Alignment Framework | [MongoDB Blog](https://www.mongodb.com/company/blog/engineering/leaf-distillation-state-of-the-art-text-embedding-models) |
| QUEST-LOFT Evaluation | Evaluation of retrieval-based QA | [arXiv](https://arxiv.org/pdf/2511.06125) |
| AI Context Graphs | Trillion-dollar opportunity in context graphs | [Foundation Capital](https://foundationcapital.com/context-graphs-ais-trillion-dollar-opportunity/) |

---

## 6. Small Language Models (SLMs)

**Summary:** The emerging trend of efficient small language models, their advantages over large models, and applications in resource-constrained environments.

| Topic | Description | Link |
|-------|-------------|------|
| Future of AI Agents with SLMs | NVIDIA/Georgia Tech paper on SLMs transforming agents | [arXiv](https://arxiv.org/abs/2506.02153) |
| Alternatives to Standard LLMs | Field guide: linear attention, text diffusion, code world models | N/A (LinkedIn discussion only) |
| NVIDIA MoE 30B Model | Beats GPT-OSS, 2-3x faster, only 6 of 128 experts active | [HuggingFace](https://huggingface.co/unsloth/Nemotron-3-Nano-30B-A3B-GGUF) |
| UC Berkeley $450 Reasoning Model | Open-source model matching larger models | [Sky-T1](https://novasky-ai.github.io/posts/sky-t1) |
| Olmo 3: Fully Transparent LLM | Open training data and process | [GitHub](https://github.com/rasbt/LLMs-from-scratch/blob/main/ch05/13_olmo3/standalone-olmo3.ipynb) |
| nano-vLLM | Lightweight vLLM implementation | [GitHub](https://github.com/GeeeekExplorer/nano-vllm) |
| Top 20 AI Models Beyond LLMs | RL, RNN, SAI, SAM, SEM, SLM, SVM, UML, VLM | N/A (LinkedIn discussion with resource links) |

---

## 7. Tools & Libraries

**Summary:** Practical tools, libraries, and APIs for AI/ML development, from data extraction to anomaly detection.

| Topic | Description | Link |
|-------|-------------|------|
| LangExtract | Google's Python library for structured data extraction | [GitHub](https://github.com/google/langextract) |
| PyOD | Python library for multivariate anomaly detection | [GitHub](https://github.com/yzhao062/pyod) |
| Exa 2.1 | State-of-the-art search API for fast and agentic search | N/A (product announcement) |
| Jupyter AI with Ollama | Local AI coding assistant in JupyterLab | [Towards Data Science](https://towardsdatascience.com/build-your-own-ai-coding-assistant-in-jupyterlab-with-ollama-and-hugging-face/) |
| NVIDIA NeMo Evaluator | Open-source library for scalable AI model evaluation | [GitHub](https://github.com/NVIDIA-NeMo/Evaluator) |
| OpenLovable | Open-source website cloning with AI agents | [GitHub](https://github.com/firecrawl/open-lovable) |
| Deepnote Open Source | Data notebook for the AI era (Apache 2.0) | [GitHub](https://github.com/deepnote/deepnote/) |
| HuggingFace Skills | Universal implementation of agent context | N/A (LinkedIn discussion only) |
| Code Wiki | Google tool for accelerating code understanding | N/A (LinkedIn discussion only) |
| Financial Datasets API | Stock market data API | [Link](https://www.financialdatasets.ai/) |
| Akvorado 2.0 | Network flow collector release | [Blog](https://vincent.bernat.ch/en/blog/2025-akvorado-2.0) |
| Universal Commerce Protocol | Google's open-source protocol for AI agent commerce | [GitHub](https://github.com/Universal-Commerce-Protocol/ucp) |

---

## 8. ML/AI Courses & Learning Resources

**Summary:** Free courses, tutorials, books, and educational materials for learning machine learning and AI.

| Topic | Description | Link |
|-------|-------------|------|
| Stanford ML by Andrew Ng (227 pages) | Complete 2023 lecture notes | [Stanford PDF](https://cs229.stanford.edu/main_notes.pdf) |
| Google Gemini Learning Path | Advanced Gen AI Labs with Gemini | [Google Cloud Skills](https://goo.gle/3MC6zKc) |
| freeCodeCamp Daily Challenges | Python and JavaScript daily coding challenges | N/A (LinkedIn discussion only) |
| Stanford 9 AI Concepts | Concepts most engineers don't learn | N/A (LinkedIn discussion with course links) |
| ML System Design (70% fail rate) | Videos, GitHub repo, and books for ML system design | N/A (LinkedIn discussion with resource links) |
| Advanced Data Engineering | Student reference for data engineering | [Link](https://chiradip.com/student-reference/advanced-data-engineering/) |
| Gemini 3 Prompting Best Practices | General usage prompting guide | [Blog](https://www.philschmid.de/gemini-3-prompt-practices) |
| Build a Reasoning Model from Scratch | Sebastian Raschka's Manning book | [Manning](https://www.manning.com/books/build-a-reasoning-model-from-scratch) |
| Latent Space Newsletter | AI/ML newsletter and podcast | [Substack](https://www.latent.space/) |
| Porting nanochat to Transformers | AI modeling history lesson | [HuggingFace](https://huggingface.co/spaces/nanochat-students/transformers) |


---

## 9. Graph Neural Networks & Advanced ML

**Summary:** Specialized machine learning topics including graph neural networks, topological data analysis, physics-informed neural networks, and causal inference.

| Topic | Description | Link |
|-------|-------------|------|
| Sheaf Neural Networks | GNNs with topological deep learning and spectral methods | [arXiv](https://arxiv.org/html/2512.00242v1) |
| Knowledge Graphs & TDA | Knowledge graphs with topological data analysis | [Hypergraphs Leaflet](https://hypergraphs-and-beyond.leaflet.pub/3majkhtt7q22f) |
| Physics-Informed Neural Networks | Solving Burgers' Equation with PINNs | [Colab](https://colab.research.google.com/drive/1gZ3KjQ0qNXCLyHReBE4mHQJ1thfdVDam) |
| Double Machine Learning | When DML is not always doubly robust | [OpenReview](https://openreview.net/pdf?id=jt5tghOeK9) |
| LeJEPA with SIGReg | Yann LeCun's latent embedding predictive architecture | [arXiv](https://arxiv.org/abs/2511.08544) |
| JEPAs Everywhere | Joint embedding predictive architectures | [GitHub](https://github.com/rbalestr-lab/lejepa) |
| Variational Autoencoders (VAEs) | Learning underlying probability distributions | [AI by Hand](https://www.byhand.ai/p/24-variational-auto-encoder-vae) |
| AI for Quantum Universe Prediction | Can AI predict quantum phenomena? | [Blog](https://quantumfrontiers.com/2025/12/11/can-ai-predict-the-quantum-universe/) |
| PoseFormer | Transformer-only 3D human pose estimation | [arXiv](https://arxiv.org/abs/2103.10455) |

---

## 10. MLOps & Production ML

**Summary:** Best practices for deploying and maintaining ML systems in production, including MLOps workflows and system design.

| Topic | Description | Link |
|-------|-------------|------|
| Best MLOps Paper | How engineers actually manage ML in production | N/A (requires LinkedIn login) |
| Vertex AI Agent Builder Governance | New features for agent governance | [Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/new-enhanced-tool-governance-in-vertex-ai-agent-builder) |
| DGX Spark for Local LLM | First impressions and benchmarks | [Blog](https://sebastianraschka.com/blog/2025/dgx-impressions.html) |
| NVIDIA Nemotron Free Models | Open-sourced agentic AI family | N/A (LinkedIn discussion only) |
| Artificial Analysis Openness Index | Measuring model openness (Olmo wins) | [Artificial Analysis](https://artificialanalysis.ai/evaluations/artificial-analysis-openness-index) |
| Next-Token Prediction Breakthrough | 4x fewer generation steps, 44% less compute | [arXiv](https://arxiv.org/abs/2510.27688) |
| LLM Content Degradation | How junk content affects LLM thinking ability | [Project Page](https://llm-brain-rot.github.io/) |

