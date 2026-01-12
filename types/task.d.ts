export interface TaskCard {
  id: string;
  title: string;
  summary: string;
  source: 'Audio' | 'Image' | 'Text';
  urgencyLevel: 'Low' | 'Medium' | 'High';
  suggestedAction: string;
}
