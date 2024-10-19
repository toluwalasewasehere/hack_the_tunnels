import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <h1>404</h1>
      <img src="404-Page-Featured-Image" alt="404 Image" width = "500" height= "500"></img>
    </Layout>
  );
}

export default NotFound;
