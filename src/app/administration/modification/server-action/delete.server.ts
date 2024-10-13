import { serverActionDefaultResponse } from '@/lib/utils';
const deleteProduct = async (productId: string) => {
  console.log(productId);

  return serverActionDefaultResponse({
    message: 'successfully delete'
  });
};

export default deleteProduct;
