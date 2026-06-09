import React, { useState } from 'react';
import MarketplaceSidebar from '../../components/organisms/marketplace/MarketplaceSidebar';
import MarketplaceGrid from '../../components/organisms/marketplace/MarketplaceGrid';

const MarketplacePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-full overflow-hidden">
      <MarketplaceSidebar
        isMobileOpen={sidebarOpen}
        onMobileClose={() => setSidebarOpen(false)}
      />
      <MarketplaceGrid onOpenSidebar={() => setSidebarOpen(true)} />
    </div>
  );
};

export default MarketplacePage;
