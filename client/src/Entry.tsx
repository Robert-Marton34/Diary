import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

export function Entry() {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/diaries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, entry }),
    });

    if (response.ok) {
      navigate("/diary");
    } else {
      alert("Failed to save entry.");
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center my-10 px-4">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-serif">📖 New Diary Entry</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Today’s date: {new Date().toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                id="title"
                placeholder="Title of the day..."
                className="text-2xl font-bold font-serif border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <Textarea
                id="entry"
                rows={12}
                placeholder="Write your thoughts, reflections, or stories here..."
                className="text-base font-light leading-relaxed font-sans border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                required
              />
            </div>

            <CardFooter className="justify-end px-0">
              <Button type="submit">Save Entry</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
