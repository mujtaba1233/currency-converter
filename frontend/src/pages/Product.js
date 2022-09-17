import { useParams, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();
  

  console.log(productId);


  return (
    <ul className="products">
    currency {productId}
    </ul>
  );
}
