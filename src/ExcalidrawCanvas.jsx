import { Excalidraw } from "@excalidraw/excalidraw";

// ExcalidrawCanvas.jsx
export default function ExcalidrawCanvas() {
    return (
        <>
       <h1 style={{ textAlign: "center" }}>Kaustubh's ExcalidrawCanvas</h1>
       <div style={{ height: "100vh" }}>
         <Excalidraw />
       </div>
     </>
    );
}
