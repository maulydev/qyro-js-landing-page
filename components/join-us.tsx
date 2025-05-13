import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

const JoinUs = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Join Our Community
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get support, share your projects, and contribute to the QuickJS
              Docs ecosystem.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="https://github.com/maulydev">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
            </Button>
            {/* <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="#">
                <span>Discord</span>
              </Link>
            </Button> */}
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="https://x.com/maulydotdev">
                <span>Twitter</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
