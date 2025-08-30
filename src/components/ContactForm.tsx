"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10),
});
const ContactForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="mt-20">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#212021] font-bold ml-2 text-base">
                  What's your name?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type name..."
                    {...field}
                    className="py-7 border-b border-[#212021]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#212021] font-bold ml-2 text-base">
                  What's your email address??
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type email address..."
                    {...field}
                    className="py-7 border-b border-[#212021]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#212021] font-bold ml-2 text-base">
                  What's your name message?
                </FormLabel>
                <FormControl className="mt-3">
                  <Textarea
                    placeholder="Type your message..."
                    {...field}
                    className="border-b border-[#212021] h-60"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-[#0838FF] rounded-[17px] px-3 py-5 w-[181px] h-[50px] text-white text-[17px] font-bold flex justify-evenly mt-14"
          >
            Submit
            <Image
              src="/images/send.png"
              alt="line"
              width={30}
              height={30}
              priority
            />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
