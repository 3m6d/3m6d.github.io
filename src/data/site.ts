// Central place for identity, contact links, and headline copy.
// Editing this file is the primary way to retune the site's framing for a
// specific audience (e.g. CV research vs. industry ML vs. startup roles)
// without touching any layout or component code.
export const site = {
  name: 'Dipawoli Malla',
  title: 'Machine Learning Engineer — Computer Vision & Edge AI',
  tagline:
    'I build real-time computer vision and edge AI systems — from UAV perception pipelines to optimised on-device deployment.',
  location: 'Kathmandu, Nepal',
  email: 'dipawolimalla333@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dipawolimalla',
  github: 'https://github.com/3m6d',
  siteUrl: 'https://3m6d.github.io',
  about: [
    "I'm a Machine Learning Engineer specialising in computer vision and edge AI, with hands-on experience building perception systems for UAV surveillance — object detection, segmentation, tracking, crowd counting, and Automatic Number Plate Recognition (ANPR) — and deploying them under real hardware constraints.",
    'A large part of my work is getting models out of notebooks and onto the edge: quantisation, pruning, ONNX conversion, and TensorRT optimisation for real-time inference on constrained devices. I also research and integrate Vision-Language Models (VLMs) to push scene understanding and autonomous decision-making beyond fixed-class detectors.',
    'Alongside computer vision, I have applied research experience in NLP and LLM systems — building Retrieval-Augmented Generation (RAG) pipelines, vector database infrastructure, and production REST APIs for multi-client LLM applications. I co-authored a peer-reviewed paper at IEEE RO-MAN 2023 on socially assistive robotics in healthcare, and I care about building AI systems that are reliable, well-instrumented, and actually ship — not just accurate in a benchmark.',
  ],
};
