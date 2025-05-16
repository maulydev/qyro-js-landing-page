"use client";

import { Terminal, FileText, Zap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Link from "next/link";

const Workflow = () => {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-teal-500 to-purple-600 text-primary-foreground">
              Simple Workflow
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Creating documentation with Qyro-js docs is as easy as 1-2-3.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="install" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="install">1. Install</TabsTrigger>
              <TabsTrigger value="create">2. Create</TabsTrigger>
              <TabsTrigger value="deploy">3. Deploy</TabsTrigger>
            </TabsList>
            <TabsContent value="install" className="mt-6 space-y-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">Install the CLI</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Get started by installing the Qyro-js docs CLI globally
                    using npm, yarn, or pnpm.
                  </p>
                  <div className="rounded-lg border bg-muted p-4">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>npm install -g qyro</code>
                    </pre>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex-1 rounded-lg border bg-background p-6 shadow-md"
                >
                  <Terminal className="h-12 w-12 text-teal-500 mb-4" />
                  <h4 className="text-lg font-bold">One Command Setup</h4>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    The CLI tool handles all dependencies and configuration
                    automatically, so you can focus on writing documentation.
                  </p>
                </motion.div>
              </div>
            </TabsContent>
            <TabsContent value="create" className="mt-6 space-y-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">Create Your Docs</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Initialize a new documentation project and start adding your
                    markdown files to the /docs folder.
                  </p>
                  <div className="space-y-2">
                    <div className="rounded-lg border bg-muted p-4">
                      <pre className="text-sm text-muted-foreground overflow-x-auto">
                        <code>qyro init my-project</code>
                      </pre>
                    </div>
                    <div className="rounded-lg border bg-muted p-4">
                      <pre className="text-sm text-muted-foreground overflow-x-auto">
                        <code>cd my-project</code>
                      </pre>
                    </div>
                    <div className="rounded-lg border bg-muted p-4">
                      <pre className="text-sm text-muted-foreground overflow-x-auto">
                        <code>
                          # Add your markdown files to the /docs folder
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex-1 rounded-lg border bg-background p-6 shadow-md"
                >
                  <FileText className="h-12 w-12 text-purple-500 mb-4" />
                  <h4 className="text-lg font-bold">Simple File Structure</h4>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Organize your documentation with a simple file structure.
                    The framework automatically generates navigation and search
                    functionality.
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <pre>
                      my-docs/
                      <br />
                      ├── docs/
                      <br />│ ├── index.md
                      <br />│ ├── getting-started.md
                      <br />│ └── reference.md
                      <br />
                      └── qyro.config.js
                    </pre>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
            <TabsContent value="deploy" className="mt-6 space-y-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">Build & Deploy</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Build your static site and deploy it to your favorite
                    hosting platform.
                  </p>
                  <div className="space-y-2">
                    <div className="rounded-lg border bg-muted p-4">
                      <pre className="text-sm text-muted-foreground overflow-x-auto">
                        <code>qyro build</code>
                      </pre>
                    </div>
                    <div className="rounded-lg border bg-muted p-4">
                      <pre className="text-sm text-muted-foreground overflow-x-auto">
                        <code># Output is in the /dist folder</code>
                      </pre>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex-1 rounded-lg border bg-background p-6 shadow-md"
                >
                  <Zap className="h-12 w-12 text-teal-500 mb-4" />
                  <h4 className="text-lg font-bold">
                    Optimized for Performance
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    The build process optimizes your site for performance with
                    code splitting, asset optimization, and SEO enhancements.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-1 flex-1"
                    >
                      <Link href="https://vercel.com/">
                        <ExternalLink className="h-4 w-4" />
                        <span>Deploy to Vercel</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-1 flex-1"
                    >
                      <Link href="https://www.netlify.com/">
                        <ExternalLink className="h-4 w-4" />
                        <span>Deploy to Netlify</span>
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
