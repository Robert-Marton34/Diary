import { Card, CardContent } from "./components/ui/card";

export function About(){
    return (
      <Card className="w-full max-w-xl shadow-xl border">
        <CardContent className="p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center">About the Author</h1>

          <div className="space-y-4 text-lg">
            <div className="flex">
              <span className="font-medium w-40">Name:</span>
              <span className="text-muted-foreground">Marton Robert</span>
            </div>

            <div className="flex">
              <span className="font-medium w-40">Email Address:</span>
              <span className="text-muted-foreground">robertmarton34@gmail.com</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
}
