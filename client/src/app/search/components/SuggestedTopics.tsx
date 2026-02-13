import Icon from '@/components/ui/AppIcon';

interface SuggestedTopicsProps {
  onTopicClick: (topic: string) => void;
}

const SuggestedTopics = ({ onTopicClick }: SuggestedTopicsProps) => {
  const topics = [
    {
      id: 'topic_1',
      text: 'Web Development',
      icon: 'CodeBracketIcon' as const,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'topic_2',
      text: 'Machine Learning',
      icon: 'CpuChipIcon' as const,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      id: 'topic_3',
      text: 'Productivity',
      icon: 'LightBulbIcon' as const,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      id: 'topic_4',
      text: 'Urban Gardening',
      icon: 'HomeIcon' as const,
      color: 'bg-green-50 text-green-600',
    },
    {
      id: 'topic_5',
      text: 'Blockchain',
      icon: 'CubeIcon' as const,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      id: 'topic_6',
      text: 'Time Management',
      icon: 'ClockIcon' as const,
      color: 'bg-rose-50 text-rose-600',
    },
  ];

  return (
    <div className="mb-12">
      <h3 className="text-lg font-bold text-foreground mb-4">Trending Topics</h3>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onTopicClick(topic.text)}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl ${topic.color} font-medium whitespace-nowrap hover:scale-105 transition-transform flex-shrink-0`}
          >
            <Icon name={topic.icon} size={20} />
            {topic.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedTopics;
