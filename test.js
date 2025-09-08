import FotoPerformance from "..../FotoPerformance";
import Lorenza2 from "../assets/images/Lorenza2.png"; // si nécessaire

export default function TestImageCentering() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ border: "1px dashed red" }}>
        <FotoPerformance imageKey="Lorenza2" />
      </div>
    </div>
  );
}
