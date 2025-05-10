// Homepage component
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const getImagePath = (name: string) => {
  // Check if the browser supports WebP (would need to be more sophisticated in production)
  const supportsWebP = true; // In reality, you'd detect this
  return supportsWebP ? `/images/${name}.webp` : `/images/${name}.png`;
};

export default async function HomePage() {
  // Check if the user is authenticated
  const { userId } = await auth();

  // If authenticated, redirect to character selection
  if (userId) {
    redirect("/characters");
  }

  // Otherwise, redirect to sign-in
  redirect("/sign-in");
}
