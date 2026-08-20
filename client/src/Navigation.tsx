import { Card } from "./components/ui/card"
import { Link } from "react-router"
import { ThemeButton } from "./ThemeButton"

export function Navigation(){
    return(
              <nav className="z-50 shadow-lg rounded-full sticky top-5 mx-auto max-w-6xl w-11/12">
        <Card className="rounded-full shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link
                to="/"
                className="text-xl font-bold hover:text-primary transition-colors">
                MyDiaryApp
                </Link>

                <Link
                to="/diary"
                className="text-muted-foreground hover:text-foreground transition-colors">
                Diary
                </Link>

                <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors">
                About
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">Welcome!</span>
                
                <ThemeButton />
              </div>
            </div>
          </div>
        </Card>
      </nav>
    )
}