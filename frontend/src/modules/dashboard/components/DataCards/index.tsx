import { SimpleGrid } from "@chakra-ui/react";

import { FiCalendar, FiUser } from "react-icons/fi";
import { LuBookOpen } from "react-icons/lu";
import { DataCard } from "./DataCard";
import { Stories } from "@/types";

interface DataCardsProps {
  stories: Stories;
}

export function DataCards({ stories }: DataCardsProps) {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mb={8}>
      <DataCard title="Total Stories" value={stories.length} description="Active adventures" icon={LuBookOpen} />

      <DataCard title="Active Stories" value={stories.filter((s) => s.status === "Active").length} description="Active stories" icon={FiUser} />

      <DataCard title="Last Played" value={2} description="Hours ago" icon={FiCalendar} />

    </SimpleGrid>
  )
}
