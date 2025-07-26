import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white p-6">
      <header className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Build a Job-Winning Resume in Seconds
        </h1>
        <p className="text-xl text-gray-600 max-w-xl mx-auto">
          Powered by AI. Designed to get you hired.
        </p>
        <div className="mt-8">
          <Button size="lg" className="text-lg px-6 py-3">
            Generate My Resume
          </Button>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Smart AI Writing</h2>
              <p className="text-gray-600">
                Our AI writes bullet points tailored to your job goals — no guesswork, just results.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Professional Templates</h2>
              <p className="text-gray-600">
                Choose from beautifully designed templates that recruiters love.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Instant PDF Download</h2>
              <p className="text-gray-600">
                Get your resume in a polished, downloadable PDF format — ready to send.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <footer className="text-center text-sm text-gray-400 mt-24">
        &copy; {new Date().getFullYear()} AI Resume Builder. All rights reserved.
      </footer>
    </div>
  );
}
