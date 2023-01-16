import { MobileNavBarButtons } from "./mobile-nav-bar-buttons";

export const MobileNavBar = () => {
  return (
    <div className="mobile-nav-bar__container">
      <nav className="nav-bar">
        <MobileNavBarButtons />
      </nav>
    </div>
  );
};
