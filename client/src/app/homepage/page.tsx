import { redirect } from 'next/navigation';

export default function DeprecatedHomepage() {
  redirect('/');
}
