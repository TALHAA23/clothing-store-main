import ProductModificationCard from '@/components/admin/ProductModificationCard';
import { Product } from '@/lib/shopify/types';

function ModificationPage() {
  const product: Product = {
    id: '32435',
    handle: 'handle',
    availableForSale: true,
    title: 'Milk',
    description: 'Goat milk 100% pure',
    descriptionHtml: '<h1>Goat milk 100% pure</h1>',
    options: [{ id: '1342', name: 'milk', values: ['2'] }],
    featuredImage: { altText: 'text', url: 'src', width: 23, height: 23 },
    images: [{ altText: 'text', url: 'src', width: 23, height: 23 }],
    priceRange: {
      maxVariantPrice: {
        amount: '56',
        currencyCode: 'rs'
      },
      minVariantPrice: {
        amount: '40',
        currencyCode: 'rs'
      }
    },
    seo: {
      description: '100% pure goat milk',
      title: 'goat milk'
    },
    tags: ['milk', 'goat milk'],
    updatedAt: '12-11-12',
    variants: [
      {
        id: '1',
        title: 'small',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'name',
            value: 'value'
          }
        ],
        price: { amount: '32', currencyCode: 'rs' },
        image: { originalSrc: 'src' }
      }
    ]
  };

  return (
    <div>
      {[1, 2, 3].map((item) => (
        <ProductModificationCard key={item} data={product} />
      ))}
    </div>
  );
}

export default ModificationPage;
