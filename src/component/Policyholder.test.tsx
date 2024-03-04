import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Policyholder from "./Policyholder";
import InfoCard from "./dataDisplay/InfoCard";

describe("Verify Policyholder", () => {
  test("The application initially displays No data", () => {
    render(<Policyholder />);
    const NoDataText = screen.getByTestId("no-data");
    expect(NoDataText).toBeInTheDocument();
  });
  test("Click InfoCard will call function", () => {
    const mockFunc = jest.fn();
    render(
      <InfoCard
        info={{
          code: "0000000004",
          name: "Michael",
          registration_date: "2021-04-05T14:20:00.000Z",
          introducer_code: "0000000001",
        }}
        type="direct"
        handleClick={mockFunc}
      />
    );
    const policyholderCode = screen.getByText("0000000004");
    userEvent.click(policyholderCode);
    expect(mockFunc).toBeCalledTimes(1);
  });
  test("Policyholder data can be search by code", async () => {
    render(<Policyholder />);
    const InputField = screen.getByTestId("input-field");
    const SearchBtn = screen.getByTestId("search-btn");

    fireEvent.change(InputField, {
      target: { value: "00000001" },
    });
    userEvent.click(SearchBtn);

    await waitFor(() => {
      expect(screen.getByTestId("loading")).toBeInTheDocument();
    });
  });
});
