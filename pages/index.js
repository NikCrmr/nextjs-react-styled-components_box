import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { StyledBox } from "@/components/BoxWithStyledComponent/BoxWithStyledComponent.js";

export default function HomePage() {
  return (
    <div>
      <StyledBox $backgroundcolor="green" />
      <StyledBox $backgroundcolor="black" />
    </div>
  );
}
