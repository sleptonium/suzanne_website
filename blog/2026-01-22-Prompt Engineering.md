---
slug: PromptEngineering
title: Prompt Engineering
authors: [bean]
tags: [AI]
---

| Category | Technique | Description |
|----------|-----------|-------------|
| **Foundational Prompting Methods** | Zero-Shot Prompting | Provides only instructions to the model without any examples. |
| | One-Shot Prompting | Includes a single template example to guide the model's output. |
| | Few-Shot Prompting | Provides multiple examples (typically three to five) to demonstrate complex patterns. |
| | Many-Shot Learning | Provides hundreds of examples to teach intricate patterns (supported by modern models). |
| | System Prompting | Sets overall context and behavioral guidelines for an entire session, such as defining safety parameters. |
| | Role Prompting | Assigns the model a specific persona (e.g., "Act as a seasoned travel blogger") to sharpen tone and expertise. |
| | Delimiters | Uses markers like triple backticks (```), XML tags, or dashes to help the model distinguish between instructions, context, and input. |
| **Advanced Reasoning Techniques** | Chain-of-Thought (CoT) | Explicitly prompts the model to generate intermediate reasoning steps before arriving at a final answer. Can be triggered by "Let's think step by step" (Zero-Shot CoT) or by providing examples of reasoning traces (Few-Shot CoT). Markedly improves performance on arithmetic, common sense reasoning, and symbolic manipulation. |
| | Tree-of-Thought (ToT) | An extension of CoT that enables the model to explore multiple reasoning paths concurrently, forming a tree structure. Allows for backtracking, self-correction, and evaluation of alternative solutions before finalizing an answer. Essential for complex strategic planning. |
| | Self-Consistency | Leverages the probabilistic nature of LLMs by generating multiple diverse reasoning paths for the same problem and performing a "majority vote" on extracted answers to select the most consistent conclusion. |
| | Step-Back Prompting | Asks the model to consider a general principle or higher-level abstraction related to the task before addressing specific details. Helps activate relevant background knowledge and mitigates superficial biases. |
| | ReAct (Reason and Act) | Interleaves CoT reasoning with external tool interaction. The agent follows a loop of "Thought, Action, Observation," allowing dynamic adaptation of plans based on real-time feedback from the environment. |
| **Context and Output Engineering** | Context Engineering | Evolution from traditional prompting, focusing on designing the complete informational environment for an AI. Integrates retrieved documents (RAG), tool outputs, interaction history, and implicit user data to build a comprehensive operational picture. |
| | Structured Output | Explicitly requests formats like JSON, XML, or Markdown tables. Critical for building reliable agentic pipelines where output of one step serves as input for the next. Validating output using libraries like Pydantic ensures probabilistic text remains deterministic and machine-readable. |
| | Factored Cognition (Decomposition) | For multifaceted tasks, the overall goal is broken down into smaller, manageable sub-tasks, and the model is prompted separately for each to reduce cognitive load and hallucinations. |
| **Iterative Refinement and Meta-Approaches** | Self-Correction | An iterative loop where an agent evaluates its own output against predefined criteria to identify inaccuracies or style issues, subsequently refining the result before final delivery. |
| | Automatic Prompt Engineering (APE) | Uses LLMs as "meta-models" to autonomously generate, evaluate, and refine prompts. |
| | Prompt Optimization | Frameworks like DSPy treat prompts as programmatic modules that can be automatically optimized against high-quality datasets to maximize objective performance scores. |
