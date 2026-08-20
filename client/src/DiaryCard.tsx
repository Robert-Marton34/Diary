import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Diary } from "./Diary";
import { Link } from "react-router"

interface DiaryCardProps {
    diary: Diary;
}


export function DiaryCard({ diary }: DiaryCardProps){
    return (
      <Card>
        <CardContent className="p-8 space-y-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-semibold"> {diary.title}</h2>
            <Link to={`/edit/${diary.id}`}>
              <Button variant="link" className="p-0 h-auto text-sm">Edit</Button>
            </Link>
          </div>
          <p className="text-muted-foreground text-sm">{diary.created_at ? new Date(diary.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", }): "Unknown date"}</p>
          <p className="text-base leading-relaxed">
            {diary.entry}
          </p>
        </CardContent>
      </Card>
    )
}
