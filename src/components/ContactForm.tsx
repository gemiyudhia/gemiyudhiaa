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
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.section
      className="mt-28 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="
          bg-white
          border border-[#212021]
          rounded-3xl
          p-10
          shadow-[12px_12px_0px_#000]
        "
        transition={{ duration: 0.3 }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  className="border border-green-600 bg-green-100 text-green-800 px-4 py-3 rounded-xl font-medium"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Message sent successfully. I&apos;ll get back to you soon.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  className="border border-red-600 bg-red-100 text-red-800 px-4 py-3 rounded-xl font-medium"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </AnimatePresence>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#212021] font-bold text-base">
                    What&apos;s your name?
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Type your name"
                      className="
                        py-6
                        border-b border-[#212021]
                        focus:border-blue-500
                        transition-all
                      "
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
                  <FormLabel className="text-[#212021] font-bold text-base">
                    What&apos;s your email?
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Type your email"
                      className="
                        py-6
                        border-b border-[#212021]
                        focus:border-blue-500
                        transition-all
                      "
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
                  <FormLabel className="text-[#212021] font-bold text-base">
                    Your message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Write your message here..."
                      className="
                        h-56
                        border-b border-[#212021]
                        focus:border-blue-500
                        transition-all
                      "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <motion.div
              className="pt-6"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full
                  h-[54px]
                  rounded-2xl
                  bg-[#0838FF]
                  text-white
                  font-bold text-base
                  flex items-center justify-center gap-4
                  shadow-[6px_6px_0px_#000]
                  hover:shadow-[8px_8px_0px_#000]
                  transition-all
                  disabled:opacity-50
                "
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <motion.div
                  animate={isSubmitting ? { rotate: 360 } : {}}
                  transition={{
                    duration: 1,
                    repeat: isSubmitting ? Infinity : 0,
                    ease: "linear",
                  }}
                >
                  <Image
                    src="/images/send.png"
                    alt="send"
                    width={28}
                    height={28}
                  />
                </motion.div>
              </Button>
            </motion.div>
          </form>
        </Form>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
