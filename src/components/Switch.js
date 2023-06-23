import Switch from "react-switch";
import ExploreIcon from "@mui/icons-material/Explore";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
const FeedSwitch = ({ isMyFeed = false, setIsMyFeed }) => {
  return (
    <Switch
      checked={isMyFeed}
      onChange={setIsMyFeed}
      handleDiameter={50}
      offColor="#000"
      onColor="#000"
      offHandleColor="#08f"
      onHandleColor="#08f"
      height={38}
      width={150}
      borderRadius={25}
      uncheckedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor: "",
            color: "white",
            paddingRight: 2,
            borderRadius: 50,
          }}
          className="bg-dark"
        >
          <AssignmentIndIcon />{" "}
        </div>
      }
      checkedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            paddingRight: 2,
            borderRadius: 50,
          }}
          className=" text-light"
        >
          <ExploreIcon style={{ fontSize: `30px` }} />
        </div>
      }
      uncheckedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "white",
            paddingRight: 2,
            backgroundColor: `rgb(73, 137, 255)`,
            borderRadius: `50%`,
          }}
        >
          <ExploreIcon style={{ fontSize: `30px` }} />
        </div>
      }
      checkedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "white",
          }}
        >
          <AssignmentIndIcon />{" "}
        </div>
      }
      className="react-switch"
      id="small-radius-switch"
    />
  );
};
export default FeedSwitch;
