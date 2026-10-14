export type QuizQuestion = { prompt: string; options: { label: string; value: string }[] };
export type Quiz = { slug: string; title: string; description: string; icon: string; category: string; questions: QuizQuestion[]; results: Record<string, { title: string; description: string }> };
export const quizzes: Quiz[] = [
  { slug: 'your-adventure-style', title: 'What is your adventure style?', description: 'Discover how you like to explore the world in five quick questions.', icon: '🧭', category: 'Personality', questions: [
    {prompt:'Your ideal Saturday looks like…',options:[{label:'A spontaneous road trip',value:'explorer'},{label:'A cozy day with a book',value:'dreamer'},{label:'Meeting friends somewhere new',value:'connector'}]},
    {prompt:'Pick a dream destination.',options:[{label:'A remote mountain trail',value:'explorer'},{label:'A peaceful seaside cabin',value:'dreamer'},{label:'A vibrant city festival',value:'connector'}]},
    {prompt:'When plans change, you…',options:[{label:'See an opportunity',value:'explorer'},{label:'Take a moment to rethink',value:'dreamer'},{label:'Check in with everyone',value:'connector'}]},
    {prompt:'Choose a souvenir.',options:[{label:'A map covered in notes',value:'explorer'},{label:'A handmade journal',value:'dreamer'},{label:'A photo with new friends',value:'connector'}]},
    {prompt:'Your friends know you for…',options:[{label:'Trying new things',value:'explorer'},{label:'Creative ideas',value:'dreamer'},{label:'Bringing people together',value:'connector'}]}
  ],results:{explorer:{title:'The Explorer 🧭',description:'You are energized by new experiences and unexpected paths. Keep following your curiosity!'},dreamer:{title:'The Dreamer ✨',description:'You find magic in quiet moments and creative possibilities. Your imagination takes you places.'},connector:{title:'The Connector 🌈',description:'You make every adventure better by sharing it. People are your favorite part of the journey.'}}},
  { slug:'quick-brain-challenge',title:'Quick brain challenge',description:'Five bite-sized questions to warm up your thinking.',icon:'🧠',category:'Knowledge',questions:[
    {prompt:'Which planet is known as the Red Planet?',options:[{label:'Venus',value:'wrong'},{label:'Mars',value:'correct'},{label:'Jupiter',value:'wrong'}]},
    {prompt:'What is 12 × 8?',options:[{label:'96',value:'correct'},{label:'88',value:'wrong'},{label:'108',value:'wrong'}]},
    {prompt:'Which ocean is the largest?',options:[{label:'Atlantic',value:'wrong'},{label:'Indian',value:'wrong'},{label:'Pacific',value:'correct'}]},
    {prompt:'How many sides does a hexagon have?',options:[{label:'5',value:'wrong'},{label:'6',value:'correct'},{label:'8',value:'wrong'}]},
    {prompt:'Which gas do plants absorb during photosynthesis?',options:[{label:'Carbon dioxide',value:'correct'},{label:'Oxygen',value:'wrong'},{label:'Helium',value:'wrong'}]}
  ],results:{correct:{title:'Great work! 🎉',description:'You got {score} out of {total} correct. Try again to beat your score!'},wrong:{title:'Nice try! 🌟',description:'You got {score} out of {total} correct. Every challenge is a chance to learn!'}}}
];
