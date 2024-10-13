'use server';

import updateProduct from '@/lib/database/updateProduct';
import { Product } from '@/lib/shopify/types';
import { serverActionDefaultResponse } from '@/lib/utils';

// import productSchema from "@/app/_lib/utils/typeSafty/productSchema";
const update = async (existingProduct: Product, formData: FormData) => {
  const docId = existingProduct?.id;
  //   const modifiedFormData: Partial<Product> = productSchema.parse(
  //     Object.fromEntries(formData.entries())
  //   );
  const modifiedFormData = Object.fromEntries(formData.entries());
  for (const key in modifiedFormData) {
    if (modifiedFormData[key] == existingProduct[key]) delete modifiedFormData[key];
  }
  const numberofFieldToUpdate = Object.keys(modifiedFormData).length;
  if (!numberofFieldToUpdate) return serverActionDefaultResponse({ error: 'Nothing to update' });

  try {
    await updateProduct(docId, modifiedFormData);
    return serverActionDefaultResponse({
      message: 'successfully updated'
      //    `Successfully update ${numberofFieldToUpdate} properties of ${existingProduct.name.substring(
      //     0,
      //     20
      //   )}`
    });
  } catch (err) {
    return serverActionDefaultResponse({
      error: "Couldn't update at the movement: " + (err as unknown as Error)?.message
    });
  }
};

export default update;
