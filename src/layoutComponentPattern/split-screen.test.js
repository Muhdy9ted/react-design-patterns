import { render, cleanup } from "@testing-library/react";
import SplitScreen from "./split-screen";

const puppeteer = require("puppeteer");

afterEach(cleanup);

describe("SplitScreen", () => {
    it("renders", () => {
        const {getByTestId} = render(
            <SplitScreen leftWeight={1} rightWeight={3}>
                <div>Left</div>
                <div>Right</div>
            </SplitScreen>
        );
        const wrapper = getByTestId("wrapper");
        const leftPane = getByTestId("leftPane");
        const rightPane = getByTestId("rightPane");
        expect(wrapper).toBeInTheDocument();
        expect(leftPane).toBeInTheDocument();
        expect(rightPane).toBeTruthy();
    });
});

