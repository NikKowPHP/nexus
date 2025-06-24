// ROO-AUDIT-TAG :: 2.2_roadmap_node_viewing.md :: Roadmap component implementation
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { RoadmapData } from '../lib/roadmapData';

export default function Roadmap({ data }: { data: RoadmapData }) {
  return (
    <TransformWrapper
      minScale={0.5}
      maxScale={2}
      limitToBounds={false}
    >
      <TransformComponent
        wrapperStyle={{
          width: '100%',
          height: '600px',
        }}
      >
        <div>
          <h1>{data.title}</h1>
          <p>Roadmap Component - Under Construction</p>
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
}
// ROO-AUDIT-TAG :: 2.2_roadmap_node_viewing.md :: END