import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
  const attacks = [
    {
      title: "Брутфорс атака",
      description:
        "Метод за опити и грешки, използван за получаване на информация като потребителска парола или личен идентификационен номер (ПИН).",
      link: "/brute-force",
    },
    {
      title: "SQL инжекция",
      description:
        "Техника за инжектиране на код, която може да унищожи вашата база данни чрез вмъкване на злонамерени SQL заявки в поле за въвеждане за изпълнение.",
      link: "/sql-injection",
    },
    {
      title: "XSS атака",
      description:
        "Cross-Site Scripting (XSS) атаките са вид инжекция, при която злонамерени скриптове се вмъкват в иначе безобидни и доверени уебсайтове.",
      link: "/xss",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-green-500 mb-12">
        WebSecureX: Платформа за тестване на кибер атаки
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {attacks.map((attack, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-green-500 border shadow-lg hover:shadow-green-500/50 transition-shadow duration-300 flex flex-col"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-500">
                {attack.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-gray-300">
                {attack.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href={attack.link} passHref className="w-full">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Тествай атаката
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
