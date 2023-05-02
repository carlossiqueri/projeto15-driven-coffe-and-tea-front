import banner from "../../../images/banner.jpg";
import { StyledImage } from "./style";
export default function Banner() {
  return (
    <>
      <StyledImage src={banner} alt="Banner do site, plantação de café" />
    </>
  );
}
