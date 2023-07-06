import { ThreeDots } from "react-loader-spinner"

const ThreeDotsLoader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="var(--text-primary)"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  )
}

export default ThreeDotsLoader
