// import Product from '@/app/_models/product';
// import { TypeProduct } from '@/app/_types/TypeProduct';
// import { revalidateTag } from 'next/cache';
// import connectToDB from '../utils/database';

import { Product } from '../shopify/types';

const updateProduct = async (docId: string, updates: Partial<Product>) => {
  console.log(docId);
  return updates;
  //   await connectToDB();
  //   const doc = await Product.findByIdAndUpdate(docId, updates);
  //    return doc;
};

export default updateProduct;
