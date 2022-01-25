import GridLayout from "react-grid-layout";

type Props = {
  key: string;
};
function SideMenu(props: Props) {
  return (
    <div style={{ flex: 1 }}>
      <div>Electron Template</div>
      {"\n"}
      <div class="selected">Template</div>
    </div>
  );
}

export default SideMenu;
