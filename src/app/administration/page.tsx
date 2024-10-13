import LoginForm from '@/components/admin/loginForm';
import Menu from '@/components/admin/menu';

function AdministrationPage() {
  const isLoggedIn = true;
  if (!isLoggedIn) return <LoginForm />;

  return <Menu />;
}

export default AdministrationPage;
