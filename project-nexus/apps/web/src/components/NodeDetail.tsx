import ReactMarkdown from 'react-markdown';
import { NodeContent } from '../lib/nodeData';

export default function NodeDetail({ nodeData }: { nodeData: NodeContent }) {
  return (
    <div className="node-detail">
      <h2>{nodeData.title}</h2>
      <div className="content">
        <ReactMarkdown>{nodeData.content}</ReactMarkdown>
      </div>
    </div>
  );
}