"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  bruteForceSchema,
  BruteForceSchema,
} from "../models/brute-force-schema.model";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { submitBruteForceForm } from "../actions";
import { AttackSubmitButton } from "@/components/form/attack-submit-button";
import { useResult } from "../../components/result.provider";

export function BruteForceForm() {
  const form = useForm<BruteForceSchema>({
    resolver: zodResolver(bruteForceSchema),
    defaultValues: {
      loginUrl: "",
      loginName: "",
      loginFieldSelector: "",
      passwordFieldSelector: "",
      loginButtonSelector: "",
    },
  });

  const { setResult } = useResult();

  const handleSubmit = async (values: BruteForceSchema) => {
    // Here you would handle the form submission
    console.log("Form submitted");
    setResult(await submitBruteForceForm(values));
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
        <div className="space-y-2">
          <AttackSubmitButton />
        </div>
      </form>
    </Form>
  );
}
