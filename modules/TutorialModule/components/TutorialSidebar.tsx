import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { contents } from "../constants";
import { ChevronRight } from "lucide-react";

const TutorialSidebar = () => {
  return (
    <Sidebar className="border-slate-950 duration-300">
      <SidebarContent className="bg-gradient bg-slate-800">
        <SidebarGroup className="pt-24 w-64 text-white px-4">
          <SidebarGroupLabel className="text-white text-2xl mb-4 font-bold">
            Tutorial
          </SidebarGroupLabel>
          <SidebarGroupContent className="font-semibold">
            <SidebarMenu>
              {contents.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="hover:bg-slate-700 hover:text-white transition"
                    asChild
                  >
                    <a href={item.url}>
                      <ChevronRight />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default TutorialSidebar;
