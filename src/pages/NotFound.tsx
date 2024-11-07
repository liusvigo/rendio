import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center container">
      <h1 className="text-8xl text-orange-400">404</h1>
      <p className="mb-4 text-xl text-center">
        Oops, the page you're looking for isn't here.
      </p>
      <Button
        size="lg"
        className="bg-orange-400 text-slate-950 hover:bg-orange-300"
      >
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
