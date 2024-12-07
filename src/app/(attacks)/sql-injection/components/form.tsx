"use client";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SQLInjectionSchema } from "../models/sql-injection-schema.model";
import { AttackSubmitButton } from "@/components/form/attack-submit-button";
import { useResult } from "../../components/result.provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitSQLInjForm } from "../actions";

export function SQLInjectionForm() {
  const form = useForm<SQLInjectionSchema>({
    resolver: zodResolver(SQLInjectionSchema),
    defaultValues: {
      loginUrl: "",
      loginName: "",
      loginFieldSelector: "",
      passwordFieldSelector: "",
      loginButtonSelector: "",
      password: "",
      url: "",
      fieldSelector: "",
      submitButtonSelector: "",
      queryType: "select",
      resultsString: "",
    },
  });

  const { setResult } = useResult();

  const handleSubmit = async (values: SQLInjectionSchema) => {
    // Here you would handle the form submission
    console.log("Form submitted");
    setResult(await submitSQLInjForm(values));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="loginUrl"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">URL адрес</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://example.com/login"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="loginName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">
                Потребителско име/имейл
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="admin@example.com"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="loginFieldSelector"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">
                Селектор на полето за потребителско име/имейл
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="#username"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">Парола</FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordFieldSelector"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">
                Селектор на полето за парола
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="#password"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="loginButtonSelector"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">
                Селектор на бутона за вход
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="#login-button"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">
                URL адрес на страницата
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="https://example.com/"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fieldSelector"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">
                Селектор на входното поле
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="#search-input"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="submitButtonSelector"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">
                Селектор на "submit" бутон
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="#button"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="queryType"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">Вид на зявката</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-gray-700 text-white border-gray-600">
                    <SelectValue placeholder="Вид на заявката" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="select">Select</SelectItem>
                  <SelectItem value="insert">Insert</SelectItem>
                  <SelectItem value="update">Update</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="resultsString"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">
                Текст при липса на резултати
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Няма намерени резултати"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <AttackSubmitButton />
        </div>
      </form>
    </Form>
  );
}
