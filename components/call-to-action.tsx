"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section
      id="get-started"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-500/10 to-purple-600/10"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-teal-500 to-purple-600 text-primary-foreground">
                Get Started
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Build Amazing Docs?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Start creating beautiful documentation in minutes with Qyro-js
                docs. Follow these simple steps to get started.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-purple-600 text-white">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Install the CLI</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Install the Qyro-js docs CLI globally using npm.
                  </p>
                  <div className="rounded-lg border bg-muted p-2 mt-2">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>npm install -g qyro</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-purple-600 text-white">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Create a New Project</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Initialize a new documentation project.
                  </p>
                  <div className="rounded-lg border bg-muted p-2 mt-2">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>qyro init my-docs</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-purple-600 text-white">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Add Your Content</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Add your markdown files to the /docs folder.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-purple-600 text-white">
                  4
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Build and Deploy</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Build your static site and deploy it.
                  </p>
                  <div className="rounded-lg border bg-muted p-2 mt-2">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>qyro build</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-background p-8 shadow-xl"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Try It Now</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Experience the simplicity and power of Qyro-js docs with our
                    interactive demo.
                  </p>
                </div>
                <div className="rounded-lg border bg-muted p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-teal-500" />
                      <span className="text-sm font-medium">Terminal</span>
                    </div>
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>
                        $ qyro init my-docs
                        <br />
                        Creating new project...
                        <br />
                        Installing dependencies...
                        <br />
                        Success! Created my-docs
                        <br />
                        <br />
                        Next steps:
                        <br />$ cd my-docs
                        <br />$ npm run dev
                      </code>
                    </pre>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700"
                  >
                    <Link
                      target="_blank"
                      href="https://github.com/maulydev/qyro-js"
                    >
                      Download Qyro-js
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link target="_blank" href="https://qyro-js.vercel.app/">
                      View Documentation
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
