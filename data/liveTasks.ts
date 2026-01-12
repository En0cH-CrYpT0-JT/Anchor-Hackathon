import { fetchGeminiTasks } from '../services/gemini3Api';
import { TaskCard } from '../types/task.d';

const RAW_CHAOS_INPUTS = [
  "Audio Transcript: Hey, remind me to call the dentist. My tooth hurts and I need to book for next Tuesday.",
  "Image Analysis: A photo of an unpaid parking ticket from the City Council dated 3 days ago.",
  "Text Note: buy milk, eggs, and that specific gluten free bread Dave likes",
  "Audio Transcript: I promised Sarah I'd send her the slide deck by 5pm today."
];

export const generateLiveTasks = async (): Promise<TaskCard[]> => {
  console.log("Anchor is thinking...");
  const tasks = await fetchGeminiTasks(RAW_CHAOS_INPUTS);
  return tasks;
};
