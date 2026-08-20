import { Button } from "./components/ui/button";
import { Link } from "react-router"
import { DiaryCard } from "./DiaryCard";
import { useQuery } from "@tanstack/react-query";

export interface Diary {
  id: number;
  title: string;
  entry: string;
  created_at?: string;
  updated_at?: string;
}

export function Diary(){
    const {
    isPending,
    isError,
    data: diaries,
    error,
  } = useQuery<Diary[]>({
    queryKey: ["diaries"],
    queryFn: async () => {
      const response = await fetch("http://127.0.0.1:8000/api/diaries");
      const diaries = await response.json();
      return diaries;
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

    return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Diary</h1>
        <Link to="/entry">
          <Button variant="default">New Diary Entry</Button>
        </Link>
      </div>
      
      {diaries.map((diary, index) => (
        <div key={diary.id}>
          <DiaryCard diary={diary} />
          {index < diaries.length - 1 && <hr className="my-8 border-muted" />}
        </div>
      ))}
    </main>
    )
}