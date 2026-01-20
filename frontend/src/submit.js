import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://vector-shift-6o2f.onrender.com/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const result = await response.json();

      alert(
        `Nodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag}`
      );
    } catch (error) {
      alert("Error submitting pipeline");
      console.error(error);
    }
  };

  return (
    <button onClick={handleSubmit} style={{ marginTop: 12 }}>
      Submit
    </button>
  );
};
