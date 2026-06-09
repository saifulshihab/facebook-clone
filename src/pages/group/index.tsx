import React, { useState } from 'react';
import GroupFeed from '../../components/organisms/group/GroupFeed';
import GroupLeftSidebar from '../../components/organisms/group/GroupLeftSidebar';

const GroupPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-full overflow-hidden">
      <GroupLeftSidebar
        isMobileOpen={sidebarOpen}
        onMobileClose={() => setSidebarOpen(false)}
      />
      <GroupFeed onOpenSidebar={() => setSidebarOpen(true)} />
    </div>
  );
};

export default GroupPage;
