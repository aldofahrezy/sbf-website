import { redirect, RedirectType } from "next/navigation";

export default function TutorialPage() {
  return redirect("/tutorial/docs", RedirectType.push);
}
