import Link from 'next/link';

export default function Administration() {
  return (
    <Link href="administration" className=" self-end text-sm hover:text-blue-700">
      Login as administration
    </Link>
  );
}
