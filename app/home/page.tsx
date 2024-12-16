import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';

export default function HomePage() {
  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex max-w-lg flex-col gap-2">
        <Input />
        <Button className="">Button</Button>
      </div>
    </div>
  );
}
