import { useQuery } from "@tanstack/react-query";

export interface Diary {
  id: number;
  title: string;
  entry: string;
  created_at: string;
}

export function Home() {
  const { data: diaries, isLoading} = useQuery<Diary[]>({
    queryKey: ["diaries"],
    queryFn: async () => {
      const res = await fetch("http://127.0.0.1:8000/api/diaries");
      return res.json();
    },
  });

  let entryCount = 0;
  let oldestDate = "";
  let newestDate = "";

  if (diaries && diaries.length > 0) {
    const sorted = [...diaries].sort(
      (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
    entryCount = sorted.length;
    oldestDate = new Date(sorted[0].created_at).toLocaleDateString("en-GB");
    newestDate = new Date(sorted[sorted.length - 1].created_at).toLocaleDateString("en-GB");
  }

  return (
    <main className="flex-1 mt-10 px-4 py-12 z-10 max-w-4xl mx-auto text-center space-y-10">
      <h1 className="text-4xl font-bold">Welcome to MyDiaryApp</h1>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Keep track of your thoughts, memories, and reflections. Your personal diary in the cloud.
      </p>
      <img
        src="/images/maindairy.jpg"
        alt="Diary Illustration"
        className="mx-auto rounded-lg shadow-lg w-full max-w-md"
      />
      {isLoading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : (
        <div className="text-xl font-semibold mt-10">
          📓 You have{" "}
          <span className="text-primary">{entryCount}</span> diary entries between{" "}
          <span className="font-medium">{oldestDate}</span> and{" "}
          <span className="font-medium">{newestDate}</span>
        </div>
      )}
    </main>
  );
}
