import { render } from "@testing-library/react";
import SnapshotComponent from "./SnapshotComponent";

describe("SnapshotComponent", () => {
  it("snapshot check", () => {
    const { container } = render(<SnapshotComponent text="React" />);
    expect(container).toMatchSnapshot();
  });
});
