import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";

// ExcalidrawCanvas.jsx
export default function ExcalidrawCanvas() {
    return (
        <>
       <h1 style={{ textAlign: "center" }}>Kaustubh's ExcalidrawCanvas</h1>
       <div style={{ height: "100vh" }}>
         <Excalidraw>
           <WelcomeScreen />
         </Excalidraw>
         <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <p
                        style={{
                            color: "black",
                            fontSize: "20px",
                            fontWeight: "bold",
                        }}
                    >
                        Made using Excalidraw docs
                    </p>
                </div>
          {/* </Excalidraw> */}
       </div>
     </>
    );
}
