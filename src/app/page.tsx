import Button from "@/components/ui/Button";
import { db } from "@/lib/db";

export default async function Home() {
  await db.set("asdfasdfasdf", "world");

  return (
    <div>
      <Button isLoading>Main Button</Button>
    </div>
  );
}
