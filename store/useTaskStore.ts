import { create } from 'zustand';
import { TaskCard } from '../types/task.d';

interface TaskState {
  tasks: TaskCard[];
  setTasks: (tasks: TaskCard[]) => void;
  onSwipe: (cardId: string, action: 'accept' | 'snooze' | 'delegate') => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  setTasks: (newTasks) => set({ tasks: newTasks }),
  onSwipe: (cardId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== cardId),
    }));
  },
}));
