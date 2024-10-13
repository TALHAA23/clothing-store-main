// shopify

// components
import { Product } from '@/lib/shopify/types';
import ProductList from './ProductList';

const products: Product[] = [
  {
    id: 'product-1',
    handle: 'product-handle-1',
    availableForSale: true,
    title: 'Product Title 1',
    description: 'Product Description 1',
    descriptionHtml: '<p>Product Description 1 (HTML)</p>',
    options: [
      {
        id: '324789',
        name: 'Color',
        values: ['Red', 'Blue', 'Green']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '29.99',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '19.99',
        currencyCode: 'USD'
      }
    },
    variants: [
      {
        id: 'variant-1',
        title: 'Variant 1',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Red'
          }
        ],
        price: {
          amount: '19.99',
          currencyCode: 'USD'
        },
        image: {
          originalSrc: ''
        }
      },
      {
        id: 'variant-2',
        title: 'Variant 2',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Blue'
          }
        ],
        price: {
          amount: '24.99',
          currencyCode: 'USD'
        },
        image: {
          originalSrc: ''
        }
      }
    ],
    featuredImage: {
      url: '',
      altText: 'Product 1 Featured Image',
      width: 800,
      height: 600
    },
    images: [
      {
        url: '',
        altText: 'Product 1 Image 1',
        width: 800,
        height: 600
      },
      {
        url: '',
        altText: 'Product 1 Image 2',
        width: 400,
        height: 300
      }
    ],
    seo: {
      title: 'Product Title 1 SEO',
      description: 'Product Description 1 SEO'
      // keywords: ['product', 'tag1', 'tag2']
    },
    tags: ['tag1', 'tag2'],
    updatedAt: '2024-09-27T12:17:55Z'
  }
];

const NewArrivals = async () => {
  // const products = await getProducts({ sortKey: 'CREATED_AT', reverse: true, first: 6 });
  return (
    <section className="flex w-full items-center justify-center pb-[48px] pt-[24px] md:pt-[48px]">
      <div className="flex flex-col items-center justify-center gap-[24px] sm:max-w-[95%] md:w-[904px] md:gap-[48px]">
        <h2 className="w-full text-center font-lora text-[clamp(28px,20px_+_2vw,40px)] font-medium text-veryDarkPurple md:text-left">
          New Arrivals
        </h2>
        <ProductList products={products} />
        <a href="/search/all-products" className="btn text-[clamp(18px,10px_+_2vw,22px)]">
          View More
        </a>
      </div>
    </section>
  );
};

export default NewArrivals;
