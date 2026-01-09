# AI Fundamentals

**Note:** Artificial Intelligence is NEW in the 2025 exam catalog!

## Learning Objectives

After this chapter, you should be able to:
- Define the term Artificial Intelligence
- Know the differences between weak and strong AI
- Distinguish between Machine Learning and Deep Learning
- Understand basic AI concepts

---

## Core Content

### What is Artificial Intelligence?

**Artificial Intelligence (AI)** refers to systems that can perform human-like intelligence tasks such as learning, problem-solving, language understanding, or pattern recognition.

```
┌─────────────────────────────────────────────────────────────────┐
│                    ARTIFICIAL INTELLIGENCE                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              ARTIFICIAL INTELLIGENCE (AI)                │   │
│  │     (Systems that can act "intelligently")               │   │
│  │                                                          │   │
│  │   ┌───────────────────────────────────────────────────┐ │   │
│  │   │           MACHINE LEARNING (ML)                    │ │   │
│  │   │   (Systems that can learn from data)               │ │   │
│  │   │                                                    │ │   │
│  │   │   ┌─────────────────────────────────────────────┐ │ │   │
│  │   │   │           DEEP LEARNING (DL)                 │ │ │   │
│  │   │   │   (Neural networks with many layers)        │ │ │   │
│  │   │   │                                              │ │ │   │
│  │   │   │   Examples: ChatGPT, image recognition      │ │ │   │
│  │   │   └─────────────────────────────────────────────┘ │ │   │
│  │   └───────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Weak vs. Strong AI

| Type | Description | Examples | Status |
|------|-------------|----------|--------|
| **Weak AI** | Specialized for one task | Voice assistants, image classification, ChatGPT | Exists today |
| **Strong AI (AGI)** | General human-like intelligence | Like in science fiction | Does not exist |

```
┌────────────────────────────────────────────────────────────────┐
│              WEAK vs. STRONG AI                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  WEAK AI (ANI)                    STRONG AI (AGI)             │
│  Artificial Narrow Intelligence   Artificial General Intel.   │
│                                                                │
│  ┌────────────────────┐           ┌────────────────────┐      │
│  │ Specialist for     │           │ Can do EVERYTHING  │      │
│  │ ONE task           │           │ like a human       │      │
│  │                    │           │                    │      │
│  │ • Play chess       │           │ • Learn            │      │
│  │ • Generate text    │           │ • Understand       │      │
│  │ • Recognize images │           │ • Be creative      │      │
│  │ • Recognize speech │           │ • Consciousness?   │      │
│  └────────────────────┘           └────────────────────┘      │
│                                                                │
│       ✓ REAL TODAY                    ✗ HYPOTHETICAL          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Machine Learning (ML)

**Machine Learning** is a subfield of AI where systems learn from data without being explicitly programmed.

#### ML Learning Types

| Learning Type | Description | Example |
|---------------|-------------|---------|
| **Supervised Learning** | Learning with labeled data | Spam filter (email → spam/not spam) |
| **Unsupervised Learning** | Finding patterns in unlabeled data | Customer segmentation |
| **Reinforcement Learning** | Learning through reward/punishment | Game-playing AI, robots |

```
┌────────────────────────────────────────────────────────────────┐
│                ML PROCESS (Supervised Learning)                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Training Data         2. Training          3. Model      │
│   ┌─────────────────┐       ┌──────────┐       ┌──────────┐  │
│   │ Image → "Cat"   │       │          │       │          │  │
│   │ Image → "Dog"   │ ────► │Algorithm │ ────► │  Model   │  │
│   │ Image → "Cat"   │       │  learns  │       │          │  │
│   │ ...             │       │          │       │          │  │
│   └─────────────────┘       └──────────┘       └──────────┘  │
│                                                      │        │
│   4. Application                                     ▼        │
│   ┌─────────────────┐                         ┌──────────┐   │
│   │ New image       │ ────────────────────►   │  "Cat"   │   │
│   └─────────────────┘                         └──────────┘   │
│                                                               │
└────────────────────────────────────────────────────────────────┘
```

---

### Deep Learning

**Deep Learning** uses artificial neural networks with many layers (deep = many layers).

```
┌────────────────────────────────────────────────────────────────┐
│                 NEURAL NETWORK                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Input           Hidden Layers            Output              │
│   Layer           (Hidden Layers)          Layer               │
│                                                                │
│     ○───────────○───────────○──────────────○                  │
│     ○─────┬─────○─────┬─────○──────────────○                  │
│     ○─────┼─────○─────┼─────○──────────────○                  │
│     ○─────┴─────○─────┴─────○                                 │
│                                                                │
│   Image           Feature            Classification           │
│   pixels          recognition        "Cat"                    │
│                                                                │
│   → The more layers, the more complex patterns recognizable   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Aspect | Machine Learning | Deep Learning |
|--------|------------------|---------------|
| **Data structure** | Structured data | Unstructured data (images, text) |
| **Feature engineering** | Manual | Automatic |
| **Data amount** | Less data needed | Large amounts needed |
| **Computing power** | Lower | GPU/TPU required |

---

### Important AI Terms

| Term | Explanation |
|------|-------------|
| **Training** | Train AI model with data |
| **Inference** | Applying the trained model |
| **Model** | The learned knowledge of the AI |
| **Parameters** | Adjustable values in the model |
| **Dataset** | Collection of training data |
| **Label** | Correct answer for training data |
| **Hallucination** | AI generates false information convincingly |
| **Prompt** | Input/query to an AI |

---

### Generative AI

**Generative AI** creates new content (text, images, code, music).

| Type | Description | Examples |
|------|-------------|----------|
| **LLM (Large Language Model)** | Large language models | ChatGPT, Claude, Gemini |
| **Text-to-Image** | Images from descriptions | DALL-E, Midjourney, Stable Diffusion |
| **Code Generation** | Code from descriptions | GitHub Copilot, Claude |

---

### Risks and Limitations of AI

| Risk | Description |
|------|-------------|
| **Bias** | AI adopts biases from training data |
| **Hallucinations** | AI invents plausible-sounding misinformation |
| **Black box** | Decisions often not traceable |
| **Data protection** | Training data may be sensitive |
| **Job displacement** | Automation of tasks |
| **Misuse** | Deepfakes, disinformation |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **AI** | Artificial Intelligence |
| **ML** | Machine Learning |
| **DL** | Deep Learning |
| **LLM** | Large Language Model |
| **Weak AI** | Specialized for one task |
| **Strong AI** | General intelligence (hypothetical) |
| **Neural Network** | AI architecture inspired by the brain |
| **Generative AI** | AI that creates new content |

---

## Exam Tips

### Common Exam Questions

- What is Artificial Intelligence?
- What is the difference between weak and strong AI?
- What is Machine Learning?
- Name risks of AI

### Important to Remember

- **Weak AI** = specialized, exists today (ChatGPT, Alexa)
- **Strong AI** = generally intelligent, does not exist
- **ML** = learning from data
- **Deep Learning** = neural networks with many layers
- **Hallucinations** = AI invents false but plausible information

---

## Practice Exercises

### Exercise 1
What is the difference between weak and strong AI?

**Solution:**
- **Weak AI (ANI):** Is specialized for a specific task (e.g., playing chess, generating text). Exists today and is used in many applications.
- **Strong AI (AGI):** Would have general, human-like intelligence and could solve any intellectual task. Currently does not exist and is hypothetical.

### Exercise 2
What does "hallucination" mean in AI systems?

**Solution:** A **hallucination** is when an AI generates false information that sounds plausible and convincing. The AI system "invents" facts that don't exist, e.g., false source references, invented statistics, or non-existent people. Therefore, AI outputs should always be critically reviewed.

### Exercise 3
Name three risks when using AI.

**Solution:**
1. **Bias:** AI can adopt biases from training data
2. **Hallucinations:** AI generates false information convincingly
3. **Data protection:** Training data or user inputs may contain sensitive information

(Additional: Black box problem, job displacement, misuse for disinformation)

---

## Cross-References

- [05-06-02 AI Applications](./05-06-02-ai-applications.md) - Practical use of AI
- [05-06-03 AI Code Assistants](./05-06-03-ai-code-assistants.md) - AI in development
- [05-06-04 EU AI Act](./05-06-04-eu-ai-act.md) - AI regulation
