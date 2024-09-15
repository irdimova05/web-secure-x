import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "./components/form";

export default function BruteForce() {
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-green-500 mb-6">
        Тест на Брутфорс Атака
      </h1>

      <Card className="bg-gray-800 border-green-500 border shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-500">
            Конфигурация на Брутфорс Атака
          </CardTitle>
          <CardDescription className="text-gray-300">
            Въведете необходимата информация за симулиране на брутфорс атака
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form />
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Започни Атаката
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
