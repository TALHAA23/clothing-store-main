'use client';
import FormStatus from '@/components/admin/FromStatus';
import create from './server-action/create.server';
// import { Product } from '@/lib/shopify/types';
// import { PageSearchParams } from '@/lib/types';
// import create from "../listing/server-actions/create.server";
// import { toast } from "react-toastify";
// import update from "../listing/server-actions/update.server";

const formFields = [
  ['name', 'text'],
  ['category', 'text'],
  ['originalPrice', 'number', { min: 0 }],
  ['salesPrice', 'number', { min: 0 }],
  ['discount', 'number', { min: 0, max: 100 }],
  ['qty', 'number', { min: 1 }]
];

const UploadPage = () => {
  const clientAction = async (formData: FormData) => {
    console.log(formData);
    const response = await create(formData);
    console.log(response);
    // response?.error
    //   ? toast.error(response.error)
    //   : toast.success(response.message);
  };

  return (
    <form
      action={clientAction}
      className="mx-auto my-6 w-full max-w-[500px] space-y-1  rounded-md border-slate-950 bg-slate-800 p-2 text-white shadow-md shadow-slate-700"
    >
      <FormStatus />
      <h1 className=" text-center text-lg font-bold text-white">Upload New Product</h1>
      {formFields.map(([title, type, props], index) => (
        <div key={index} className="group flex flex-col gap-1">
          <label
            className=" text-sm text-white/70 group-focus-within:text-cyan-600"
            htmlFor={title as string}
          >
            {title as string}
          </label>
          <input
            className="border-b-2 border-b-white bg-transparent pl-2 text-sm focus:border-cyan-600 focus:outline-none"
            type={type as string}
            {...(props as object)}
            name={title as string}
            required
          />
        </div>
      ))}
      <div className="flex gap-1">
        <button
          type="submit"
          className="w-full grow-[2] rounded border-2 border-transparent bg-cyan-800 py-2 font-bold text-white transition-all duration-100 hover:border-cyan-700 hover:bg-transparent hover:shadow-md hover:shadow-cyan-700/80 active:scale-95"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UploadPage;
