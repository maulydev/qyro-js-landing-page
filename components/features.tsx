"use client"

import { Code, Feather, FileText, Package, Terminal, Zap } from "lucide-react";
import { motion } from "framer-motion"

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-teal-500 to-purple-600 text-primary-foreground">
              Powerful Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything You Need
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              QuickJS Docs provides all the tools you need to create beautiful
              documentation sites with minimal effort.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Zap className="h-10 w-10 text-teal-500" />,
              title: "Lightning Fast",
              description:
                "Generate static sites in milliseconds with optimized performance.",
            },
            {
              icon: <Feather className="h-10 w-10 text-purple-500" />,
              title: "Lightweight",
              description:
                "Minimal dependencies and tiny runtime for blazing fast documentation.",
            },
            {
              icon: <FileText className="h-10 w-10 text-teal-500" />,
              title: "Markdown Support",
              description:
                "Write your documentation in Markdown with full syntax support.",
            },
            {
              icon: <Code className="h-10 w-10 text-purple-500" />,
              title: "Code Highlighting",
              description:
                "Beautiful syntax highlighting for all popular programming languages.",
            },
            {
              icon: <Package className="h-10 w-10 text-teal-500" />,
              title: "Easy Installation",
              description:
                "Simple CLI tool to get started in seconds with zero configuration.",
            },
            {
              icon: <Terminal className="h-10 w-10 text-purple-500" />,
              title: "Customizable",
              description:
                "Easily customize themes and layouts to match your brand.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="p-2 rounded-full bg-muted">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
