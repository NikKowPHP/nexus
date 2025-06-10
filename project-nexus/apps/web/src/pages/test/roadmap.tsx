import Roadmap from '../../components/Roadmap';

const sampleRoadmapData = {
  id: 'test-roadmap',
  title: 'Sample Learning Roadmap',
  nodes: [
    {
      id: 'node1',
      title: 'Introduction to Programming',
      content: '# Welcome!\n\nLearn the basics of programming...'
    },
    {
      id: 'node2',
      title: 'Variables and Data Types',
      content: '## Key Concepts\n\n- Strings\n- Numbers\n- Booleans'
    }
  ]
};

export default function TestRoadmapPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Roadmap Component Test Page</h1>
      <Roadmap data={sampleRoadmapData} />
    </div>
  );
}