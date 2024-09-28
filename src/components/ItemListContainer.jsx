import ProductsList from '../components/ProductsList';
import { useParams } from 'react-router-dom';


export default function ItemListContainer() {
  const { categoryId } = useParams();

  return (
    <>
      <h2>Products View</h2>
      <ProductsList category={categoryId} />
    </>
  );
}
