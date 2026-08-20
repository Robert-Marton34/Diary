import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
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

export function Edit() {
  const { id } = useParams(); // from /edit/:id
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch existing diary entry
  useEffect(() => {
    const fetchDiary = async () => {
      const res = await fetch(`http://127.0.0.1:8000/api/diaries/${id}`);
      const data = await res.json();
      setTitle(data.title);
      setEntry(data.entry);
      setLoading(false);
    };

    fetchDiary();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`http://127.0.0.1:8000/api/diaries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, entry }),
    });

    if (response.ok) {
      navigate("/diary");
    } else {
      alert("Failed to update diary entry.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto flex items-center justify-center my-10 px-4">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-serif">✏️ Edit Diary Entry</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                id="title"
                placeholder="Edit your title..."
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
                placeholder="Update your thoughts or story..."
                className="text-base font-light leading-relaxed font-sans border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                required
              />
            </div>

            <CardFooter className="justify-end px-0">
              <Button type="submit">Update Entry</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
