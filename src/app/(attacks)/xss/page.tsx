import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { XSSForm } from "./components/form";
import { Metadata } from "next";
import { ResultProvider } from "../components/result.provider";
import { Result } from "../components/result";

export default function XSS() {
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-green-500 mb-6">
        Тест на XSS Атака
      </h1>
      <ResultProvider>
        <Card className="bg-gray-800 border-green-500 border shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-500">
              Конфигурация на XSS Атака
            </CardTitle>
            <CardDescription className="text-gray-300">
              Въведете необходимата информация за симулиране на XSS (Cross-Site
              Scripting) атака
            </CardDescription>
          </CardHeader>
          <CardContent>
            <XSSForm />
          </CardContent>
        </Card>
        <Result />
      </ResultProvider>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Тест на XSS Атака",
};
