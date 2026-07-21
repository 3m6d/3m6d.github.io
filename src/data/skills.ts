export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Computer Vision / ML',
    items: [
      'Object detection',
      'Segmentation',
      'Multi-object tracking',
      'ANPR',
      'Crowd counting',
      'Vision-Language Models (VLMs)',
      'NLP / LLMs',
      'Retrieval-Augmented Generation (RAG)',
      'Fine-tuning',
    ],
  },
  {
    category: 'Edge AI & Optimisation',
    items: [
      'Model quantisation',
      'Pruning',
      'ONNX',
      'TensorRT',
      'Edge deployment (UAV / drone systems)',
      'Real-time inference',
    ],
  },
  {
    category: 'MLOps & Cloud',
    items: [
      'AWS',
      'Cloud deployment strategy',
      'REST API development',
      'Vector databases',
      'Docker',
      'SaaS integration',
    ],
  },
  {
    category: 'Frameworks & Languages',
    items: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'Hugging Face',
      'LangChain',
      'JavaScript / TypeScript',
      'React',
      'React Native',
    ],
  },
];
