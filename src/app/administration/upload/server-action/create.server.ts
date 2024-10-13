'use server';
// import productSchema from "@/app/_lib/utils/typeSafty/productSchema";
import newProduct from '@/lib/database/newProduct';
import { serverActionDefaultResponse } from '@/lib/utils';

const create = async (formData: FormData) => {
  //   const modifiedFormData: Partial<Product> = productSchema.parse(
  //     Object.fromEntries(formData.entries())
  //   );
  //   await new Promise((res) => setTimeout(res, 10000));
  const modifiedFormData = Object.fromEntries(formData.entries());
  for (const key in modifiedFormData) if (key.startsWith('$ACTION')) delete modifiedFormData[key];
  console.log(modifiedFormData);
  try {
    await newProduct(modifiedFormData);
    return serverActionDefaultResponse({
      message: 'Product uploaded successfully'
    });
  } catch (err) {
    return serverActionDefaultResponse({ error: (err as Error).message });
  }
};

export default create;
