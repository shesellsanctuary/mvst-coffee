import { Card } from "@/components/Card";
import { AxiosInstance } from "@/services/coffeeService";

export default async function Home() {
  const coffees = (await AxiosInstance.get("/coffee", {})).data;

  if (!coffees) return <div>Loading...</div>;

  return (
    <main className="mx-10 mt-12 px-10">
      <h1 className="text-3xl mb-10">You&apos;ve got this! 🚀</h1>
      {coffees.map(({ id, name, description }) => (
        <Card key={id} title={name} description={description} />
      ))}
    </main>
  );
}
