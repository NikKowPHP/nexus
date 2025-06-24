// ROO-AUDIT-TAG :: 2.2_roadmap_node_viewing.md :: Create Roadmap.tsx component
import React, { useState } from 'react';
import NodeDetail from './NodeDetail';

const Roadmap = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const nodeDetailRef = React.useRef(null);

  // ROO-AUDIT-TAG :: 2.2_roadmap_node_viewing.md :: Implement Node Click Handling
  const handleNodeClick = (node) => {
    setSelectedNode(node);
    if (nodeDetailRef.current) {
      nodeDetailRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="roadmap">
      <h2>Product Roadmap</h2>
      
      {/* Example node - replace with actual data rendering */}
      <div className="node" onClick={() => handleNodeClick({ id: 1, title: 'Sample Node' })}>
        Clickable Node
      </div>

      <div ref={nodeDetailRef}>
        {selectedNode && <NodeDetail nodeData={selectedNode} />}
      </div>
    </div>
  );
};
// ROO-AUDIT-TAG :: 2.2_roadmap_node_viewing.md :: END

export default Roadmap;