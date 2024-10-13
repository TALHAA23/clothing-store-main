import Link from 'next/link';

const menu = [
  { title: 'upload', link: 'upload' },
  { title: 'update or delete', link: 'modification' }
];
function Menu() {
  return (
    <div className="my-9 flex h-full flex-col items-center justify-center">
      <div className=" flex w-full max-w-[400px] flex-col gap-2 px-3 py-6 shadow-lg">
        <h1 className=" text-center text-2xl font-bold">Administration</h1>
        {menu.map((item, index) => (
          <Link
            key={index}
            href={'administration/' + item.link}
            // href={item == 'upload' ? item : 'modification'}
            className="border py-3 text-center text-lg capitalize hover:font-bold hover:scale-95 focus:scale-95"
          >
            {item.title}
          </Link>
        ))}
        <button
          //   onClick={signOutUser}
          className="border py-3 text-center text-lg capitalize hover:scale-95 focus:scale-95"
        >
          Signout
        </button>
      </div>
    </div>
  );
}

export default Menu;
