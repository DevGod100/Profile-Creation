import DisplayUsers from "@/components/DisplayUsers";
import HideUiIfNotLoggedIn from "@/components/HideUiIfNotLoggedIn";
import DevData from "@/components/field-groups/DevData";
import EditBasic from "@/components/field-groups/EditBasic";

const profile = () => {
  return (
    <div>
      <HideUiIfNotLoggedIn />
      <div className="//MAKE GRID OF ORGANIZED CONTENT LIKE ZIPRECRUITER PROFIILE, EXCEPT IN 3 ROWS">
      {/* <EditBasic /> */}
      <DevData />
      <DisplayUsers />
      </div>
    </div>
  );
};

export default profile;
