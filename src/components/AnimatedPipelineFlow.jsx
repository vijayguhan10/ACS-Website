import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
} from "react-flow-renderer";

// ERP pipeline nodes (alternating top/bottom positions)
const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Requirement" },
    position: { x: 0, y: 220 }, // bottom
    style: {
      background: "linear-gradient(135deg,#7c4dff,#a7f3d0)",
      color: "#fff",
      borderRadius: 32,
      fontWeight: "bold",
      border: "3px solid #a78bfa",
      width: 170,
      height: 56,
      fontSize: 18,
      boxShadow: "0 6px 24px rgba(124,77,255,0.10)",
    },
  },
  {
    id: "2",
    data: { label: "Analysis" },
    position: { x: 220, y: 40 }, // top
    style: {
      background: "linear-gradient(135deg,#22c55e,#bbf7d0)",
      color: "#fff",
      borderRadius: 32,
      fontWeight: "bold",
      border: "3px solid #22c55e",
      width: 170,
      height: 56,
      fontSize: 18,
      boxShadow: "0 6px 24px rgba(34,197,94,0.10)",
    },
  },
  {
    id: "3",
    data: { label: "Development" },
    position: { x: 440, y: 220 }, // bottom
    style: {
      background: "linear-gradient(135deg,#fbbf24,#fef9c3)",
      color: "#333",
      borderRadius: 32,
      fontWeight: "bold",
      border: "3px solid #fbbf24",
      width: 170,
      height: 56,
      fontSize: 18,
      boxShadow: "0 6px 24px rgba(251,191,36,0.10)",
    },
  },
  {
    id: "4",
    data: { label: "Testing" },
    position: { x: 660, y: 40 }, // top
    style: {
      background: "linear-gradient(135deg,#06b6d4,#bae6fd)",
      color: "#fff",
      borderRadius: 32,
      fontWeight: "bold",
      border: "3px solid #06b6d4",
      width: 170,
      height: 56,
      fontSize: 18,
      boxShadow: "0 6px 24px rgba(6,182,212,0.10)",
    },
  },
  {
    id: "5",
    type: "output",
    data: { label: "Deployment" },
    position: { x: 880, y: 220 }, // bottom
    style: {
      background: "linear-gradient(135deg,#6366f1,#c7d2fe)",
      color: "#fff",
      borderRadius: 32,
      fontWeight: "bold",
      border: "3px solid #6366f1",
      width: 170,
      height: 56,
      fontSize: 18,
      boxShadow: "0 6px 24px rgba(99,102,241,0.10)",
    },
  },
];

// Pipe-like edges
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "url(#pipe1)", strokeWidth: 8 },
    markerEnd: { type: "arrowclosed", color: "#a78bfa" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "url(#pipe2)", strokeWidth: 8 },
    markerEnd: { type: "arrowclosed", color: "#22c55e" },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: { stroke: "url(#pipe3)", strokeWidth: 8 },
    markerEnd: { type: "arrowclosed", color: "#fbbf24" },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    style: { stroke: "url(#pipe4)", strokeWidth: 8 },
    markerEnd: { type: "arrowclosed", color: "#6366f1" },
  },
];

const rfStyle = {
  width: "130%",
  maxWidth: 1500,
  height: 340,
  background: "transparent",
  border: "none",
  boxShadow: "none",
  margin: "0 auto",
};

const AnimatedPipelineFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            style: { stroke: "#a3e635", strokeWidth: 8 },
          },
          eds
        )
      ),
    [setEdges]
  );

  return (
    <div style={rfStyle}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        panOnDrag={false}
        zoomOnScroll={false}
        attributionPosition={false}
      >
        {/* SVG gradients for pipe edges */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="pipe1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#7c4dff" />
            </linearGradient>
            <linearGradient id="pipe2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#bbf7d0" />
            </linearGradient>
            <linearGradient id="pipe3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#fef9c3" />
            </linearGradient>
            <linearGradient id="pipe4" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#c7d2fe" />
            </linearGradient>
          </defs>
        </svg>
      </ReactFlow>
    </div>
  );
};

export default AnimatedPipelineFlow;
