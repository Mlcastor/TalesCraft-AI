import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getServerSession } from "@/lib/auth/session";
import { HubLayout } from "@/components/player-hub/HubLayout";
import { CharacterCreationForm } from "@/components/player-hub/characters/create/CharacterCreationForm";

export const metadata: Metadata = {
  title: "Create Character | Tales Craft AI",
  description: "Create a new character for your adventures",
};

/**
 * Character Creation Page
 *
 * Allows users to create a new character for their adventures
 */
export default async function CharacterCreationPage() {
  const session = await getServerSession();

  if (!session || !session.user.id) {
    redirect("/login");
  }

  return (
    <HubLayout
      title="Create Character"
      description="Design your hero for exciting adventures"
      backLink={{
        href: "/player-hub",
        label: "Back to Hub",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <CharacterCreationForm userId={session.user.id} />
      </div>
    </HubLayout>
  );
}
