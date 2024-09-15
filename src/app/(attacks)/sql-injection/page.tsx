import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "./components/form";
import { AttackSubmitButton } from "@/components/form/attack-submit-button";

export default function SQLInjection() {
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-green-500 mb-6">
        Тест на SQL Инжекция
      </h1>

      <Card className="bg-gray-800 border-green-500 border shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-500">
            Конфигурация на SQL Инжекция
          </CardTitle>
          <CardDescription className="text-gray-300">
            Въведете необходимата информация за симулиране на SQL инжекция атака
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form />
        </CardContent>
        <CardFooter>
          <AttackSubmitButton />
        </CardFooter>
      </Card>
    </main>
  );
}
