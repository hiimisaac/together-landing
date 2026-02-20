export type Feature = {
  title: string;
  body: string;
  stat: string;
};

export type Step = {
  title: string;
  body: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  relationship: string;
};

export const features: Feature[] = [
  {
    title: 'Shared tasks that feel mutual',
    body: 'Create commitments together, assign ownership clearly, and keep context in one place so nothing gets lost in chat history.',
    stat: 'One list, both aligned'
  },
  {
    title: 'Status visibility without check-in fatigue',
    body: 'See what is queued, active, blocked, or done at a glance. Progress is visible without constant reminders or repeated questions.',
    stat: 'Clear state, lower friction'
  },
  {
    title: 'In-task chat keeps conversations grounded',
    body: 'Discuss details where the task lives, not in fragmented threads. Decisions and follow-up stay attached to the original commitment.',
    stat: 'Context stays attached'
  },
  {
    title: 'Reminders that support accountability',
    body: 'Gentle reminders help both partners follow through on time while preserving tone and reducing avoidable tension.',
    stat: 'Helpful nudges, not nagging'
  }
];

export const steps: Step[] = [
  {
    title: 'Capture commitments together',
    body: 'Turn vague conversations into clear tasks with owners, timing, and notes.'
  },
  {
    title: 'Track progress in shared view',
    body: 'Both partners can see status updates as plans move from idea to done.'
  },
  {
    title: 'Resolve blockers with in-task chat',
    body: 'Keep discussions specific, respectful, and actionable right where work happens.'
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Tandem replaced the “did you do that?” loop. We now have one calm place to decide, track, and close tasks.',
    name: 'Maya R.',
    relationship: 'Married, 6 years'
  },
  {
    quote:
      'The status view helped us stop guessing. If something is blocked, we can fix it quickly instead of arguing about assumptions.',
    name: 'Jordan & Eli',
    relationship: 'Living together, 3 years'
  },
  {
    quote:
      'I like that reminders feel neutral. It keeps us focused on follow-through instead of blame.',
    name: 'Priya K.',
    relationship: 'Engaged'
  }
];
