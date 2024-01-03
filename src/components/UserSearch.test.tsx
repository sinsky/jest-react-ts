import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserSearch } from "./UserSearch";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

describe("UserSearch", () => {
  beforeEach(() => {
    mockAxios.get.mockClear();
  });
  it("search for Alice", async () => {
    const data = { id: 1, name: "Alice" };
    mockAxios.get.mockResolvedValue({ data });

    render(<UserSearch />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await userEvent.type(input, data.name);
    await userEvent.click(button);
    await waitFor(
      () => {
        expect(mockAxios.get).toHaveBeenCalledWith(
          `/api/users?query=${data.name}`
        ); // 1
        expect(screen.getByText(data.name)).toBeInTheDocument(); // 2
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
      },
      {
        interval: 50,
        timeout: 2000,
      }
    );
  });

  it("search user with empty query", async () => {
    mockAxios.get.mockResolvedValue({ data: null });
    render(<UserSearch />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    await waitFor(
      () => {
        expect(mockAxios.get).toHaveBeenCalledWith("/api/users?query=");
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
      },
      {
        interval: 50,
        timeout: 2000,
      }
    );
  });
});
