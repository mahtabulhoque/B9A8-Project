import{useState} from "react";
import ReadBook from "./ReadBook";
import WishList from "./WishList";

const ListedBook = () => {
  const [selectedTab, setSelectedTab] = useState("read");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div role="tablist" className="tabs tabs-lifted">
      {/* Read Tab */}
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Read"
        checked={selectedTab === "read"} 
        onChange={() => handleTabChange("read")} // Handle tab change
      />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <ReadBook />
      </div>

      {/* Wishlist Tab */}
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Wish list"
        checked={selectedTab === "wishlist"} // Set checked based on selectedTab state
        onChange={() => handleTabChange("wishlist")} // Handle tab change
      />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <WishList />
      </div>
    </div>
  );
};

export default ListedBook;

