'use client';
import deleteProduct from '@/app/administration/modification/server-action/delete.server';
import update from '@/app/administration/modification/server-action/update.server';
import { Product } from '@/lib/shopify/types';
import Image from 'next/image';
import { useFormStatus } from 'react-dom';
import { toast } from 'react-toastify';

const ProductModificationCard = ({ data }: { data: Product }) => {
  const clientAction = async (formData: FormData) => {
    const response = await update.bind(null, data)(formData);
    console.log(response);
    response?.error ? toast.error(response.error) : toast.success(response.message);
  };

  const clientActionOnDelete = async () => {
    const response = await deleteProduct.bind(null, data.id)();
    response?.error ? toast.error(response.error) : toast.success(response.message);
  };

  return (
    <details className="bg-color-10 group mx-auto max-h-[400px] w-full max-w-screen-lg content-center rounded p-1 open:border-2 open:border-cyan-950/50 open:bg-cyan-600">
      <summary className=" mx-auto grid cursor-pointer grid-cols-[50%_25%_25%]  items-center rounded-sm border-2 border-cyan-900/40 bg-cyan-600 text-sm  group-open:border-transparent  md:grid-cols-[10%_40%_25%_25%] md:py-0">
        <div className="relative hidden aspect-square h-[50px] rounded border-gray-600/30 object-cover md:block">
          <Image fill src="/images/shoe.jpg" alt="shoe" />
        </div>
        <p>{data?.title}</p>
        <p>10$</p>
        <p>23 stock</p>
      </summary>
      <div className="my-2 flex flex-col border-t-2 py-2 md:h-60 md:flex-row">
        <div className="aspect-square w-full p-4 md:h-full md:w-auto">
          <div className="relative aspect-square h-full rounded-2xl border-gray-600/30 object-cover">
            <Image fill src="/images/shoe.jpg" alt="shoe" />
          </div>
        </div>
        <div className="flex grow flex-col justify-between">
          <form className="h-full" action={clientAction}>
            <div className="flex h-[90%] flex-wrap gap-5 overflow-y-auto  p-4">
              {Object.entries(data).map(([key, value], index) => (
                <DetailsTag key={index} title={key} value={value} />
              ))}
            </div>
            <div className="mx-2 ml-auto flex justify-end gap-2">
              <FormStatusUpdateButton />
              <button
                className=" rounded-full bg-red-800 px-5 py-2 font-bold text-white hover:bg-red-800/70"
                onClick={clientActionOnDelete}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </details>
  );
};

const DetailsTag = ({ title, value }: { title: string; value: string | number }) => (
  <div className="grow">
    <p className="text-xs capitalize text-white/70">{title}</p>
    <input
      name={title}
      defaultValue={value}
      className={`w-fit border-b border-slate-900 bg-transparent text-sm focus:outline-none`}
    />
  </div>
);

function FormStatusUpdateButton() {
  const formStatus = useFormStatus();
  return (
    <button
      className="rounded-full bg-green-800 px-5 py-2 font-bold text-white hover:bg-green-800/70"
      type="submit"
    >
      {formStatus.pending ? 'Updating...' : 'Update'}
    </button>
  );
}

export default ProductModificationCard;
