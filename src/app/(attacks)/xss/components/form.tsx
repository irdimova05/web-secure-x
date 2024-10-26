"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { AttackSubmitButton } from "@/components/form/attack-submit-button";
import { XSSSchema } from "../models/xss-schema.model";

export function XSSForm() {
  const form = useForm<XSSSchema>({
    resolver: zodResolver(XSSSchema),
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
    },
  });

  const handleSubmit = (values: XSSSchema) => {
    // Here you would handle the form submission
    console.log("Form submitted");
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
        <div className="space-y-2">
          <AttackSubmitButton />
        </div>
      </form>
    </Form>
  );
}
