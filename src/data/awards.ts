export type Award = {
  title: string;
  org: string;
  date: string;
  description: string;
};

// Kept short and separate from the main narrative — technical work stays
// the focus of the page; this section is a brief supporting note.
export const awards: Award[] = [
  {
    title: 'Winner — ADB Innovation Hackathon',
    org: 'Asian Development Bank',
    date: 'Apr – May 2023',
    description:
      "Led ideation, research, prototyping, and final pitch for Drainage Bot, a sanitation automation concept addressing occupational health hazards; secured USD 7,500 in research and prototype development grants.",
  },
  {
    title: 'Organiser Head — Battle of Titans',
    org: 'International Robot Battle',
    date: 'Dec 2023 – Feb 2024',
    description:
      'Managed seven international teams and cross-border technical coordination, positioning Kathmandu as a regional robotics event hub.',
  },
  {
    title: 'Zonal Representative, Zone 7',
    org: 'Rotary International, District 3292',
    date: 'Jun 2021 – Jul 2022',
    description:
      'Organised STEM and robotics outreach programs with government-affiliated clubs to engage youth and narrow the gender gap in technology.',
  },
];
