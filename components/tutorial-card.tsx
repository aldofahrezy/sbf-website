import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TutorialCard({
  slug,
  title,
  description,
}: {
  slug: string
  title: string
  description: string
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4">
          <Link
            href={`/tutorials/${slug}`}
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Read tutorial
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
