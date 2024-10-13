// import Product from '@/app/_models/product';
import { Product as TypeProduct } from '../shopify/types';

const newProduct = async (product: Partial<TypeProduct>) => {
  return product;
  //   const doc = await new Product(product).save();
  //   return doc;
};
export default newProduct;
