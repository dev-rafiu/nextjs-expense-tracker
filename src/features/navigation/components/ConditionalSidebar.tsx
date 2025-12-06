import { currentUser } from "@clerk/nextjs/server";
import Sidebar from "./Sidebar";

const ConditionalSidebar = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  return <Sidebar />;
};

export default ConditionalSidebar;
